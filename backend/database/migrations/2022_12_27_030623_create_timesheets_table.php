<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('timesheets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')->constrained();
            $table->foreignId('todo_id')->constrained();
            $table->time('time_span')->nullable();
            $table->string('timer')->nullable();
            $table->date('form')->nullable();
            $table->date('to')->nullable();
            $table->string('alasan')->nullable();
            $table->string('everages_mouse')->nullable();
            $table->string('everages_keyboard')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('timesheets');
    }
};
