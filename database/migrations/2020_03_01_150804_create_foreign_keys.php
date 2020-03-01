<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateForeignKeys extends Migration {

	public function up()
	{
		Schema::table('employees', function(Blueprint $table) {
			$table->foreign('emp_attendance_id')->references('id')->on('employee_attendences')
						->onDelete('restrict')
						->onUpdate('restrict');
		});
		Schema::table('employees', function(Blueprint $table) {
			$table->foreign('designation_id')->references('id')->on('designations')
						->onDelete('restrict')
						->onUpdate('restrict');
		});
		Schema::table('employees', function(Blueprint $table) {
			$table->foreign('dept_id')->references('id')->on('departments')
						->onDelete('restrict')
						->onUpdate('restrict');
		});
		Schema::table('employees', function(Blueprint $table) {
			$table->foreign('office_id')->references('id')->on('offices')
						->onDelete('restrict')
						->onUpdate('restrict');
		});
		Schema::table('users', function(Blueprint $table) {
			$table->foreign('emp_id')->references('id')->on('employees')
						->onDelete('restrict')
						->onUpdate('restrict');
		});
		Schema::table('designations', function(Blueprint $table) {
			$table->foreign('emp_id')->references('id')->on('employees')
						->onDelete('restrict')
						->onUpdate('restrict');
		});
		Schema::table('departments', function(Blueprint $table) {
			$table->foreign('emp_id')->references('id')->on('employees')
						->onDelete('restrict')
						->onUpdate('restrict');
		});
		Schema::table('offices', function(Blueprint $table) {
			$table->foreign('emp_id')->references('id')->on('employees')
						->onDelete('restrict')
						->onUpdate('no action');
		});
		Schema::table('employee_attendences', function(Blueprint $table) {
			$table->foreign('emp_id')->references('id')->on('employees')
						->onDelete('restrict')
						->onUpdate('restrict');
		});
	}

	public function down()
	{
		Schema::table('employees', function(Blueprint $table) {
			$table->dropForeign('employees_emp_attendance_id_foreign');
		});
		Schema::table('employees', function(Blueprint $table) {
			$table->dropForeign('employees_designation_id_foreign');
		});
		Schema::table('employees', function(Blueprint $table) {
			$table->dropForeign('employees_dept_id_foreign');
		});
		Schema::table('employees', function(Blueprint $table) {
			$table->dropForeign('employees_office_id_foreign');
		});
		Schema::table('users', function(Blueprint $table) {
			$table->dropForeign('users_emp_id_foreign');
		});
		Schema::table('designations', function(Blueprint $table) {
			$table->dropForeign('designations_emp_id_foreign');
		});
		Schema::table('departments', function(Blueprint $table) {
			$table->dropForeign('departments_emp_id_foreign');
		});
		Schema::table('offices', function(Blueprint $table) {
			$table->dropForeign('offices_emp_id_foreign');
		});
		Schema::table('employee_attendences', function(Blueprint $table) {
			$table->dropForeign('employee_attendences_emp_id_foreign');
		});
	}
}