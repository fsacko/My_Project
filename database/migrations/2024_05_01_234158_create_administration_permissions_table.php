<?php

use App\Models\Administration;
use App\Models\Permission;
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
        Schema::create('administration_permissions', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Administration::class);
            $table->foreignIdFor(Permission::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('administration_permissions');
    }
};
