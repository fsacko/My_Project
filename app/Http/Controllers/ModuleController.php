<?php

namespace App\Http\Controllers;

use App\Models\Module;
use Pest\Plugins\Only;
use App\Models\Filiere;
use App\Models\Universite;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\FiliereModule;
use Carbon\Traits\ToStringFormat;

class ModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($universite_id)
    {
        //
        ['id' => $universite_id];
        // $module = Module::where('universite_id',$universite_id)->with(['descriptions'=>function($query){$query->select('description','module_id');}])->get();
        $module = Module::where('universite_id',$universite_id)->with(['descriptions:description,module_id'])->orderBy('created_at', 'desc')->get();
        return response()->json([$module]);
    }

    public function moduleByfiliere($idUniversite,$idFiliere)
    {
        $filiereModule = FiliereModule::where('filiere_id',$idFiliere)->get();
        $module = Module::where('universite_id',$idUniversite)->get();
        $moduleListe = [];
        foreach ($filiereModule as $fil) {
            foreach ($module as $mod) {
                if($fil->module_id == $mod->id){
                    $moduleListe[] = $mod;
                }
            }
        }
        return response()->json($moduleListe);
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
        //Pour l'insertion des modules

        $moduleListe = Module::all();

        if(!$moduleListe->isEmpty()){

            foreach ($moduleListe as $mod){
                $nom = $mod->nom;
                $nom = Str::lower($nom);

                if($nom == Str::lower($request->input('nom')) ){

                    $relation = new FiliereModule();
                    $relation -> description = $request->input('description');
                    $relation -> filiere_id = $request->input('filiere_id');
                    $relation -> module_id = $mod->id;
                    $relation -> save();
                    return response()->json(['redirect'=>'/filiere/Modules/liste','success'=>"Module Ajouter avec succès"]);
                }
            }
            $module = new Module();
            $module -> nom = $request->input('nom');
            $module -> code = $request->input('code');
            $module -> universite_id =  $request->input('universite_id');
            $module -> save();
            $module_id = $module->id;

            $relation = new FiliereModule();
            $relation -> description = $request->input('description');
            $relation -> filiere_id = $request->input('filiere_id');
            $relation -> module_id = $module_id;
            $relation -> save();

            return response()->json(['redirect'=>'/gestion/Filieres/liste','success'=>"Module Ajouter avec succès"]);
        }
        else{

            $module = new Module();
            $module -> nom = $request->input('nom');
            $module -> code = $request->input('code');
            $module -> universite_id =  $request->input('universite_id');
            $module -> save();
            $module_id = $module->id;

            $relation = new FiliereModule();
            $relation -> description = $request->input('description');
            $relation -> filiere_id = $request->input('filiere_id');
            $relation -> module_id = $module_id;
            $relation -> save();

            return response()->json(['redirect'=>'/gestion/Filieres/liste','success'=>"Module Ajouter avec succès"]);
        }



    }

    /**
     * Display the specified resource.
     */
    public function show(Module $module)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Module $module)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Module $module)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Module $module)
    {
        //
    }
}
