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
        Schema::create('organization', function (Blueprint $table) {
            $table->id('organization_id');
            $table->string('name'); //nama industri pasti e
            $table->string('industri'); // iki industri e berfokus nang bidang op
            $table->longText('address')->nullable();  // Alamat e masseh
            $table->string('logo')->nullable(); //user upload logo nang database gae organization
            $table->string('tax_id')->nullable();
            $table->string('currency')->nullable(); //tipe uang e cak
            $table->string('start')->nullable(); // nah iki start projek e mulai kapan
            $table->string('time_zone')->nullable(); // pilihan timezone
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
        Schema::dropIfExists('organization');
    }
};
