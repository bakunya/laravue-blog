<?php

use App\Http\Controllers\Article;
use App\Http\Controllers\Articles;
use App\Http\Controllers\Auth;
use App\Http\Controllers\Categories;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix' => 'auth'
], function() {
    Route::post("/login", [Auth::class, 'login']);
    Route::post("/register", [Auth::class, 'register']);
});

Route::group([
    'prefix' => 'auth',
    'middleware' => 'auth:sanctum'
], function() {
    Route::delete('/logout/{id}', [Auth::class, 'logout']);
    Route::delete('/logout-all-devices', [Auth::class, 'logoutAllDevices']);
});

Route::group([
    'prefix' => 'article'
], function() {
    Route::get('/{slug}', [Article::class, 'index']);
});

Route::group([
    'prefix' => 'article',
    'middleware' => 'auth:sanctum'
], function() {
    Route::get('/preview/{slug}', [Article::class, 'preview']);
    Route::post('/create', [Article::class, 'create']);
    Route::put('/update/{id}', [Article::class, 'update']);
    Route::put('/publish/{id}', [Article::class, 'publish']);
    Route::put('/unpublish/{id}', [Article::class, 'unpublish']);
    Route::delete('/delete/{id}', [Article::class, 'delete']);
});

Route::group([
    'prefix' => 'articles',
    'middleware' => 'auth:sanctum'
], function () {
    Route::get('/published', [Articles::class, 'published']);
    Route::get('/unpublished', [Articles::class, 'unpublished']);
});

Route::group([
    'prefix' => 'articles'
], function() {
    Route::get('/', [Articles::class, 'index']);
    Route::get('/search', [Articles::class, 'search']);
    Route::get('/author/{author}', [Articles::class, 'author']);
    Route::get('/category/{slug_category}', [Articles::class, 'category']);
});

Route::group([
    'prefix' => 'master'
], function() {
    Route::get('/categories', [Categories::class, 'index']);
});