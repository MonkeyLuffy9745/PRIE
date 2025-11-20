<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Maravel\Http\Controllers\APIController;

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
	 * 
	 * @queryParam  with_relation								string				Afficher la relation.														Example: false
	 * 
	 * @queryParam  paginate									string				Utiliser la pagination.														Example: false
	 *
	 * @response 200
	 */
	public function index(Request $request)
    {
        $this->indexSearchFieldList = ['title',
		'place_description',
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
			'place_description' => 'nullable|string',
			'people_involved' => 'nullable|string',
			'circumstances' => 'nullable|string',
			'actions_taken' => 'nullable|string',
			'proposed_solutions' => 'nullable|string',
		];
		$this->storeManualValidationsFunction = function ($requestData) use ($connectedUser) {
			return null;
		};
		$this->storeBeforeCreateFunction = function ($requestData) use ($connectedUser) {
			return $requestData;
		};
		$this->storeAfterCreateFunction = function ($model, $requestData, $data) use ($connectedUser) {
			return $model;
		};
		$this->storeBeforeCommitFunction = function ($model, $requestData, $data) use ($connectedUser) {
			return $model;
		};
		$this->storeAfterCommitFunction = function ($model, $requestData, $data) use ($connectedUser) {
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
				'place_description' => 'nullable|string',
				'people_involved' => 'nullable|string',
				'circumstances' => 'nullable|string',
				'actions_taken' => 'nullable|string',
				'proposed_solutions' => 'nullable|string',
			];
		};
		$this->updateManualValidationsFunction = function ($requestData, $model) use ($connectedUser) {
			return null;
		};
		$this->updateBeforeUpdateFunction = function ($model, $requestData, $data) use ($connectedUser) {
			return $requestData;
		};
		$this->updateAfterUpdateFunction = function ($model, $requestData, $data) use ($connectedUser) {
			return $model;
		};
		$this->updateBeforeCommitFunction = function ($model, $requestData, $data) use ($connectedUser) {
			return $model;
		};
		$this->updateAfterCommitFunction = function ($model, $requestData, $data) use ($connectedUser) {
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
		$this->deleteBeforeDeleteFunction = function ($model) use ($connectedUser) {
			return $model;
		};
		$this->deleteAfterDeleteFunction = function ($model) use ($connectedUser) {
			return $model;
		};
		$this->updateRelationArray = [
		];
		return parent::destroy($request, $id);
    }
}
