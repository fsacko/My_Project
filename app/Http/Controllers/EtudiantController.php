<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Filiere;
use App\Models\Etudiant;

use App\Models\Universite;
use Illuminate\Http\Request;

use App\Models\EtudiantFiliere;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use function PHPUnit\Framework\isEmpty;

class EtudiantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {
        //
        ['id' =>$id];
        // $etudiants = Universite::with($id)->etudiants;
        $etudiants = Etudiant::universites($id);
        // $etudiant = Filiere::where('universite_id',$id)->with(['etudiants'])->orderBy('created_at', 'desc')->get();
        return response()->json($etudiants);

    }

    // Pour recuper
    public function indexF($id,$idU)
    {
        [
            'id' =>$id,
            'idU' =>$idU
    ];

        $etudiant = Filiere::with(['etudiants:*'])->where('id',$id)->where('universite_id',$idU)->orderBy('created_at', 'desc')->get();
        return response()->json([$etudiant]);
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
        //Pour l'insertion d'un nouveau etudiant :

        $nom = $request->input('nom');
        $prenom = $request->input('prenom');
        $email = $request->input('email');
        $annee_scolaire = $request->input('annee_scolaire');
        $filiere_id = $request->input('filiere_id');
        $tel = $request->input("telephone");
        $matricule = $request->input("identifiant");
        if ($matricule)
        {
            # code...
            $etudiant = Etudiant::all();
            foreach ($etudiant as $etud ) {
                # code...

                if( $matricule == $etud->telephone || $matricule == $etud->email || $matricule == $etud->matricule)
                {
                    $relation = new EtudiantFiliere();
                    $relation->annee_scolaire_id = $request->input("annee_scolaire");
                    $relation->etudiant_id = $etud->id;
                    $relation->filiere_id = $request->input("filiere_id");
                    $relation->save();
                    return response()->json(["redirect"=>'/gestion/Etudiants/liste','success'=>"Etudiant Enregistré avec succès"]);
                }

            }
            return response()->json(['error'=>"Erreur Veuillez bien renseigner les champs ou matricule inconnu"]);
        }
        else
        {
            # code...
            if(!$nom || !$prenom || !$email || !$annee_scolaire || !$tel || !$filiere_id)
            {
                return response()->json(['error'=>"Erreur Veuillez bien renseigner tous les champs!!"]);
            }

            $etudiantListe = Etudiant::all();
            if(!$etudiantListe->isEmpty()){
                foreach($etudiantListe as $etud){
                    if($etud->email == $request->input('email')){
                        $relation = new EtudiantFiliere();
                        $relation->annee_scolaire_id = $request->input("annee_scolaire");
                        $relation->etudiant_id = $etud->id;
                        $relation->filiere_id = $request->input("filiere_id");
                        $relation->save();

                        // $promotion = new Promotion();
                        // $promotion->etudiant_id = $etud->id;
                        // $promotion->filiere_id = $request->input("filiere_id");
                        // $promotion->annee_scolaire_id = $request->input("annee_scolaire");
                        // $promotion->save();

                        return response()->json(["redirect"=>'/gestion/Etudiants/liste','success'=>"Etudiant Enregistré avec succès"]);
                    }
                }

                $etudiant = new Etudiant;
                $etudiant->nom = $request->input("nom");
                $etudiant->prenom = $request->input("prenom");
                $etudiant->email = $request->input("email");
                $etudiant->telephone= $request->input("telephone");
                $etudiant->password = Hash::make('12345678');
                $etudiant->matricule = $request->input("login");
                $etudiant->date_naissance = $request->input("date_de_naissance");
                $etudiant->save();

                $relation = new EtudiantFiliere();
                $relation->annee_scolaire_id = $request->input("annee_scolaire");
                $relation->etudiant_id = $etudiant->id;
                $relation->filiere_id = $request->input("filiere_id");
                $relation->save();

                // $promotion = new Promotion();
                // $promotion->etudiant_id = $etudiant->id;
                // $promotion->filiere_id = $request->input("filiere_id");
                // $promotion->annee_scolaire_id = $request->input("annee_scolaire");
                // $promotion->save();

                $name = $request->prenom.' '.$request->nom;
                $user = new User();
                $user->name = $name;
                $user->email = $request->email;
                $user->universite_id = null;
                $user->type = "2";
                $user->password = Hash::make('12345678');
                $user->save();
                // $user = User::create([
                //     'name' => $name,
                //     'email' => $request->email,
                //     'universite_id' => null,
                //     'type' => "2",
                //     'password' => Hash::make('12345678'),
                // ]);
                // event(new Registered($user));

                return response()->json(["redirect"=>'/gestion/Etudiants/liste','success'=>"Etudiant Enregistré avec succès"]);
            }
            else{

                $etudiant = new Etudiant;
                $etudiant->nom = $request->input("nom");
                $etudiant->prenom = $request->input("prenom");
                $etudiant->email = $request->input("email");
                $etudiant->telephone= $request->input("telephone");
                $etudiant->password = $request->input("password");
                $etudiant->login = $request->input("login");
                $etudiant->date_naissance = $request->input("date_de_naissance");
                $etudiant->universite_id =$request->input("universite_id");
                $etudiant->save();

                $relation = new EtudiantFiliere();
                $relation->annee_scolaire_id = $request->input("annee_scolaire");
                $relation->etudiant_id = $etudiant->id;
                $relation->filiere_id = $request->input("filiere_id");
                $relation->save();

                // $promotion = new Promotion();
                // $promotion->etudiant_id = $etudiant->id;
                // $promotion->filiere_id = $request->input("filiere_id");
                // $promotion->annee_scolaire_id = $request->input("annee_scolaire");
                // $promotion->save();

                $name = $request->input("prenom").' '.$request->input("nom");
                $user = User::create([
                    'name' => $name,
                    'email' =>$request->input("email"),
                    'universite_id' => null,
                    'type' => "2",
                    'password' => Hash::make('12345678'),
                ]);
                event(new Registered($user));

                return response()->json(["redirect"=>'/gestion/Etudiants/liste','success'=>"Etudiant Enregistré avec succès"]);
            }
        }


    }

    /**
     * Display the specified resource.
     */
    public function show(Etudiant $etudiant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Etudiant $etudiant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Etudiant $etudiant)
    {
        //
        if(isEmpty($request->input('date_de_naissance')))
        {
            $etudiant->update([
                "nom" => $request->input('nom'),
                "prenom" => $request->input('prenom'),
                "email" => $request->input('email'),
                "telephone" => $request->input('telephone'),
                'filiere_id' => $request->input("filiere_id")

            ]);

        }
        else
        {
            $etudiant->update([
                "nom" => $request->input('nom'),
                "prenom" => $request->input('prenom'),
                "email" => $request->input('email'),
                "telephone" => $request->input('telephone'),
                "date_naissance" => $request->input('date_de_naissance'),
                'filiere_id' => $request->input("filiere_id")

            ]);
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Etudiant $etudiant)
    {
        //
        $etudiant->delete();

    }

    public function delete($id,$idU)
    {
        ["id"=>$id,"universite_id"=>$idU];
        EtudiantFiliere::where('filiere_id',$idU)->where('etudiant_id',$id)->delete();
        $etudiantFiiere = EtudiantFiliere::where('etudiant_id',$id)->get();
        if ($etudiantFiiere->isEmpty()) {
            $etudiant = Etudiant::where('id',$id)->get();
            foreach ($etudiant as $etud) {
                User::where('email',$etud->email)->delete();
            }
            Etudiant::where('etudiant_id',$id)->delete();
        }
        return response()->json(['statut'=>200]);
    }
}
