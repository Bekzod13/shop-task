<?php

namespace App\Http\Controllers;

use App\Http\Requests\SigninRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function signup(SignupRequest $request){
        $data = $request->validated();
        $user = User::create([
            'role_id'=>2,
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),
            'phone'=>$request->phone,
        ]);

        $token = $user->createToken($user->name)->plainTextToken;

        return response([
            'token'=>$token,
            'user'=>$user,
        ]);
    }
    public function signin(SigninRequest $request){
        $request->validate([
            'email'=>'required|email',
            'password'=>'required|string',
        ]);
        
        $user = User::where('email', $request->email)->first();

        if(! $user || ! Hash::check($request->password, $user->password)){
            return response([
                'error'=>'Email or Password is wrong!!!',
            ]);
        }

        $token = $user->createToken($user->name)->plainTextToken;

        return response([
            'token'=>$token,
            'user'=>$user,
        ]);
    }
    public function signout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response([
            'success'=>'Successfully sigout!!!',
        ]);
    }
}
