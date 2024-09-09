<?php

use App\Models\Filiere;
use App\Models\Etudiant;
use App\Models\Universite;
use App\Models\AnneeScolaire;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('promotions', function (Blueprint $table) {
            $table->id();
            $table->enum('niveau',['Licence I','Licence II','DUT','Licence','Master I','Master II','MBA','Post-Doctorat','Doctorat']);
            $table->string("description");
            $table->foreignIdFor(Universite::class);
            $table->foreignIdFor(Filiere::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('promotions');
    }
};
