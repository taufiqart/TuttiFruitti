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
        Schema::create('project', function (Blueprint $table) {
            $table->id('project_id');
            $table->string('name'); //nama project
            $table->string('description')->nullable(); //deskripsi project
            $table->integer('client_id'); // mengambil client_id
            $table->string('pay_type')->nullable(); //pemilihan dari total jam dan cost 
            $table->string('based_on')->nullable(); //pemilihan dari bill rate / pay rate 
            $table->string('cost')->nullable(); //total cost
            $table->string('hours')->nullable(); //berapa jam 
            $table->string('notify')->nullable(); 
            $table->boolean('status'); 
            $table->date('start_date')->nullable(); 
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
        Schema::dropIfExists('project');
    }
};
