/**
 * Created by jvoelkel on 5/5/14.
 */
var app = angular.module('blogApp',[
    'ngRoute',
    //Login
    'LoginCtrl',
    //AuthService
    'AuthSrvc'
]);


    app.run(function(){

    });

    //This will handle all of our routing
    app.config(function($routeProvider, $locationProvider){

        $routeProvider.when('/',{
           templateUrl:'js/templates/login.html',
           controller:'LoginController'
        });

    });
