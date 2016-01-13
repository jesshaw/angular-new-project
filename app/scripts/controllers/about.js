'use strict';

/**
 * @ngdoc function
 * @name angularNewProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularNewProjectApp
 */
angular.module('angularNewProjectApp')
    .controller('AboutCtrl', ['$scope', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }]);
