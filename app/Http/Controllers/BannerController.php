<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    public function index(){
        return response([
            'banners'=>Banner::latest()->paginate(10),
        ]);
    }
    public function create(Request $request){
        $request->validate([
            'title'=>'required',
            'image'=>'required|max:2048',
        ]);
        if($request->hasFile('image')){
            $image = $request->file('image')->store('banners', 'public');
        }else{
            $image = '';
        }
        $banner = Banner::create([
            'title'=>$request->title,
            'image'=>$image,
        ]);
        if($banner){
            return response([
                'success'
            ]);
        }else{
            return response([
                'error'
            ]);
        }
    }
}
