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


    app.run(function($rootScope,$location,Login){
        $rootScope.$on('$routeChangeStart', function() {
            var whiteList   = ['/']; //the login is the only unguarded route - everything else needs to check session auth
            var loggedIn    = Login.checkLoginStatus();//boolean - if user is logged in
            var routeSafe = !$.inArray($location.path(),whiteList);//boolean - is route safe or protected
            if(!loggedIn && !routeSafe) {
                $location.path('/');
                alert('You must be logged in to view this page!');
            }
        });
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
