<?php

class PostController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$posts = Post::all();

        return $posts;
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
        $new = new Post;
        $new->title = Input::get('title');
        $new->content = Input::get('content');

        if($new->save()){
            return array('status'=>'Saved!');
        }

		return array('status'=>'Not Saved!');
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		return Post::find($id);
	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$post = Post::find($id);

        if($post){
            $post->title    = Input::get('title');
            $post->content  = Input::get('content');
            $post->live     = Input::get('live');

            if($post->save()){
                return array('status'=>'Updated!');
            }else{
                return array('status'=>'Could not update!');
            }
        }
        return array('status'=>'Could not find post!');
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$remove = Post::where('id',$id)->delete();
        if($remove){
            return array('status'=>'Post successfully deleted!');
        }

        return array('status'=>'Could not delete post '.$id);
	}


}
