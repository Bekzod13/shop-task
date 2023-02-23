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
}
