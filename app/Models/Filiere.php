<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Filiere extends Model
{
    use HasFactory;
    protected $guarded = false;

    public function universite():BelongsTo
    {
        return $this->belongsTo(Universite::class, 'universite_id');
    }

    public function modules():BelongsToMany
    {
       return $this->BelongsToMany(Module::class,'filiere_modules');
    }
    public function promotions():HasMany
    {
       return $this->hasMany(Promotion::class,'filiere_id');
    }


    public function etudiants():BelongsToMany
    {
        return $this->BelongsToMany(Etudiant::class,'etudiant_filieres');
    }
    public function scopePromotions($query,$id)
    {
       return $query
       ->join('promotions as p1','filieres.id','=','p1.filiere_id')
        ->select('filieres.*','p1.niveau','p1.description')
        ->where('filieres.universite_id',$id)->get();
    }

}
