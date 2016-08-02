'use strict';

angular.module('login')
    .factory('userModel', ['$http', '$cookies', function ($http, $cookies) {
        var userModel = {};

        userModel.doLogin = function (loginData) {
            return $http({
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                url: 'http://svyatis.com/auth',
                method: 'POST',
                data: {
                    'email': loginData.email,
                    'password': loginData.password
                }
            }).success(function (response) {
                console.log(response);
                $cookies.put('auth', response);
            }).error(function(response) {
                console.log(response);
                alert('Login error');
            });
        };

        userModel.getAuthStatus = function () {
            var status = $cookies.get('auth');
            return !!status;
        };
        
        userModel.doUserLogout = function () {
            $cookies.remove('auth');
        };

        return userModel;
    }]);
