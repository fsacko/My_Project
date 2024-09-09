<?php

use App\Models\AnneeScolaire;
use App\Models\FiliereModule;
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
        Schema::create('cours', function (Blueprint $table) {
            $table->id();
            $table->string("titre");
            $table->string("sous_titre");
            $table->boolean("etat")->defaultTrue();
            $table->string("fichier")->nullable();
            $table->string("video")->nullable();
            $table->foreignIdFor(FiliereModule::class);
            $table->foreignIdFor(AnneeScolaire::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cours');
    }
};
