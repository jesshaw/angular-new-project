(function() {
    'use strict';

    function CarCtrl($scope, carService) {
        carService.getCars().then(
            function(cars) {
                $scope.awesomeThings = cars;
            });
    }

    CarCtrl.$injector = ['$scope', 'carService'];

    /**
     * @ngdoc function
     * @name angularNewProjectApp.controller:CarCtrl
     * @description
     * # CarCtrl
     * Controller of the angularNewProjectApp
     */
    angular.module('angularNewProjectApp')
        .controller('CarCtrl', CarCtrl);
})();
