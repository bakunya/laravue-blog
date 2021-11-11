<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model {
    use HasFactory;

    protected $guarded = ['id'];

    public function scopeFilter($query, $filters) {
        $query
            ->when($filters['category'] ?? false, function($query, $categories) {
                return $query
                    ->whereHas('category', function($query) use($categories) {
                        return $query->where('slug', $categories);
                    });
            })
            ->when($filters['author'] ?? false, function($query, $author) {
                return $query
                    ->whereHas('author', function($query) use($author) {
                        return $query->where('username', $author);
                    });
            })
            ->when($filters['keywords'] ?? false, function($query, $keywords) {
                return $query
                    ->where('title', 'like', '%' . $keywords . '%') 
                    ->orWhere('content', 'like', '%' . $keywords . '%');
            });
    }

    public function scopeArticleCategory($query, $filters) {
        return $query
            ->when($filters['slug_category'] ?? false, function($query, $slug_category) {
                return $query
                    ->whereHas('category', function($query) use($slug_category) {
                        return $query->where('slug', $slug_category);
                    });;
            })
            ->where('published', $filters['published'] ?? true)
            ->get();
    }

    public function scopeArticleAuthor($query, $filters) {
        return $query
            ->when($filters['author'] ?? false, function($query, $author) {
                return $query
                    ->whereHas('author', function($query) use($author) {
                        return $query->where('username', $author);
                    });;
            })
            ->where('published', $filters['published'] ?? true)
            ->get();
    }

    public function category() {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function author() {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
