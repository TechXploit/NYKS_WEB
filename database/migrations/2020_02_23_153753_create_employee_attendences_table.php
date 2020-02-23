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
        Schema::create('employee_attendences', function (Blueprint $table) {
            $table->bigIncrements('id');
        
            $table->string('emp_gen_id');
            $table->date('date');
            $table->timestamps('start_time');
            $table->timestamps('end_time');
            $table->char('approved_by');
            $table->timestamps('approved_at');
            $table->boolean('approval_status');
            $table->integer('voluntary_leaves');
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
