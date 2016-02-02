(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name angularNewProjectApp.controller:CarCtrl
     * @description
     * # CarCtrl
     * Controller of the angularNewProjectApp
     */
    angular.module('angularNewProjectApp')
        .controller('CarCtrl', CarCtrl);

    CarCtrl.$injector = ['carService'];

    function CarCtrl(carService) {
        var vm = this;
        vm.awesomeThings = [];

        activate();

        ////////////

        function activate() {
            return getCars();
        }

        function getCars() {
            carService.getCars().then(function(cars) {
                vm.awesomeThings = cars;
            });
        }

    }

})();
