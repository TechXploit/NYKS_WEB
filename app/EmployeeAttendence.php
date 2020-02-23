<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmployeeAttendence extends Model
{
    protected $fillable = [
        'emp_gen_id',
        'date',
        'start_time',
        'end_time',
        'approved_by',
        'approved_at',
        'approval_status',
        'voluntary_leaves'
    ];
}
