<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        $products = Product::latest()->paginate(20);
        return response([
            'products'=>ProductResource::collection($products),
        ]);
    }
    public function show($id){
        return response([
            'product'=> new ProductResource(Product::find($id)),
        ]);
    }
    public function search($key){
        $products = Product::where('title', 'LIKE', "%" . $key . "%")->get();
        return response([
            'products' => ProductResource::collection($products),
        ]);
    }
}
