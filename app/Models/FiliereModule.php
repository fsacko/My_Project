<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class FiliereModule extends Model
{
    use HasFactory;
    protected $guarded = []; 
    public function cours():HasMany
    {
        return $this->hasMany(Cour::class);
    }

}
