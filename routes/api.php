<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/signin', [AuthController::class, 'signin']);
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/signout', [AuthController::class, 'signout'])->middleware('auth:sanctum');


Route::middleware('auth:sanctum')->group(function (){
    Route::get('/user', function(Request $request){
        return $request->user();
    });
    Route::get('/products', [ProductController::class, 'index']);
    Route::get('/products/{id}', [ProductController::class, 'show']);
    Route::get('/banners', [BannerController::class, 'index']);
    Route::post('/banner/create', [BannerController::class, 'create']);
});

