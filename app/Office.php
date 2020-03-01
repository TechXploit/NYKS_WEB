<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Office extends Model 
{

    protected $fillable = [
        'emp_id',
        'street',
        'state',
        'district',
        'pincode',
    ];
    public $timestamps = true;

    public function officeToEmployee()
    {
        return $this->hasMany('Employee', 'emp_id');
    }

}