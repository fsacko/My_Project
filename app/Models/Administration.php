<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Administration extends Model
{
    use HasFactory;
    protected $guarded = false;
    public function universite():HasOne
    {
        return $this->hasOne(Universite::class, 'universite_id');
    }
}
