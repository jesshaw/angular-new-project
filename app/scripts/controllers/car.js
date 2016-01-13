'use strict';

/**
 * @ngdoc function
 * @name angularNewProjectApp.controller:CarCtrl
 * @description
 * # CarCtrl
 * Controller of the angularNewProjectApp
 */
angular.module('angularNewProjectApp')
    .controller('CarCtrl', ['$scope', 'carService',
        function($scope, carService) {
            carService.getCars().then(
                function(cars) {
                    $scope.awesomeThings = cars;
                });
        }
    ]);
