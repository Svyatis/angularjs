'use strict';

angular.module('register')
    .component('register', {
        templateUrl: 'templates/auth/register/register.template.html',
        controller: ('registerController', ['$scope', '$http', '$location',
            function ($scope, $http, $location) {
                $scope.submitForm = function (registerForm){
                    $http({
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        url: 'http://svyatis.com/create',
                        method: 'POST',
                        data: {
                            'name': $scope.register.name,
                            'email': $scope.register.email,
                            'password': $scope.register.password
                        }
                    }).success(function (response) {
                        console.log(response);
                        $location.path('/doors');
                    }).error(function(response) {
                        console.log(response);
                        alert('Registration error');
                    });
                }
            }]
        )
    });