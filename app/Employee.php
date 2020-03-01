<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model 
{

    protected $table = 'employees';
    protected $fillable = [
        'emp_gen_id',
        'name',
        'phone',
        'work_hour_start_at',
        'work_hour_end_at',
        'alarm_time',
        'voice_token',
        'face_token',
        'face_img_url',
        'aadhaar_digits',
        'emp_attendance_id',
        'designation_id',
        'dept_id',
        'office_id',
        'is_active',
    ];

    public $timestamps = true;

    public function employeeToDesignation()
    {
        return $this->belongsTo('Designation', 'designation_id');
    }

    public function employeeToDept()
    {
        return $this->belongsTo('Department', 'dept_id');
    }

    public function employeeToOffice()
    {
        return $this->belongsTo('Office', 'office_id');
    }

    public function employeeToAttendance()
    {
        return $this->hasMany('EmployeeAttendence', 'emp_attendance_id');
    }

}