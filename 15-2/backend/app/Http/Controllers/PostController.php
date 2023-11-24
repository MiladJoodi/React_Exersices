<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function index()
    {
        $post = Post::orderBy('id', 'desc')->get();
        return $post;
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $file = $request->file('image');
        $image = '';
       if (!empty($file)){
           $image = time().".".$file->getClientOriginalExtension();
           $file->move('back/images',$image);
       }

       Post::create([
           'image'=>$image
       ]);

        return response()->json([
            'status'=>200,
            'message'=>'عکس با موفقیت افزوده شد',
        ]);

    }


    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
