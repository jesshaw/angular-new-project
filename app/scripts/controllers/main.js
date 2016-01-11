'use strict';

/**
 * @ngdoc function
 * @name angularNewProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularNewProjectApp
 */
angular.module('angularNewProjectApp')
	.controller('MainCtrl', function() {
		var vm = this;
		vm.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	});