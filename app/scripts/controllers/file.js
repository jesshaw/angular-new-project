'use strict';

/**
 * @ngdoc function
 * @name angularNewProjectApp.controller:FileCtrl
 * @description
 * # FileCtrl
 * Controller of the angularNewProjectApp
 */
angular.module('angularNewProjectApp')
    .controller('FileCtrl', ['fileService', function(fileService) {
        var vm = this;
        vm.file = null;
        vm.errorMessage = null;
        vm.upload = function() {
            fileService.upload(vm.file).then(function(data) {
                if (!data.status) {
                    vm.errorMessage = 'upload failure!';
                    return;
                } else {
                    vm.errorMessage = data.message;
                }
            });
        };
    }]);
