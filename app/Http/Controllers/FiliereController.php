<?php

namespace App\Http\Controllers;

use App\Models\Cour;
use App\Models\EtudiantFiliere;
use App\Models\Filiere;
use App\Models\FiliereModule;
use App\Models\Promotion;
use Illuminate\Http\Request;

class FiliereController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($universite_id)
    {
        //
        ["id" => $universite_id];
        $classe = Filiere::with(['promotions'])->where('universite_id',$universite_id)->get();
        return response()->json([$classe]);
    }


    public function filiereById($universite_id, $classe)
    {
        [
            "universite_id" =>$universite_id,
            "filiere_id" =>$classe
        ];
        $detail = Filiere::where('id','=',$classe)->with(['modules:*'])->get();
        return response()->json($detail);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //Creation des classes en fonction de l'université :

        $sigle = $request->input('Sigle');
        $nom = $request->input('Nom');
        $niveau = $request->input('Niveau');
        $description = $request->input('Description');
        if (!$sigle || !$nom || !$niveau || !$description) {
            return response()->json(['redirect' =>'/gestion/Filieres/liste','error'=>"Erreur au niveau de l'insertion de Filiere"]);
        }

        $filiere = Filiere::all();
        if (!$filiere->isEmpty()) {
            foreach ($filiere as $cls) {
                if ($cls->sigle == $request->input('Sigle') && $cls->universite_id == $request->input('universite_id') ) {
                    $promotion = new Promotion();
                    $promotion->niveau = $request->input('Niveau');
                    $promotion->description = $request->input('Description');
                    // $promotion->universite_id = $request->input('universite_id');
                    $promotion->filiere_id = $cls->id;
                    $promotion->save();
                    return response()->json(['redirect' =>'/gestion/Filieres/liste','success'=>"Classe Ajouter avec succès"]);
                }
                # code...
            }
        }

        $classe = new Filiere;
        $classe->sigle = $request->input('Sigle');
        $classe->nom = $request->input('Nom');
        $classe->universite_id = $request->input('universite_id');
        $classe->save();

        $promotion = new Promotion();
        $promotion->niveau = $request->input('Niveau');
        $promotion->description = $request->input('Description');
        // $promotion->universite_id = $request->input('universite_id');
        $promotion->filiere_id = $classe->id;
        $promotion->save();

        return response()->json(['redirect' =>'/gestion/Filieres/liste','success'=>"Classe Ajouter avec succès"]);

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        ['id_universite' => $id];

        $filiere = Filiere::where('universite_id',$id)->with('modules')->get();
        return response()->json([$filiere]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Filiere $filiere)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        ['id'=>$id];
        $filiere = Filiere::where('id',$id);
        $promotion = Promotion::where('filiere_id',$id);
        //
        $filiere->update([
            "sigle" => $request->input('Sigle'),
            "nom"=>$request->input('Nom'),
            "universite_id"=>$request->input('universite_id'),
        ]);
        $promotion->update([
            "niveau" => $request->input('Niveau'),
            "description"=>$request->input('Description'),
            "filiere_id"=>$id,
        ]);
        return response()->json(['redirect' =>'/gestion/Filieres/liste','success'=>"Filiere Modifiée avec succès"]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Filiere $filiere)
    {
        //
        $filiere->delete(); //
        return response()->json(['redirect' =>'/gestion/Filieres/liste','success'=>"Filiere Supprimée avec succès"]);
    }

    public function delete($id)
    {
        ['id'=>$id];
        $filiere = Filiere::where('id',$id);
        $r1 = EtudiantFiliere::where('filiere_id',$id)->get();
        $r2 = FiliereModule::where('filiere_id',$id)->get();

        $filiere->delete(); //
        return response()->json(['redirect' =>'/gestion/Filieres/liste','success'=>"Filiere Supprimée avec succès"]);
    }
}
