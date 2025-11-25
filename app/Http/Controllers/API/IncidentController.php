<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Maravel\Http\Controllers\APIController;
use PhpOffice\PhpWord\TemplateProcessor;

/**
 * @group Incident
 *
 * EndPoints pour gérer les Incident
 */
class IncidentController extends APIController
{
    protected string $modelClass = "\App\Models\Incident";

    /**
     * Affiche les Incident
     *
     * @queryParam  attribute									string				Description de l'attribut.													 No-example
     * @queryParam  with_relation								string				Afficher la relation.														Example: false
     * @queryParam  paginate									string				Utiliser la pagination.														Example: false
     *
     * @response 200
     */
    public function index(Request $request)
    {
        $this->indexSearchFieldList = ['title',
            'description',
            'people_involved',
            'circumstances',
            'actions_taken',
            'proposed_solutions',
        ];
        $this->indexManualFilter = function ($list, $connectedUser, $requestData) {
            return $list;
        };

        return parent::index($request);
    }

    /**
     * Affiche un Incident
     *
     * @urlParam	id											integer				Le Incident.																Example: 1.
     *
     * @queryParam  with_relation								string				Afficher la relation.														Example: false
     *
     * @response 200
     */
    public function show(Request $request, $id)
    {
        return parent::show($request, $id);
    }

    /**
     * Génère un document PDF d'un Incident
     *
     * @urlParam	id											integer				Le Incident.																Example: 1.
     *
     * @response 200
     */
    public function generatePdf(Request $request, $id)
    {
        $model = call_user_func_array([$this->modelClass, 'find'], [$id]);
        if (! $model) {
            return $this->responseError(['message' => 'Incident non trouvé'], 404);
        }

        // Charger les relations nécessaires
        $model->load('location', 'user');

        // Chemin du template Word - utiliser un chemin absolu
        $templatePath = base_path('Document/Incident.docx');

        // Vérifier que le fichier existe
        if (! file_exists($templatePath)) {
            return $this->responseError(['message' => ['Template Word non trouvé à: '.$templatePath]], 404);
        }

        // Vérifier que le fichier est lisible
        if (! is_readable($templatePath)) {
            return $this->responseError(['message' => ['Template Word non lisible. Vérifiez les permissions du fichier.'.$templatePath]], 403);
        }

        try {
            // Vérifier que le fichier est bien un fichier Word valide
            $mimeType = mime_content_type($templatePath);
            if (! in_array($mimeType, [
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/zip',
                'application/x-zip-compressed',
            ])) {
                return $this->responseError([
                    'message' => ['Le fichier template n\'est pas un fichier Word valide. Type détecté: '.$mimeType],
                ], 400);
            }

            // Créer le TemplateProcessor avec le template
            $templateProcessor = new TemplateProcessor($templatePath);

            // Remplir les variables du template avec les données de l'incident
            $templateProcessor->setValue('id', $id);
            $templateProcessor->setValue('title', $model->title ?? 'N/A');
            $templateProcessor->setValue('occurred_at', $model->occurred_at_fr ?? 'N/A');
            $templateProcessor->setValue('location', $model->location->name ?? 'N/A');
            $templateProcessor->setValue('description', $model->description ?? 'N/A');
            $templateProcessor->setValue('people_involved', $model->people_involved ?? 'N/A');
            $templateProcessor->setValue('actions_taken', $model->actions_taken ?? 'N/A');
            $templateProcessor->setValue('circumstances', $model->circumstances ?? 'N/A');
            $templateProcessor->setValue('proposed_solutions', $model->proposed_solutions ?? 'N/A');
            $templateProcessor->setValue('user_name', $model->user->full_name ?? 'N/A');

            // Créer un répertoire temporaire pour les fichiers
            $tempDir = storage_path('app/tmp');
            if (! is_dir($tempDir)) {
                mkdir($tempDir, 0755, true);
            }

            // Générer un nom de fichier unique
            $wordFileName = 'incident-'.$id.'-'.time().'.docx';
            $pdfFileName = 'incident-'.$id.'-'.time().'.pdf';
            $wordPath = $tempDir.'/'.$wordFileName;
            $pdfPath = $tempDir.'/'.$pdfFileName;

            // Sauvegarder le document Word généré
            $templateProcessor->saveAs($wordPath);

            // Convertir le Word en PDF en utilisant LibreOffice
            $conversionSuccess = false;
            try {
                $conversionSuccess = $this->convertWordToPdf($wordPath, $pdfPath);
            } catch (\Exception $e) {
                // Si la conversion échoue, on retournera le Word
                \Log::warning('Erreur lors de la conversion Word en PDF: '.$e->getMessage());
            }

            // Vérifier si le PDF a été créé
            if (! $conversionSuccess || ! file_exists($pdfPath)) {
                // Si la conversion a échoué, retourner le Word
                $wordContent = file_get_contents($wordPath);
                @unlink($wordPath);

                return response($wordContent, 200)
                    ->header('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
                    ->header('Content-Disposition', 'attachment; filename="incident-'.$id.'.docx"');
            }

            // Lire le contenu du PDF
            $pdfContent = file_get_contents($pdfPath);

            // Nettoyer les fichiers temporaires
            @unlink($wordPath);
            @unlink($pdfPath);

            // Retourner le PDF
            return response($pdfContent, 200)
                ->header('Content-Type', 'application/pdf')
                ->header('Content-Disposition', 'attachment; filename="incident-'.$id.'.pdf"');
        } catch (\PhpOffice\PhpWord\Exception\Exception $e) {
            // Erreur spécifique à PHPWord (fichier corrompu, format invalide, etc.)
            return $this->responseError([
                'message' => 'Erreur lors du traitement du template Word: '.$e->getMessage(),
                'template_path' => $templatePath,
                'error_type' => 'PHPWord Exception',
            ], 500);
        } catch (\Exception $e) {
            // Autres erreurs
            return $this->responseError([
                'message' => 'Erreur lors de la génération du PDF: '.$e->getMessage(),
                'template_path' => $templatePath,
                'file' => $e->getFile(),
                'line' => $e->getLine(),
            ], 500);
        }
    }

    /**
     * Convertit un document Word en PDF en utilisant LibreOffice
     *
     * @param  string  $wordPath  Chemin du fichier Word
     * @param  string  $pdfPath  Chemin de sortie du PDF
     */
    private function convertWordToPdf(string $wordPath, string $pdfPath): bool
    {
        // Vérifier si LibreOffice est installé
        $libreOfficePath = $this->findLibreOffice();

        if (! $libreOfficePath) {
            \Log::warning('LibreOffice n\'est pas installé. Impossible de convertir Word en PDF.');

            return false;
        }

        // Commande pour convertir Word en PDF
        $command = sprintf(
            '%s --headless --convert-to pdf --outdir %s %s',
            escapeshellarg($libreOfficePath),
            escapeshellarg(dirname($pdfPath)),
            escapeshellarg($wordPath)
        );

        // Exécuter la commande
        exec($command.' 2>&1', $output, $returnCode);

        // Le fichier PDF sera créé avec le même nom que le Word mais avec l'extension .pdf
        $expectedPdfPath = dirname($pdfPath).'/'.pathinfo($wordPath, PATHINFO_FILENAME).'.pdf';

        if (file_exists($expectedPdfPath)) {
            // Renommer le fichier PDF si nécessaire
            if ($expectedPdfPath !== $pdfPath) {
                rename($expectedPdfPath, $pdfPath);
            }

            return true;
        }

        return false;
    }

    /**
     * Trouve le chemin de LibreOffice
     */
    private function findLibreOffice(): ?string
    {
        $possiblePaths = [
            '/usr/bin/libreoffice',
            '/usr/local/bin/libreoffice',
            '/opt/libreoffice*/program/soffice',
            'soffice', // Si dans le PATH
        ];

        foreach ($possiblePaths as $path) {
            if ($path === 'soffice') {
                // Vérifier si soffice est dans le PATH
                exec('which soffice 2>&1', $output, $returnCode);
                if ($returnCode === 0 && ! empty($output[0])) {
                    return $output[0];
                }
            } else {
                // Vérifier les chemins glob
                $globPaths = glob($path);
                if (! empty($globPaths) && is_executable($globPaths[0])) {
                    return $globPaths[0];
                }

                // Vérifier le chemin exact
                if (file_exists($path) && is_executable($path)) {
                    return $path;
                }
            }
        }

        return null;
    }

    /**
     * Créer un nouveau Incident
     *
     * @bodyParam 	attribute									string				L'attribut.																	Example: value
     *
     * @response 200
     */
    public function store(Request $request)
    {
        $connectedUser = $request->user();
        $this->storeValidationArray = [
            'title' => 'required|string|max:255',
            'occurred_at' => 'required|date',
            'location_id' => 'required|exists:locations,id',
            'description' => 'nullable|string',
            'people_involved' => 'nullable|string',
            'actions_taken' => 'nullable|string',
        ];
        $this->storeManualValidationsFunction = function ($requestData) {
            return null;
        };
        $this->storeBeforeCreateFunction = function ($requestData) use ($connectedUser) {
            $requestData['user_id'] = $connectedUser->id;

            return $requestData;
        };
        $this->storeAfterCreateFunction = function ($model, $requestData, $data) {
            return $model;
        };
        $this->storeBeforeCommitFunction = function ($model, $requestData, $data) {
            return $model;
        };
        $this->storeAfterCommitFunction = function ($model, $requestData, $data) {
            return $model;
        };
        $this->storeRelationArray = [
        ];

        return parent::store($request);
    }

    /**
     * Met à jour un Incident
     *
     * @urlParam	id											integer				Le Incident.																Example: 1.
     *
     * @bodyParam 	attribute									string				L'attribut.																	Example: value
     *
     * @response 200
     */
    public function update(Request $request, $id)
    {
        $connectedUser = $request->user();
        $this->updateGetValidationArrayFunction = function ($id) {
            return [
                'title' => 'required|string|max:255',
                'occurred_at' => 'required|date',
                'location_id' => 'required|exists:locations,id',
                'description' => 'nullable|string',
                'people_involved' => 'nullable|string',
                'actions_taken' => 'nullable|string',
            ];
        };
        $this->updateManualValidationsFunction = function ($requestData, $model) {
            return null;
        };
        $this->updateBeforeUpdateFunction = function ($model, $requestData, $data) {
            return $requestData;
        };
        $this->updateAfterUpdateFunction = function ($model, $requestData, $data) {
            return $model;
        };
        $this->updateBeforeCommitFunction = function ($model, $requestData, $data) {
            return $model;
        };
        $this->updateAfterCommitFunction = function ($model, $requestData, $data) {
            return $model;
        };
        $this->updateRelationArray = [
        ];

        return parent::update($request, $id);
    }

    /**
     * Supprime un Incident
     *
     * @urlParam	id											integer				Le Incident.																Example: 1.
     *
     * @response 200
     */
    public function destroy(Request $request, $id)
    {
        $connectedUser = $request->user();
        $this->deleteBeforeDeleteFunction = function ($model) {
            return $model;
        };
        $this->deleteAfterDeleteFunction = function ($model) {
            return $model;
        };
        $this->updateRelationArray = [
        ];

        return parent::destroy($request, $id);
    }
}
