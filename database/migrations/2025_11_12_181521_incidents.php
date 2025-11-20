<?php

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
        Schema::create('incidents', function (Blueprint $table) {
			$table->id();

			$table->string('title');
			$table->dateTime('occurred_at')->index();

			$table->foreignId('location_id')->nullable()->constrained('locations')->nullOnDelete();

			$table->text('place_description')->nullable();
			$table->text('people_involved')->nullable();
			$table->text('circumstances')->nullable();
			$table->text('actions_taken')->nullable();
			$table->text('proposed_solutions')->nullable();

			$table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
			$table->softDeletes();
			$table->timestamps();
		});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('incidents');
    }
};
