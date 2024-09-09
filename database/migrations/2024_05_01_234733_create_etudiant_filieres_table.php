<?php

use App\Models\AnneeScolaire;
use App\Models\Etudiant;
use App\Models\Filiere;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('etudiant_filieres', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(AnneeScolaire::class);
            $table->foreignIdFor(Etudiant::class);
            $table->foreignIdFor(Filiere::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('etudiant_filieres');
    }
};
