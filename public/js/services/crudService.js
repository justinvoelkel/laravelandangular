/**
 * Created by jvoelkel on 11/19/14.
 */

var crud = angular.module('CRUDSrvc',[]);

crud.factory("CRUD",function($http){

    return{
        all: function(){
            var request = $http({method:'GET', url:'api/posts'});
            return request;
        },
        create: function(data){
            var request = $http({method:'GET', url:'api/posts/create',params:data});
            return request;
        },
        get: function(id){
            var request = $http.get('api/posts/'+id);
            return request;
        },
        update: function(id,data){
            var request = $http.put('api/posts/'+id,data);
            return request;
        },
        delete: function(id){
            var request = $http.delete('api/posts/'+id);
            return request;
        }
    }

});