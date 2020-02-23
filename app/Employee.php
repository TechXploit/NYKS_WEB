<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    //
    protected $fillable = [
        'emp_gen_id',
        'name',
        'phone',
        'work_hour_start_at',
        'work_hour_end_at',
        'voice_token',
        'face_token',
        'face_img_url',
        'aadhaar_digits',
        'is_active',
    ];
}
