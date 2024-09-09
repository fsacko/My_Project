<?php

namespace App\Models;

use App\Models\Filiere;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Universite extends Model
{
    use HasFactory;
    protected $guarded = [] ;

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }


    public function scopeEtudiants($query,$id)
    {
        return $query
        ->join('filieres as f1','f1.universite_id','=','universites.id')
        ->join('etudiant_filieres','f1.id','=','etudiant_filieres.filiere_id')
        ->join('etudiants','etudiants.id','=','etudiant_filieres.etudiant_id')
        ->select('etudiant_filieres.*')
        ->where('f1.universite_id',$id);
    }
    public function filieres():HasMany
    {
        return $this->hasMany(Filiere::class);
    }
    public function administrators():HasMany
    {
        return $this->hasMany(Administration::class);
    }
    public function modules():HasMany
    {
        return $this->hasMany(Module::class);
    }

    public function moduleDescriptions():HasManyThrough
    {
        return $this->hasManyThrough(Module::class,FiliereModule::class);
    }

    public function filiereEtudiants():HasManyThrough
    {
        return $this->hasManyThrough(Etudiant::class,EtudiantFiliere::class);
    }
    public function scopeUniversites($query)
    {
        return $query
        ->join('filieres as f1','f1.universite_id','=','universites.id')
        ->join('etudiant_filieres','f1.id','=','etudiant_filieres.filiere_id')
        ->join('etudiants','etudiants.id','=','etudiant_filieres.etudiant_id')
        ->select('etudiant_filieres.*');
    }
}
