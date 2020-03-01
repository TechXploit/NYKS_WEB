<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Department extends Model 
{

    protected $fillable = [
        'dept_name',
        'emp_id',
    ];
    public $timestamps = true;

    public function deptToEmployee()
    {
        return $this->hasMany('Employee', 'emp_id');
    }

}