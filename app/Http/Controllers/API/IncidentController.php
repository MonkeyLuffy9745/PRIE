<?php

namespace App\Http\Controllers\API;

use Dompdf\Dompdf;
use Dompdf\Options;
use Illuminate\Http\Request;
use Maravel\Http\Controllers\APIController;
use PhpOffice\PhpWord\IOFactory;
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

            // Convertir le Word en PDF en utilisant PHP (PHPWord + DomPDF)
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
     * Convertit un document Word en PDF en utilisant PHPWord et DomPDF
     *
     * @param  string  $wordPath  Chemin du fichier Word
     * @param  string  $pdfPath  Chemin de sortie du PDF
     */
    private function convertWordToPdf(string $wordPath, string $pdfPath): bool
    {
        try {
            // Charger le document Word
            $phpWord = IOFactory::load($wordPath);

            // Exporter le document Word en HTML
            $htmlWriter = IOFactory::createWriter($phpWord, 'HTML');
            $htmlPath = dirname($pdfPath).'/'.pathinfo($wordPath, PATHINFO_FILENAME).'.html';
            $htmlWriter->save($htmlPath);

            // Lire le contenu HTML
            $htmlContent = file_get_contents($htmlPath);

            // Nettoyer le HTML pour améliorer la compatibilité avec DomPDF
            $htmlContent = $this->cleanHtmlForPdf($htmlContent);

            // Configurer DomPDF
            $options = new Options;
            $options->set('isHtml5ParserEnabled', true);
            $options->set('isRemoteEnabled', true);
            $options->set('defaultFont', 'DejaVu Sans');
            $options->set('isFontSubsettingEnabled', true);

            // Créer l'instance DomPDF
            $dompdf = new Dompdf($options);

            // Charger le HTML dans DomPDF
            $dompdf->loadHtml($htmlContent, 'UTF-8');

            // Définir le format de papier (A4 par défaut)
            $dompdf->setPaper('A4', 'portrait');

            // Rendre le PDF
            $dompdf->render();

            // Sauvegarder le PDF
            $pdfOutput = $dompdf->output();
            file_put_contents($pdfPath, $pdfOutput);

            // Nettoyer le fichier HTML temporaire
            @unlink($htmlPath);

            return file_exists($pdfPath);
        } catch (\Exception $e) {
            \Log::error('Erreur lors de la conversion Word en PDF: '.$e->getMessage());
            throw $e;
        }
    }

    /**
     * Nettoie le HTML pour améliorer la compatibilité avec DomPDF
     *
     * @param  string  $html  Contenu HTML brut
     * @return string HTML nettoyé
     */
    private function cleanHtmlForPdf(string $html): string
    {
        // Vérifier si le HTML contient déjà une structure complète
        $hasHtmlTag = stripos($html, '<html') !== false;
        $hasBodyTag = stripos($html, '<body') !== false;

        // Ajouter des styles CSS de base pour améliorer le rendu
        $css = '
        <style>
            body {
                font-family: DejaVu Sans, Arial, sans-serif;
                font-size: 12pt;
                line-height: 1.6;
                margin: 20px;
            }
            h1, h2, h3, h4, h5, h6 {
                margin-top: 20px;
                margin-bottom: 10px;
                font-weight: bold;
            }
            h1 { font-size: 18pt; }
            h2 { font-size: 16pt; }
            h3 { font-size: 14pt; }
            p {
                margin: 10px 0;
                text-align: justify;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin: 15px 0;
            }
            table td, table th {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }
            table th {
                background-color: #f2f2f2;
                font-weight: bold;
            }
        </style>
        ';

        // Si le HTML est déjà complet, injecter le CSS dans le head
        if ($hasHtmlTag && $hasBodyTag) {
            // Injecter le CSS dans le head existant
            if (stripos($html, '</head>') !== false) {
                $html = str_ireplace('</head>', $css.'</head>', $html);
            } elseif (stripos($html, '<body') !== false) {
                // Si pas de head, ajouter le CSS avant le body
                $html = str_ireplace('<body', $css.'<body', $html);
            }
        } else {
            // Encapsuler le HTML dans une structure valide
            $html = '<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    '.$css.'
</head>
<body>
    '.$html.'
</body>
</html>';
        }

        return $html;
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
