<?php

namespace App\Http\Controllers;

use App\Models\Administration;
use App\Models\User;
use App\Models\Universite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rules\Password;


class AdministrationController extends Controller
{
    //Pour les affichages :
    public function index(){
        $universite = Universite::with('filieres')->withCount('filieres')->get();
        // dd($universite);
        // dd($universite);
        return view('managers.index',compact('universite'));
    }
// Pour la gestion des universites :
    public function indexUniversite(){

        return view('managers.universite');
    }

    public function insertUniversite(){
        return view('managers.contentUniv.insert');
    }
    public function showUniversite($id){
        ['id'=>$id];
        $universite = Universite::findOrFail($id);
        return view('managers.contentUniv.update',compact('universite'));
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

    public function updateUniversite(Request $request,$id):RedirectResponse
    {
        ['id'=>$id];
        $universite = Universite::findOrFail($id);

        // $universite = new Universite();
        // $universite->nom = $request->input('nom');
        // $universite->status = $request->input('status');
        // $universite->adresse = $request->input('adresse');
        // $universite->descriptions = $request->input('descriptions');
        // $universite->save();

        $universite->update([
            'nom' => $request->nom,
            'status' => $request->status,
            'adresse' => $request->adresse,
            'descriptions' => $request->descriptions,
        ]);

        return redirect::route('universite.liste')->with('success','Université Modifiée avec succès');
    }
    public function deleteUniversite($univers){
        ['id'=>$univers];
        $univ = Universite::findOrFail($univers);
        // dd($univ);
        $univ->forceDelete();
        $universite = Universite::all();
        return view('managers.contentUniv.list',compact('universite'));
    }
// Fin pour les universites.

    public function indexAdministration(){

        return view('managers.administrateur');
    }

    public function listAdminstration($id){
        $users = Universite::find($id)->users->where('type','adminUniversite');
        $universite = Universite::find($id);
        // dd($universite->nom);
        return view('managers.contentAdmin.list',compact('users','universite'));
    }

    public function insertAdministration($id){
        $universite = Universite::findOrFail($id);
        return view('managers.contentAdmin.insert',compact('universite'));
    }

    public function deleteAdministration($id){

        ['id'=>$id];
        $univ = User::findOrFail($id);
        // dd($univ);
        $univ->forceDelete();
        $universite = Universite::all();
        return view('managers.contentUniv.list',compact('universite'));
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
