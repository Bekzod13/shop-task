<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// auth routes
Route::post('/signin', [AuthController::class, 'signin']);
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/signout', [AuthController::class, 'signout'])->middleware('auth:sanctum');

// open routes
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::get('/products/search/{key}', [ProductController::class, 'search']);
Route::get('/banners', [BannerController::class, 'index']);

// secret routes
Route::middleware('auth:sanctum')->group(function (){
    Route::get('/user', function(Request $request){
        return $request->user();
    });
    Route::post('/banner/create', [BannerController::class, 'create']);
    Route::post('/banner/delete/{id}', [BannerController::class, 'destroy']);
    Route::get('/cart/{user_id}', [CartController::class, 'index']);
    Route::post('/cart/create', [CartController::class, 'create']);
    Route::get('/cart/cartCount/{user_id}', [CartController::class, 'cartCount']);
});

