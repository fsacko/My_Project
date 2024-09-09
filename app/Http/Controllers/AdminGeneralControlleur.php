<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Universite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rules\Password;

class AdminGeneralControlleur extends Controller
{
    //Pour les affichages :
    public function index(){

        return view('managers.index');
    }
// Pour la gestion des universites :
    public function indexUniversite(){

        return view('managers.universite');
    }

    public function insertUniversite(){
        return view('managers.contentUniv.insert');
    }
    public function listeUniversite(){
        $universite = Universite::all();
        return view('managers.contentUniv.list',compact('universite'));
    }
    public function createUniversite(Request $request):RedirectResponse
    {
        $universite = new Universite();
        $universite->nom = $request->input('nom');
        $universite->status = $request->input('status');
        $universite->adresse = $request->input('adresse');
        $universite->descriptions = $request->input('descriptions');
        $universite->save();

        return redirect::route('universite.liste')->with('success','Université Créée avec succès');
    }
// Fin pour les universites.

    public function indexAdministration(){

        return view('managers.administrateur');
    }

    public function listAdminstration($id){
        $users = Universite::find($id)->users->where('type','adminUniversite');
        // dd($users);
        return view('managers.contentAdmin.list',compact('users'));
    }

    public function insertAdministration($id){
        $universite = Universite::findOrFail($id);
        return view('managers.contentAdmin.insert',compact('universite'));
    }

    public function deleteAdministration($id){

    }

    public function updateAdministration(Request $request,$id){

    }


    public function createAdministration(Request $request):RedirectResponse
    {

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'universite_id' => $request->universite_id,
            'type' => "1",
            'password' => Hash::make($request->password),
        ]);
        event(new Registered($user));

        return redirect::route('administration')->with('success','Administrateur Créer avec succès');
    }

}
