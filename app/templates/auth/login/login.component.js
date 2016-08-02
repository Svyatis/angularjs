'use strict';

angular.module('login').
    component('login', {
        templateUrl: 'templates/auth/login/login.template.html',
        controller: ('loginController', ['$scope', '$http', '$location', 'userModel',
            function($scope, $http, $location, userModel) {
                angular.extend($scope, {
                    doLogin: function(loginForm) {
                        var data = {
                            email: $scope.login.email,
                            password: $scope.login.password
                        };

                        userModel.doLogin(data).then(function() {
                            $location.path('/aboutUs');
                        })
                    }
                })
        }])
    });
