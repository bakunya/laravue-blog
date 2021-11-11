<?php

namespace App\Http\Controllers;

use App\Repository\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class Auth extends Controller {
    protected $repository;

    public function __construct() {
        $this->repository = new User();
    }

    public function register(Request $request) {
        $userCredentials = $request->validate([
            'username' => 'required|string|between:2,100|unique:users',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = $this->repository->registerStore($userCredentials);

        return Response::json($user, 201);
    }

    public function login(Request $request) {
        $userCredentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        $user = $this->repository->login($userCredentials);

        if(!$user) return Response::json(['message' => 'User not found'], 404);

        return Response::json($user, 200);
    }

    public function logoutAllDevices(Request $request) {
        $userCredentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        $status = $this->repository->logoutAllDevices($userCredentials);

        if(!$status) return Response::json(['message' => 'User not found'], 404);

        return Response::noContent(201);
    }

    public function logout(Request $request) {
        try {
            $request->user()->currentAccessToken()->delete();
            return Response::noContent(201);
        } catch (\Throwable $th) {
            error_log($th);
            return Response::json(['message' => 'Error when deleting token'], 402);
        }
    }
}