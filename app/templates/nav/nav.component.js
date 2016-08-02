'use strict';

angular.
        module('nav').
        component('nav', {
            templateUrl: 'templates/nav/nav.template.html',
            controller: ('navController', ['$scope', 'userModel', '$location',
                function ($scope, userModel, $location) {
                $scope.doUserLogout = function () {
                    userModel.doUserLogout();
                    $location.path('/login');
                }
            }])
});
