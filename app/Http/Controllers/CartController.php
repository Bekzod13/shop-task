<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index($user_id){
        $cartProducts = Cart::where('user_id', $user_id)->get();
        return response([
            'cartProducts'=> CartResource::collection($cartProducts),
        ]);
    }
    public function cartCount($user_id){
        $cartProducts = CartResource::collection(Cart::where('user_id', $user_id)->get());
        return response([
            'cartProductsCount'=> count($cartProducts),
        ]);
    }
    public function create(Request $request){
        Cart::create([
            'user_id'=> $request->user_id,
            'product_id'=> $request->product_id,
        ]);
        return response(['message' => 'succesfully']);
    }
}
