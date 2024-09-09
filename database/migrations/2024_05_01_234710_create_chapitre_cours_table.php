<?php

use App\Models\Cour;
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
        Schema::create('chapitre_cours', function (Blueprint $table) {
            $table->id();
            $table->string("chapitre");
            $table->string("contenu");
            $table->foreignIdFor(Cour::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chapitre_cours');
    }
};
