<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\Article as ArticleRepository;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Response;

class Article extends Controller {
    protected $repository;

    public function __construct() {
        $this->repository = new ArticleRepository();
    }

    public function index(Request $request, $slug) {
        $result = $this->repository->getBySlugAndPublished($slug);

        return Response::json($result, $result['statusCode']);
    }

    public function preview(Request $request, $slug) {
        $result = $this->repository->getBySlugAndUserId($slug, $request->user()->id);

        return Response::json($result, $result['statusCode']);
    }

    public function publish(Request $request, $id) {
        $result = $this->repository->publish($id, $request->user()->id);

        return Response::json($result, $result['statusCode']);
    }

    public function unpublish(Request $request, $id) {
        $result = $this->repository->unpublish($id, $request->user()->id);

        return Response::json($result, $result['statusCode']);
    }

    public function create(Request $request) {
        $credentials = $request->validate([
            "title" => "required",
            "content" => "required",
            "category_id" => "required",
            "slug" => "required|unique:articles,slug"
        ]);

        $result = $this->repository->store($credentials, $request->user()->id);

        return Response::json($result, $result['statusCode']);
    }

    public function update(Request $request, $id) {
        $credentials = $request->validate([
            'image_url' => 'url',
            "title" => "required",
            "content" => "required",
            "category_id" => "required",
            "slug" => [
                "required",
                Rule::unique('articles', 'slug')->ignore($id)
            ]
        ]);

        $filter = [
            'user_id' => $request->user()->id,
            'id' => $id
        ];

        $result = $this->repository->update($credentials, $filter);

        return Response::json($result, $result['statusCode']);
    }

    public function delete(Request $request, $id) {
        $result = $this->repository->delete($id, $request->user()->id);

        return Response::json($result, $result['statusCode']);
    }
}
