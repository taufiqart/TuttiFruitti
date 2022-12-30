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
        Schema::create('todos', function (Blueprint $table) {
            $table->id('todos_id');
            $table->string('name');
            $table->integer('category_id'); //memilih Category dari table category
            $table->string('decription')->nullable();   //deskripsi 
            $table->string('attachments')->nullable();  //upload file 
            $table->date('start_date')->nullable(); //tanggal dimulai 
            $table->date('due_date')->nullable();   //deadline
            $table->time('estimate')->nullable();   //waaktu pengerjaan
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
        Schema::dropIfExists('todos');
    }
};
