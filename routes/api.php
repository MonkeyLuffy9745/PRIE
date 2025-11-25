<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\IncidentController;
use App\Http\Controllers\API\LocationController;
use App\Http\Controllers\API\UserController;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function () {
    Route::post('auth/login', 'login');

    Route::middleware('auth:sanctum')->group(function () {
        Route::prefix('/auth')->name('auth.')->group(function () {
            Route::get('data', 'data')->name('data');
            Route::delete('logout', 'logout')->name('logout');
        });
        Route::prefix('user')->name('user.')->controller(UserController::class)->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('{id}', 'show')->name('show');
            Route::post('/', 'store')->name('store');
            Route::put('{id}', 'update')->name('update');
            Route::delete('{id}', 'destroy')->name('destroy');
        });
        Route::resource('incident', IncidentController::class);
        Route::resource('location', LocationController::class);
        // Route::resource('incident-photo', IncidentPhotoController::class);
    });
    Route::get('/pdf/incident/{id}', [IncidentController::class, 'generatePdf'])->name('incident.pdf');
});
