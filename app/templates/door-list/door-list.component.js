'use strict';

angular.
    module('doorList').
    component('doorList', {
        templateUrl: 'templates/door-list/door-list.template.html',
        controller: (['$http', function ($http) {
            var self = this;
            $http.get('http://svyatis.com/products-list').then(function (response) {
                self.doors = response.data;
            });

            this.productLoad = function (product) {
                $http({
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    url: 'http://svyatis.com/productAdd',
                    method: 'POST',
                    data: {
                        'name': product.name,
                        'description': product.description,
                        'manufactors': product.manufactors[''],
                        'colors': product.colors[''],
                        'file': product.file
                    }
                }).success(function (response) {
                    console.log(response);
                    $location.path('/blog');
                    $route.reload();
                }).error(function(response) {
                    console.log(response);
                    alert('Error');
                });
            }
        }])
});
