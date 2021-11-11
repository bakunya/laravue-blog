<?php

namespace App\Repository;

use App\Models\Article;
use Exception;

class Articles {
    protected $result = [
        'error' => null,
        'statusCode' => null,
        'data' => null,
    ];

    public function getAllArticlesByPublished($published = true) {
        try {
            $this->result['data'] = Article::where('published', $published)->get();
            $this->result['statusCode'] = 200;

            if(count($this->result['data']) <= 0) {
                $this->result['statusCode'] = 404;
                throw new Exception('Articles not exists.');
            }
        } catch (Exception $th) {
            $this->result['data'] = 'Error when get articles from database';
            $this->result['error'] = $th->getMessage();
            $this->result['statusCode'] = $this->result['statusCode'] ?? 500;
            error_log($th);
        }

        return $this->result;
    }

    public function getAllArticlesByPublishedAndCategory($slug_category, $published = true) {
        try {
            $category = Article::articleCategory(collect([
                'published' => $published, 
                'slug_category' => $slug_category
            ]));

            $this->result['data'] = $category;
            $this->result['statusCode'] = 200;

            if(count($this->result['data']) <= 0) {
                $this->result['statusCode'] = 404;
                throw new Exception('Slug not found.');
            }
        } catch (Exception $th) {
            $this->result['data'] = 'Error when get articles from database';
            $this->result['error'] = $th->getMessage();
            $this->result['statusCode'] = $this->result['statusCode'] ?? 500;
            error_log($th);
        }

        return $this->result;
    }

    public function getAllArticlesByPublishedAndAuthor($author = "bakunya", $published = true) {
        try {
            $category = Article::articleAuthor(collect([
                'author' => $author,
                'published' => $published
            ]));

            $this->result['data'] = $category;
            $this->result['statusCode'] = 200;

            if(count($this->result['data']) <= 0) {
                $this->result['statusCode'] = 404;
                throw new Exception('Articles is empty.');
            }
        } catch (Exception $th) {
            $this->result['data'] = 'Error when get articles from database';
            $this->result['error'] = $th->getMessage();
            $this->result['statusCode'] = $this->result['statusCode'] ?? 500;
            error_log($th);
        }

        return $this->result;
    }

    public function search($filter) {
        try {
            $this->result['data'] = Article::filter($filter)->where('published', '=', true)->get();
            $this->result['statusCode'] = 200;

            if(count($this->result['data']) <= 0) {
                $this->result['statusCode'] = 404;
                throw new Exception('Articles not found.');
            }
        } catch (Exception $th) {
            $this->result['data'] = 'Error when get articles from database';
            $this->result['error'] = $th->getMessage();
            $this->result['statusCode'] = $this->result['statusCode'] ?? 500;
            error_log($th);
        }

        return $this->result;
    }
}