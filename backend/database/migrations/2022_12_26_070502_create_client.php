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
        Schema::create('client', function (Blueprint $table) {
            $table->id('client_id');
            $table->string('name')->unique();
            $table->string('email')->unique();
            $table->string('phone',13);
            $table->string('address')->nullable();
            $table->integer('project')->nullable();
            $table->string('pay_type')->nullable(); //pemilihan dari total jam dan cost 
            $table->string('based_on')->nullable(); //pemilihan dari bill rate / pay rate 
            $table->string('cost')->nullable(); //total cost
            $table->string('hours')->nullable(); //berapa jam 
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
        Schema::dropIfExists('client');
    }
};
