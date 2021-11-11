<?php

namespace App\Http\Controllers;

use App\Repository\Categories as RepositoryCategories;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;

class Categories extends Controller {
    protected $repository;

    public function __construct() {
        $this->repository = new RepositoryCategories();
    }

    public function index(Request $request) {
        $result = $this->repository->getAll();
        return Response::json($result, $result['statusCode']);
    }
}
