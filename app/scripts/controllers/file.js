'use strict';

/**
 * @ngdoc function
 * @name angularNewProjectApp.controller:FileCtrl
 * @description
 * # FileCtrl
 * Controller of the angularNewProjectApp
 */
angular.module('angularNewProjectApp')
    // .controller('FileCtrl', ['fileService', '$scope', function(fileService, $scope) {
    //     var vm = this;
    //     vm.file = null;
    //     vm.errorMessage = null;
    //     vm.upload = function() {
    //         fileService.upload(vm.file).then(function(data) {
    //             if (!data.status) {
    //                 vm.errorMessage = 'upload failure!';
    //                 return;
    //             } else {
    //                 vm.errorMessage = data.message;
    //             }
    //         });
    //     };
    // }]);

.controller('FileCtrl', ['$scope', 'Upload', '$timeout', function($scope, Upload, $timeout) {
    $scope.uploadFiles = function(file, errFiles) {
        $scope.f = file;
        $scope.errFile = errFiles && errFiles[0];
        if (file) {
            file.upload = Upload.upload({
                url: 'http://localhost:8080/files/upload',
                data: {
                    file: file
                }
            });

            file.upload.then(function(response) {
                $timeout(function() {
                    file.result = response.data;
                });
            }, function(response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function(evt) {
                file.progress = Math.min(100, parseInt(100.0 *
                    evt.loaded / evt.total));
            });
        }
    }
}]);
