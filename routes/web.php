<?php


use App\Http\Controllers\AdministrationController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;

Route::get('/', function () {
    return view('welcome');
})->name('homePage');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->middleware(['auth'=>'user-access:admin'])->name('home');

Route::middleware(['auth'=>'user-access:admin'])->prefix('/Admin')->controller(AdministrationController::class)->group(function(){

    Route::get('/profile', 'editPassword')->name('password');
    Route::get('/','index')->name('accueil');
    Route::get('/Universites','listeUniversite')->name('universite');
    Route::get('/Universites/liste','listeUniversite')->name('universite.liste');
    Route::get('/Universites/delete/{id}','deleteUniversite')->name('universite.delete');
    Route::get('/Universites/insert','insertUniversite')->name('universite.insert');
    Route::post('/Universites/insert','createUniversite')->name('universite.insertU');
    Route::put('/Universites/update','updateUniversite')->name('universite.updateU');
    Route::get('/Universites/update/{id}','showUniversite')->name('universite.update');



    Route::get('/Administrateurs','indexAdministration')->name('administration');
    Route::get('/Administrateurs/{id}','listAdminstration')->name('administration.list');
    Route::get('/Administrateurs/new/{id}','insertAdministration')->name('administration.insert');
    Route::post('/Administrateurs/new','createAdministration')->name('administration.create');
    Route::get('/Administrateurs/update','updateAdministration')->name('administration.update');
    Route::get('/Administrateurs/delete/{id}','deleteAdministration')->name('administration.delete');

});
