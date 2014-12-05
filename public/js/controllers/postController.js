/**
 * Created by jvoelkel on 7/18/14.
 */
var post = angular.module('PostCtrl',[]);

    post.controller('PostController',function($scope,CRUD){
        var getPosts = CRUD.all();
            getPosts.success(function(response){
               $scope.posts = response;
            });

        $scope.submit = function(){
            var request = CRUD.create($scope.new);
                request.success(function(response){
                    $scope.flash = response.status;
                });
        }

    });

    post.controller('EditPostController',function($scope,$routeParams,CRUD){
        var getPost = CRUD.get($routeParams.id);
        getPost.success(function(response){
            $scope.post = response;
        });

        $scope.submit = function(){
            var request = CRUD.update($routeParams.id,$scope.post);
            request.success(function(response){
                $scope.flash = response.status;
            });
        }

    });

