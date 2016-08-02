'use strict';

angular.
    module('blog').
    component('blog', {
        templateUrl: 'templates/blog/blog.template.html',
        controller: ('blogController', ['$scope', '$http', '$location', '$route',
            function ($scope, $http, $location, $route) {
            this.submitForm = function (){
                $http({
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    url: 'http://svyatis.com/addPost',
                    method: 'POST',
                    data: {
                        'title': this.blog.title,
                        'content': this.blog.content
                    }
                }).success(function (response) {
                    console.log(response);
                    $location.path('/blog');
                    $route.reload();
                }).error(function(response) {
                    console.log(response);
                    alert('Error');
                });
            };

            this.postDelete = function (id) {
                $http({
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    url: 'http://svyatis.com/postDel',
                    method: 'POST',
                    data: {
                        'postId': id
                    }
                }).success(function (response) {
                    console.log(response);
                    $location.path('/blog');
                    $route.reload();
                }).error(function(response) {
                    console.log(response);
                    alert('Error');
                });
            };

            var self = this;
            self.orderProp = 'title';
            $http.get('http://svyatis.com/blogGet').then(function (response) {
                self.posts = response.data;
            });

        }])
});