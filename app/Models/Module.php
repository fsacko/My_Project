<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Module extends Model
{
    use HasFactory;
    protected $guarded = false;
    public function universite():BelongsTo
    {
        return $this->belongsTo(Universite::class, 'universite_id');
    }
    public function filieres():BelongsToMany
    {
        return $this->belongsToMany(Filiere::class,'filiere_modules');
    }
    public function descriptions():HasOne
    {
        return $this->HasOne(FiliereModule::class);
    }

    public function cours():BelongsToMany
    {
        return $this->belongToMany(FiliereModule::class);
    }

}
