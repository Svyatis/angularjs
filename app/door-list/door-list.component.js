'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('doorList').
  component('doorList', {
    templateUrl: 'door-list/door-list.template.html',
    controller: ['$http', function ($http) {
      var self = this;

      $http.get('http://svyatis.com/products-list').then(function(response) {
        self.doors = response.data;
      });

    }]
  });
