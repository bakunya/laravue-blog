<?php

namespace App\Repository;

use App\Models\Article as ModelsArticle;
use Exception;

class Article {
    protected $result = [
        'error' => null,
        'statusCode' => null,
        'data' => null,
    ];

    public function getBySlugAndPublished($slug, $published = true) {
        try {
            $this->result['data'] = ModelsArticle::where([
                ['slug', '=', $slug],
                ['published', '=', $published]
            ])->first();
            $this->result['statusCode'] = 200;

            if(!$this->result['data']) {
                $this->result['statusCode'] = 404;
                throw new Exception('Article not found.');
            }
        } catch (Exception $th) {
            $this->result['data'] = 'Error when get article from database';
            $this->result['error'] = $th->getMessage();
            $this->result['statusCode'] = $this->result['statusCode'] ?? 500;
            error_log($th);
        }

        return $this->result;
    }

    public function getBySlugAndUserId($slug, $userid) {
        try {
            $this->result['data'] = ModelsArticle::where([
                ['slug', '=', $slug],
                ['user_id', '=', $userid]
            ])->first();
            $this->result['statusCode'] = 200;

            if(!$this->result['data']) {
                $this->result['statusCode'] = 404;
                throw new Exception('Article not found.');
            }
        } catch (Exception $th) {
            $this->result['data'] = 'Error when get article from database';
            $this->result['error'] = $th->getMessage();
            $this->result['statusCode'] = $this->result['statusCode'] ?? 500;
            error_log($th);
        }

        return $this->result;
    }

    public function store($article, $userid) {
        try {
            $article['user_id'] = $userid;
            ModelsArticle::create($article);
            $this->result['data'] = 'success create new article.';
            $this->result['statusCode'] = 201;
        } catch (Exception $th) {
            $this->result['data'] = 'Error when create article';
            $this->result['error'] = $th->getMessage();
            $this->result['statusCode'] = 500;
            error_log($th);
        }

        return $this->result;
    }

    public function update($articleUpdate, $filter) {
        try {
            $article = ModelsArticle::where('user_id', $filter['user_id'])
                ->where('id', $filter['id'])
                ->update($articleUpdate);

            if(!$article) {
                $this->result['statusCode'] = 404;
                throw new Exception('Article not found.');
            }

            $this->result['data'] = 'success update new article.';
            $this->result['statusCode'] = 201;
        } catch (Exception $th) {
            $this->result['data'] = 'Error when update article';
            $this->result['error'] = $th->getMessage();
            $this->result['statusCode'] = $this->result['statusCode'] ?? 500;
            error_log($th);
        }

        return $this->result;
    }

    public function publish($id, $userid) {
        try {
            $article = ModelsArticle::where('user_id', $userid)
                ->where('id', $id)
                ->update(['published' => true]);

            if(!$article) {
                $this->result['statusCode'] = 404;
                throw new Exception('Article not found.');
            }
            
            $this->result['data'] = 'success publish article.';
            $this->result['statusCode'] = 201;
        } catch (Exception $th) {
            $this->result['data'] = 'Error when publish article';
            $this->result['error'] = $th->getMessage();
            $this->result['statusCode'] = $this->result['statusCode'] ?? 500;
            error_log($th);
        }

        return $this->result;
    }

    public function unpublish($id, $userid) {
        try {
            $article = ModelsArticle::where('user_id', $userid)
                ->where('id', $id)
                ->update(['published' => false]);

            if(!$article) {
                $this->result['statusCode'] = 404;
                throw new Exception('Article not found.');
            }
            
            $this->result['data'] = 'success unpublish article.';
            $this->result['statusCode'] = 201;
        } catch (Exception $th) {
            $this->result['data'] = 'Error when unpublish article';
            $this->result['error'] = $th->getMessage();
            $this->result['statusCode'] = $this->result['statusCode'] ?? 500;
            error_log($th);
        }

        return $this->result;
    }

    public function delete($id, $userid) {
        try {
            $article = ModelsArticle::where('user_id', $userid)
                ->where('id', $id)
                ->delete();

            if(!$article) {
                $this->result['statusCode'] = 404;
                throw new Exception('Article not found.');
            }
            
            $this->result['data'] = 'success delete article.';
            $this->result['statusCode'] = 201;
        } catch (Exception $th) {
            $this->result['data'] = 'Error when delete article';
            $this->result['error'] = $th->getMessage();
            $this->result['statusCode'] = $this->result['statusCode'] ?? 500;
            error_log($th);
        }

        return $this->result;
    }
}