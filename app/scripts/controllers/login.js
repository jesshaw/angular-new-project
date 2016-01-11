'use strict';

/**
 * @ngdoc function
 * @name angularNewProjectApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularNewProjectApp
 */
angular.module('angularNewProjectApp')
	.controller('LoginCtrl', ['$location', '$routeParams', 'authFactory', function($location, $routeParams, authFactory) {
		var vm = this,
			path = '/';

		vm.email = null;
		vm.password = null;
		vm.errorMessage = null;

		vm.login = function() {
			authFactory.login(vm.email, vm.password).then(function(status) {
				//$routeParams.redirect will have the route
				//they were trying to go to initially
				if (!status) {
					vm.errorMessage = 'Unable to login';
					return;
				}

				if (status && $routeParams && $routeParams.redirect) {
					path = path + $routeParams.redirect;
				}

				$location.path(path);
			});
		};
	}]);