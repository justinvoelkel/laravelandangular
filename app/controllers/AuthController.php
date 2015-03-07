<?php
/**
 * Created by PhpStorm.
 * User: jvoelkel
 * Date: 7/17/14
 * Time: 10:59 AM
 */

class AuthController extends BaseController{

    public function Login(){
        if(Auth::attempt(Input::only('username','password'))){
            return Auth::user();
        }else{
            return 'invalid username/pass combo';
        }
    }

    public Function Logout(){
        Auth::logout();
        return 'logged out';
    }

}