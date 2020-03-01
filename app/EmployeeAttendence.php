<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmployeeAttendence extends Model 
{

    protected $fillable = [
        'emp_id',
        'date',
        'start_time', 
        'end_time',
        'approved_by_person_id',
        'approved_at',
        'approval_status',
        'voluntary_leaves'
    ];
    public $timestamps = true;

    public function attendanceToEmployee()
    {
        return $this->belongsTo('Employee', 'emp_id');
    }

}