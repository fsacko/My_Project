<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class EtudiantFiliere extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function etudiants():HasMany
    {
        return $this->hasMany('etudiants');
    }

    public function filieres()
    {
        return $this->belongsTo(Filiere::class,'etudiant_filieres');
    }
    // public function cours()
    // {
    //     return $this->belongTo(Filiere::class,'filiere_modules');
    // }
}
