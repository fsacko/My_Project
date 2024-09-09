<?php

use Illuminate\Http\Request;
use App\Models\AnneeScolaire;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ModuleController;
use App\Http\Controllers\FiliereController;
use App\Http\Controllers\EtudiantController;
use Illuminate\Auth\Middleware\Authenticate;
use App\Http\Controllers\UniversiteController;
use App\Http\Controllers\AnneeScolaireController;
use App\Http\Controllers\CourController;
use App\Http\Controllers\Frontend\Etudiant\CourPageController;
use App\Http\Controllers\Frontend\Etudiant\EtudiantPageController;
use App\Http\Controllers\Frontend\Etudiant\ModulePageController;
use App\Http\Controllers\FrontEnd\LoginController;

Route::post('/login', [LoginController::class, 'login']);

// Sans Middleware :

    Route::get('universite', [UniversiteController::class,'index'])->name('universite.login');
    Route::get('universite/{id}', [UniversiteController::class,'universiteById']);
    // COTE POUR LES ADMINISTRATIONS DES UNIVERSITES COTE ETUDIANT
    Route::apiResource('etudiants', EtudiantController::class);
    Route::post('insertEtudiants', [EtudiantController::class,'store']);
    Route::get('listeEtudiants/{id}', [EtudiantController::class,'index']);
    Route::get('etudiantByFiliere/{id}/{idU}', [EtudiantController::class,'indexF']);
    Route::get('etudiants/{id}/{idU}', [EtudiantController::class,'delete']);
    // COTE FILIERE
    Route::apiResource('classe', FiliereController::class);
    Route::get('listeClasse/{id}', [FiliereController::class,'index']);
    Route::get('classes/{id}', [FiliereController::class,'delete']);
    Route::put('classe/{id}', [FiliereController::class,'update']);
    Route::get('showClasse/{id_universite}', [FiliereController::class,'show']);
    Route::get('getModuleByFiliereId/{universite_id}/{filiere_id}', [FiliereController::class,'filiereById']);
    // COTE MODULES
    Route::apiResource('module',ModuleController::class);
    Route::get('listeModule/{id}', [ModuleController::class,'index']);
    Route::get('moduleByfiliere/{idUniversite}/{idFiliere}', [ModuleController::class,'moduleByfiliere']);
    // COTE COURS
    Route::apiResource('cours',CourController::class);
    Route::get('listeCours/{filiere_id}/{module_id}',[CourController::class,'listeCours']);
    Route::get('activeCours/{id}',[CourController::class,'activeCours']);
    Route::post('cours/',[CourController::class,'store']);
    Route::get('coursD/{id}',[CourController::class,'delete']);
    Route::get('coursById/{id}',[CourController::class,'show']);
    Route::get('desactiveCours/{id}',[CourController::class,'desactiveCours']);
    Route::get('anneeScolaire/',[AnneeScolaireController::class,'index']);
    // Pour les Etudiants :
    Route::apiResource('etudiant',EtudiantPageController::class);
    Route::get('etudiant/{etudiant_id}',[EtudiantPageController::class,'show']);
    Route::get('etudiant/module/{etudiant_id}',[EtudiantPageController::class,'showModule']);
    Route::get('etudiant/cours/{etudiant_id}',[EtudiantPageController::class,'showCour']);
    Route::get('etudiant/module/{etudiant_id}/{filiere_id}',[EtudiantPageController::class,'showModuleBy']);
    Route::get('etudiant/cours/{etudiant_id}/{filiere_id}',[EtudiantPageController::class,'showCourBy']);
    Route::get('etudiant/cours',[CourPageController::class,'index']);

//     Route::get('etudiant/module',[ModulePageController::class,'index']);


// Avec Middleware :
    // Route::middleware(['auth'=>"user-access:adminUniversite"])->group( function(){

    //     Route::get('universite', [UniversiteController::class,'index'])->name('universite.login');
    //     Route::get('universite/{id}', [UniversiteController::class,'show']);
    //     // COTE POUR LES ADMINISTRATIONS DES UNIVERSITES COTE ETUDIANT

    //     Route::apiResource('etudiants', EtudiantController::class);
    //     Route::post('insertEtudiants', [EtudiantController::class,'store']);
    //     Route::get('listeEtudiants/{id}', [EtudiantController::class,'index']);
    //     Route::get('etudiantByFiliere/{id}/{idU}', [EtudiantController::class,'indexF']);


    //     // COTE FILIERE
    //     Route::apiResource('classe', FiliereController::class);
    //     Route::get('listeClasse/{id}', [FiliereController::class,'index']);
    //     Route::get('showClasse/{id_universite}', [FiliereController::class,'show']);
    //     Route::get('getModuleByFiliereId/{universite_id}/{filiere_id}', [FiliereController::class,'filiereById']);

    //     // COTE MODULES

    //     Route::apiResource('module',ModuleController::class);
    //     Route::get('listeModule/{id}', [ModuleController::class,'index']);

    //     // COTE COURS

    //     Route::get('anneeScolaire/',[AnneeScolaireController::class,'index']);
    // });

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware(Authenticate::using('sanctum'));
