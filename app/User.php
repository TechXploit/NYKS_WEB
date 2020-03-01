<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Model 
{
    use Notifiable,HasApiTokens;

    protected $fillable = [
        'id',
        'email',
        'password',
        'emp_id',
        'is_super',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public $timestamps = true;

    public function userToEmployee()
    {
        return $this->hasOne('Employee', 'emp_id');
    }

}