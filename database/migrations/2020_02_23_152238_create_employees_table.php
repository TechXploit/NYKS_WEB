<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('emp_gen_id');
            $table->char('name',80);
            $table->integer('phone',10);
            $table->timestamp('work_hour_start_at');
            $table->timestamp('work_hour_end_at');
            $table->time('alarm_time');
            $table->text('voice_token');
            $table->chatextr('face_token');
            $table->string('face_img_url');
            $table->integer('aadhaar_digits');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
