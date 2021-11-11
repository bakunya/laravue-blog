<?php

namespace App\Repository;

use App\Models\Category;
use Exception;

class Categories {
    protected $result = [
        'error' => null,
        'statusCode' => null,
        'data' => null,
    ];

    public function getAll() {
        try {
            $this->result['data'] = Category::all();
            $this->result['statusCode'] = 200;

            if(count($this->result['data']) <= 0) {
                $this->result['statusCode'] = 404;
                throw new Exception('Categories not exists');
            }

        } catch (\Throwable $th) {
            $this->result['data'] = 'Error when get categories from database';
            $this->result['error'] = $th->getMessage();
            $this->result['statusCode'] = $this->result['statusCode'] ?? 500;
            error_log($th);
        }

        return $this->result;
    }
}