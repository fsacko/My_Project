<?php

namespace App\Http\Controllers\Frontend\Etudiant;

use App\Http\Controllers\Controller;
use App\Models\Etudiant;
use App\Models\EtudiantFiliere;
use Illuminate\Http\Request;

class EtudiantPageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($etudiant_id)
    {
        $etudiantData = Etudiant::where('email',$etudiant_id)->get();
        foreach ($etudiantData as $etud) {
            $id = $etud->id;
        }
        //AFFICHAGE DES INFORMATIONS DE L'ETUDIANT
        $etudiant = Etudiant::classes($id);
        // $etudiant = EtudiantFiliere::where('etudiant_id', $id)->with(['filieres:*'])->get();

        return response()->json($etudiant);
    }
    public function showModule($etudiant_id)
    {
        $etudiantData = Etudiant::where('email',$etudiant_id)->get();
        foreach ($etudiantData as $etud) {
            $id = $etud->id;
        }
        //AFFICHAGE DES INFORMATIONS DE L'ETUDIANT
        $etudiant = Etudiant::modules($id);
        // $etudiant = EtudiantFiliere::where('etudiant_id', $id)->with(['filieres:*'])->get();

        return response()->json($etudiant);
    }


    public function showCour($etudiant_id)
    {
        $etudiantData = Etudiant::where('email',$etudiant_id)->get();
        foreach ($etudiantData as $etud) {
            $id = $etud->id;
        }
        //AFFICHAGE DES INFORMATIONS DE L'ETUDIANT
        $etudiant = Etudiant::cours($id);
        // $etudiant = EtudiantFiliere::where('etudiant_id', $id)->with(['filieres:*'])->get();

        return response()->json($etudiant);
    }

    public function showModuleBy($etudiant_id,$filiere_id)
    {
        $etudiantData = Etudiant::where('email',$etudiant_id)->get();
        foreach ($etudiantData as $etud) {
            $id = $etud->id;
        }
        //AFFICHAGE DES INFORMATIONS DE L'ETUDIANT
        $etudiant = Etudiant::moduleby($id,$filiere_id);
        // $etudiant = EtudiantFiliere::where('etudiant_id', $id)->with(['filieres:*'])->get();

        return response()->json($etudiant);
    }


    public function showCourBy($etudiant_id,$filiere_id)
    {
        $etudiantData = Etudiant::where('email',$etudiant_id)->get();
        foreach ($etudiantData as $etud) {
            $id = $etud->id;
        }
        //AFFICHAGE DES INFORMATIONS DE L'ETUDIANT
        $etudiant = Etudiant::courby($id,$filiere_id);
        // $etudiant = EtudiantFiliere::where('etudiant_id', $id)->with(['filieres:*'])->get();

        return response()->json($etudiant);
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
