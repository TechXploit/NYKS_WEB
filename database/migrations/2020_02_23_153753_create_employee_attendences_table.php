<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeeAttendencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee_attendences', function(Blueprint $table) {
			$table->bigIncrements('id');
			$table->bigInteger('emp_id')->unsigned();
			$table->date('date');
			$table->time('start_time');
			$table->time('end_time');
			$table->bigInteger('approved_by_person_id')->unsigned();
			$table->datetime('approved_at');
			$table->boolean('approval_status')->default(0);
			$table->smallInteger('voluntary_leaves')->default('0');
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
        Schema::dropIfExists('employee_attendences');
    }
}
