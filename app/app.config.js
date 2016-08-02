'use strict';

angular.module('doorApp').
    config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/login', {
                template: '<login></login>'
                }).
                when('/register', {
                template: '<register></register>'
                }).
                when('/aboutUs', {
                template: '<about-us></about-us>',
                authenticated: true
                }).
                when('/doors', {
                template: '<door-list></door-list>',
                authenticated: true
                }).
                when('/doors/:door', {
                template: '<door-detail></door-detail>',
                authenticated: true
                }).
                when('/blog', {
                template: '<blog></blog>',
                authenticated: true
                }).
                when('/contactUs', {
                template: '<contact-us></contact-us>',
                authenticated: true
                }).
                otherwise('/login');
        }
    ]).
    run(["$rootScope", "$location", 'userModel',
        function ($rootScope, $location, userModel) {
            $rootScope.$on("$routeChangeStart",
                function (event, next, current) {
                    if (next.$$route.authenticated) {
                        if (!userModel.getAuthStatus()) {
                            $location.path('/login');
                        }
                    }

                    if (next.$$route.originalPath == '/login' || next.$$route.originalPath == '/register') {
                        console.log('Login Page');
                        if (userModel.getAuthStatus()) {
                            $location.path(current.$$route.originalPath);
                        }
                    }
            })
        }
    ]);
