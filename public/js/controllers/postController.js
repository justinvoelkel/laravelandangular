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
        };

        $scope.remove = function (id, index){
            var removePost = CRUD.delete(id);
            removePost.success(function(response){
                $scope.flash = response.status;
                $scope.posts.splice(index,1);
            })
        };

        $scope.status = function (post){
            post.live = post.live==0 ? 1 : 0;
            var setStatus = CRUD.update(post.id,post);
            setStatus.success(function(response){
               $scope.flash = response.flash;
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
