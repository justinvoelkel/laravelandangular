/**
 * Created by jvoelkel on 5/5/14.
 */
var app = angular.module('blogApp',[
    'ngRoute',
    //Login
    'LoginCtrl',
    //Posts
    'PostCtrl',
    //AuthService
    'AuthSrvc',
    //CRUDService
    'CRUDSrvc'
]);


    app.run(function(){

    });

    //This will handle all of our routing
    app.config(function($routeProvider, $locationProvider){

        $routeProvider.when('/',{
           templateUrl:'js/templates/login.html',
           controller:'LoginController'
        });

        $routeProvider.when('/dashboard',{
            templateUrl:'js/templates/dashboard.html',
            controller:'PostController'
        });

        $routeProvider.when('/add',{
            templateUrl:'js/templates/add.html',
            controller:'PostController'
        });

        $routeProvider.when('/edit/:id',{
            templateUrl:'js/templates/edit.html',
            controller:'EditPostController'
        });

    });
