'use strict';

angular.module('contactUs')
    .component('contactUs', {
        templateUrl: 'templates/contact-us/contact-us.template.html',
        controller: ('contactController', ['$scope', '$http',
            function ($scope, $http) {
                this.contactFormSend = function (blogForm){
                    $http({
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        url: 'http://svyatis.com/contactSend',
                        method: 'POST',
                        data: {
                            'name': this.name,
                            'email': this.email,
                            'message': this.message
                        }
                    }).success(function (response) {
                        console.log(response);
                    }).error(function(response) {
                        console.log(response);
                        alert('Error');
                    });
                };
            }])
    });