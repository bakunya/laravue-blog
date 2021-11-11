<?php

namespace App\Repository;

use App\Models\User as ModelsUser;
use Illuminate\Support\Facades\Hash;

class User {
    public function registerStore($user) {
        $user = ModelsUser::create([
            'email' => $user['email'],
            'username' => $user['username'],
            'password' => Hash::make($user['password']),
        ]);

        return [
            'user' => $user,
            'token' => $user->createToken('authToken')->plainTextToken
        ];
    }

    public function login($credentials) {
        $user = ModelsUser::where('email', $credentials['email'])->first();

        if(!$user || !Hash::check($credentials['password'], $user->password)) {
            return false;
        }
        
        return [
            'user' => $user,
            'token' => $user->createToken('authToken')->plainTextToken
        ];
    }

    public function logoutAllDevices($credentials) {
        $user = ModelsUser::where('email', $credentials['email'])->first();

        if(!$user || !Hash::check($credentials['password'], $user->password)) {
            return false;
        }

        $user->tokens()->delete();
        return true;

    }
}