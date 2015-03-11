/**
 * Created by jvoelkel on 7/16/14.
 */

var login = angular.module('LoginCtrl',[]);

    login.controller('LoginController',function($scope,$location,Login,SessionService){

        $scope.loginSubmit = function(){
            var auth = Login.auth($scope.loginData);
                auth.success(function(response){
                   if(response.id){
                       SessionService.set('auth',true); //This sets our session key/val pair as authenticated
                       $location.path('/dashboard');
                   }else alert('could not verify your login');
                });
        };
        $scope.logout = function(){
            var logout = Login.destroy();
                logout.success(function(){
                    $location.path('/');
                });
        };
    });