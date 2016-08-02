'use strict';

angular.module('doorDetail').
    component('doorDetail', {
        templateUrl: 'templates/door-detail/door-detail.template.html',
        controller: ['$http', '$routeParams',
            function ($http, $routeParams) {
                var self = this;
                self.door = $routeParams.door;

                $http.get('http://svyatis.com/doorId/' + $routeParams.door).then(function (response) {
                    self.doorId = response.data;
                  console.log(self.doorId);
                })
            }
        ]
    });
