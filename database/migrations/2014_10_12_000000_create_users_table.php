<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('email');
			$table->timestamp('email_verified_at')->nullable();
			$table->string('password');
			$table->bigInteger('emp_id')->unsigned();
			$table->boolean('is_super')->default(0);
			$table->rememberToken('rememberToken');
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
}
