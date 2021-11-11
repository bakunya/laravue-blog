<?php

namespace App\Http\Controllers;

use App\Repository\Articles as RepositoryArticles;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class Articles extends Controller {
    protected $repository;

    public function __construct() {
        $this->repository = new RepositoryArticles();
    }

    public function index(Request $request) {
        $result = $this->repository->getAllArticlesByPublished();
        return Response::json($result, $result['statusCode']);
    }

    public function category(Request $request, $slug_category) {
        $result = $this->repository->getAllArticlesByPublishedAndCategory($slug_category);
        return Response::json($result, $result['statusCode']);
    }

    public function author(Request $request, $author) {
        $result = $this->repository->getAllArticlesByPublishedAndAuthor($author);
        return Response::json($result, $result['statusCode']);
    }

    public function search(Request $request) {
        $result = $this->repository->search(request(['keywords', 'author', 'category']));
        return Response::json($result, $result['statusCode']);
    }

    /**
     * access with token
     */
    public function published(Request $request) {
        $result = $this->repository->getAllArticlesByPublishedAndAuthor($request->user()->username);
        return Response::json($result, $result['statusCode']);
    }

    public function unpublished(Request $request) {
        $result = $this->repository->getAllArticlesByPublishedAndAuthor($request->user()->username, false);
        return Response::json($result, $result['statusCode']);
    }
}
