<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Cour extends Model
{
    use HasFactory;
    protected $guarded=false;

    public function filiereModules():BelongsTo
    {
        return $this->BelongsTo(FiliereModule::class);
    }
    public function anneeScolaires():BelongsTo
    {
        return $this->BelongsTo(AnneeScolaire::class);
    }
}
