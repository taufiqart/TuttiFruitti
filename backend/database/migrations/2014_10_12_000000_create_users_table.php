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
        Schema::create('users', function (Blueprint $table) {
            $table->id('user_id');
            $table->string('name');
            $table->string('time_zone')->nullable();
            $table->string('email')->unique();
            $table->string('phone_number', 13)->nullable();
            $table->string('skype_username')->nullable();
            $table->string('profile_picture')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            // $table->string('name');
            $table->string('job_title')->nullable();
            $table->string('job_type')->nullable();
            $table->string('loction')->nullable();
            $table->string('employee_id')->nullable();
            $table->string('tax_info')->nullable();
            $table->date('brith')->nullable();
            $table->date('start_date')->nullable();
            $table->string('status')->nullable(); //status 
            $table->string('role')->nullable(); //role dari user tersebyt
            //$table->integer('team_id'); //user bisa masuk beberapa tim
            // $table->integer('project_id'); //berapa project yang dibuat
            $table->string('project_role')->nullable(); // member mempunyai beberapa role misal manager User Viewr
            $table->string('payment')->nullable(); // cash /bill
            $table->string('pay_priode')->nullable(); // mingguan/ bulanan
            $table->string('pay_type')->nullable(); // hourly / ditentukan fix
            $table->string('pay_rate')->nullable(); // pembayaran perjam
            $table->string('pay_fix')->nullable(); // pembayaran yang langsung dengan fix
            $table->string('bill_rate')->nullable(); // pembayaran perjam
            $table->string('limits')->nullable(); //wakly limit / daily limit
            $table->string('weekly_limits')->nullable(); //wakly limit / daily limit
            $table->string('daily_limits')->nullable(); //wakly limit / daily limit
            $table->string('time_tracking')->nullable(); //enabled/disabled
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
