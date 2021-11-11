<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable {
    use HasApiTokens, HasFactory, Notifiable;
    
    protected $guarded = ['id'];
    protected $hidden = ['password'];

    public function articles() {
        return $this->hasMany(Article::class, 'user_id', 'id');
    }
}
