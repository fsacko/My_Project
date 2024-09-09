<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Etudiant extends Model
{
    use HasFactory;
    protected $guarded = false;
    public function universite():BelongsTo
    {
        return $this->belongsTo(Universite::class);
    }
    public function filieres():BelongsToMany
    {
        return $this->belongsToMany(Filiere::class,'etudiant_filieres');
    }
    public function relations():HasMany
    {
        return $this->hasMany(EtudiantFiliere::class);
    }
    public function scopeUniversites($query,$id)
    {
        return $query
        ->join('etudiant_filieres','etudiants.id','=','etudiant_filieres.etudiant_id')
        ->join('filieres','filieres.id','=','etudiant_filieres.filiere_id')
        ->where('filieres.universite_id','=',$id)
        ->select('etudiants.*','filieres.sigle','etudiant_filieres.filiere_id as filiere_id')
        ->orderBy('etudiants.created_at', 'desc')->get();
    }


    public function scopeClasses($query,$id)
    {
        return $query
        ->join('etudiant_filieres','etudiants.id','=','etudiant_filieres.etudiant_id')
        ->join('filieres','filieres.id','=','etudiant_filieres.filiere_id')
        ->where('etudiants.id','=',$id)
        ->select('filieres.*')
        ->orderBy('filieres.created_at', 'desc')->get();
    }

    public function scopeModules($query,$id)
    {
        return $query
        ->join('etudiant_filieres','etudiants.id','=','etudiant_filieres.etudiant_id')
        ->join('filieres','filieres.id','=','etudiant_filieres.filiere_id')
        ->join('filiere_modules','filieres.id','=','filiere_modules.filiere_id')
        ->join('modules','modules.id','=','filiere_modules.module_id')
        ->where('etudiants.id','=',$id)
        ->select('modules.*','filieres.sigle','filiere_modules.description')
        ->orderBy('etudiants.created_at', 'desc')->get();
    }

    public function scopeModuleby($query,$id,$filiere_id)
    {
        return $query
        ->join('etudiant_filieres','etudiants.id','=','etudiant_filieres.etudiant_id')
        ->join('filieres','filieres.id','=','etudiant_filieres.filiere_id')
        ->join('filiere_modules','filieres.id','=','filiere_modules.filiere_id')
        ->join('modules','modules.id','=','filiere_modules.module_id')
        ->where('etudiants.id','=',$id)
        ->where('filieres.id','=',$filiere_id)
        ->select('modules.*','filieres.sigle','filiere_modules.description')
        ->orderBy('etudiants.created_at', 'desc')->get();
    }

    public function scopeCours($query,$id)
    {
        return $query
        ->join('etudiant_filieres','etudiants.id','=','etudiant_filieres.etudiant_id')
        ->join('filieres','filieres.id','=','etudiant_filieres.filiere_id')
        ->join('filiere_modules','filieres.id','=','filiere_modules.filiere_id')
        ->join('modules','modules.id','=','filiere_modules.module_id')
        ->join('cours','cours.filiere_module_id','=','filiere_modules.id')
        ->where('etudiants.id','=',$id)
        ->where('cours.etat','=',true)
        ->select('cours.*','modules.*','filieres.sigle','etudiant_filieres.filiere_id as filiere_id')
        ->orderBy('etudiants.created_at', 'desc')->get();
    }


    public function scopeCourby($query,$id,$filiere_id)
    {
        return $query
        ->join('etudiant_filieres','etudiants.id','=','etudiant_filieres.etudiant_id')
        ->join('filieres','filieres.id','=','etudiant_filieres.filiere_id')
        ->join('filiere_modules','filieres.id','=','filiere_modules.filiere_id')
        ->join('modules','modules.id','=','filiere_modules.module_id')
        ->join('cours','cours.filiere_module_id','=','filiere_modules.id')
        ->where('etudiants.id','=',$id)
        ->where('filiere_modules.module_id','=',$filiere_id)
        ->where('cours.etat','=',true)
        ->select('cours.*','modules.*','filieres.sigle','etudiant_filieres.filiere_id as filiere_id')
        ->orderBy('etudiants.created_at', 'desc')->get();
    }

}
