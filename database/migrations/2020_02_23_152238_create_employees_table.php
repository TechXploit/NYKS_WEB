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
			$table->char('name');
			$table->integer('phone')->unsigned();
			$table->time('work_hour_start_at');
			$table->time('work_hour_end_at');
			$table->time('alarm_time');
			$table->string('voice_token');
			$table->string('face_token');
			$table->string('face_img_url');
			$table->integer('aadhaar_digits')->unsigned();
			$table->bigInteger('emp_attendance_id')->unsigned();
			$table->bigInteger('designation_id')->unsigned();
			$table->bigInteger('dept_id')->unsigned();
			$table->bigInteger('office_id')->unsigned();
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
        Schema::dropIfExists('employees');
    }
}
