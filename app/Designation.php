<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Designation extends Model 
{

    protected $fillable = [
        'designation_name',
        'emp_id',
    ];
    public $timestamps = true;

    public function designationToEmployee()
    {
        return $this->hasMany('Employee', 'emp_id');
    }

}