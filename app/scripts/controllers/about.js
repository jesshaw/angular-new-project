(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name angularNewProjectApp.controller:AboutCtrl
     * @description
     * # AboutCtrl
     * Controller of the angularNewProjectApp
     */
    angular.module('angularNewProjectApp')
        .controller('AboutCtrl', AboutCtrl);


    function AboutCtrl() {
        var vm = this;
        vm.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }
})();
