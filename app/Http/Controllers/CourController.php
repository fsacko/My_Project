<?php

namespace App\Http\Controllers;

use App\Models\ChapitreCour;
use App\Models\Cour;
use App\Models\FiliereModule;
use Illuminate\Http\Request;

class CourController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function listeCours($filiere_id,$module_id)
    {
        $filiereModule = FiliereModule::where('filiere_id',$filiere_id)->where('module_id',$module_id)->get();
        foreach ($filiereModule as $fil ) {
            $id = $fil->id;
        }
        //Pour affichage des cours Inserer dans la table

        $cours = Cour::where('filiere_module_id',$id)->get();
        return response()->json($cours);

    }
    public function activeCours($filiere_module_id)
    {
        ["id"=>$filiere_module_id];
        $cours = Cour::where('id',$filiere_module_id);
        $cours->update([
            "etat" => true
        ]);
        return response()->json(['statut'=>200]);
    }
    public function desactiveCours($filiere_module_id)
    {
        ["id"=>$filiere_module_id];
        $cours = Cour::where('id',$filiere_module_id);
        $cours->update([
            "etat" => false
        ]);
        return response()->json(['statut'=>200]);
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
        $request->validate([
            'fichier' => 'mimes:pdf,doc,docx,ppt,pptx,xls,xlsx,txt,csv,odt,odp,ods,jpg,jpeg,png,gif,mp3,mp4,zip,rar,7z,mp4,avi,mov,wmv,mkv',
            'contenu' => 'string',
            'video' => 'mimes:mp4',
        ]);

        // Pour la recuperation de l'ID de la table filiere_module
        $filiereModule = FiliereModule::where('filiere_id','=',$request->input('filiere_id'),'and',)->where('module_id',$request->input('module_id'))->get();
        // $id = $filiereModule->id;
        foreach ($filiereModule as $fil ) {
            $id = $fil->id;
        }

        if ($request->file('fichier')) {
            $file = $request->file('fichier');
        }elseif ($request->file('video')) {
            $file = $request->file('video');
        }


        //Pour l'insertion des cours :


        if ($request->file('fichier')) {
            // Définir le nom du fichier
            $fileName = time().'_'.$file->getClientOriginalName();

            // Déplacer le fichier vers le dossier de stockage
            $filePath = $file->storeAs('uploads', $fileName, 'public');
            $cours = new Cour();
            $cours->titre = $request->input('titre');
            $cours->sous_titre = $request->input('sous_titre');
            $cours->contenu = $request->input('contenu');
            $cours->fichier = asset('storage/' . $filePath);
            $cours->video = "";
            // $cours->etat($request->input('status'));
            $cours->etat = true;
            // $cours->filiere_id($request->input('filiere_id'));
            $cours->filiere_module_id = $id;
            // $cours->annee_scolaire_id($request->input('annee_scolaire_id'));
            $cours->annee_scolaire_id = 4;
            $cours->save();
        }
        else{
            $cours = new Cour();
            $cours->titre = $request->input('titre');
            $cours->sous_titre = $request->input('sous_titre');
            $cours->contenu = $request->input('contenu');
            $cours->fichier = "";
            $cours->video = "";
            // $cours->etat($request->input('status'));
            $cours->etat = true;
            // $cours->filiere_id($request->input('filiere_id'));
            $cours->filiere_module_id = $id;
            // $cours->annee_scolaire_id($request->input('annee_scolaire_id'));
            $cours->annee_scolaire_id = 4;
            $cours->save();
        }

        return response()->json(['/cours/liste']);

    }

    /**
     * Display the specified resource.
     */
    public function show($cour)
    {
        //
        ['id'=>$cour];
        $cour = Cour::find($cour);
        return response()->json($cour);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cour $cour)
    {
        //Recuperation de la valeur d'un seul cour :
        $cour = Cour::find($cour);
        return response()->json($cour);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cour $cour)
    {
        //Pour la mise a jour de la valeur du cour qui vient d'etre modifier:
        // $cour = Cour::find($cour);
        // $cour->titre = $request->input('titre');
        // $cour->sous_titre = $request->input('sous_titre');
        // $cour->contenu = $request->input('contenu');
        // if (!$request->input('fichier')) {
        //     $cour->fichier = $request->input('fichier');
        // }
        // $cour->video = $request->input('video');
        // $cour->etat = $request->input('etat');
        // $cour->filiere_module_id = $request->input('filiere_module_id');
        // $cour->annee_scolaire_id = $request->input('annee_scolaire_id');
        // $cour->save();



        if ($request->file('fichier'))
        {
            $file = $request->file('fichier');

            $fileName = time().'_'.$file->getClientOriginalName();

            // Déplacer le fichier vers le dossier de stockage
            $filePath = $file->storeAs('uploads', $fileName, 'public');
            $cour->update([
                "titre" => $request->input('titre'),
                "sous_titre" => $request->input('sous_titre'),
                "contenu" => $request->input('contenu'),
                "etat" => $request->input('etat'),
                "fichier" => asset('storage/' . $filePath)

            ]);
        }
        else
        {
            $cour->update([
                "titre" => $request->input('titre'),
                "sous_titre" => $request->input('sous_titre'),
                "contenu" => $request->input('contenu'),
                "etat" => $request->input('etat')

            ]);
        }

        return response()->json(['/Cours/liste']);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete($cour)
    {
        //
        ['id'=>$cour];
        $cour = Cour::find($cour);
        $cour->delete();
        return response()->json(['/Cours/liste']);
    }
    public function destroy(Cour $cour)
    {
        //

        $cour = Cour::find($cour);
        $cour->delete();
        return response()->json(['/cours/liste']);
    }
}
