<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::group(array('prefix'=>'/api'),function(){
   Route::post('login/auth','AuthController@Login');
   Route::get('login/destroy','AuthController@Logout');
   Route::resource('posts','PostController');
});

Route::get('admin',function()
{
    return View::make('admin');
});

Route::get('/', function()
{
    $posts = new PostController();
	return View::make('index')->with('posts', $posts->index(1));
});

Route::get('/post/{id}', function($id)
{
    $posts = new PostController();
    return View::make('single')->with('post', $posts->show($id,1));
});

