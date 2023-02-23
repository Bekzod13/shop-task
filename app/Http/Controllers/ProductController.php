<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        return response([
            'products'=>Product::latest()->paginate(20),
        ]);
    }
    public function show($id){
        return response([
            'product'=>Product::find($id),
        ]);
    }
}
