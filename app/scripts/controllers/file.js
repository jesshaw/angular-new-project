(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name angularNewProjectApp.controller:FileCtrl
     * @description
     * # FileCtrl
     * Controller of the angularNewProjectApp
     */
    angular
        .module('angularNewProjectApp')
        .controller('FileCtrl', FileCtrl);

    FileCtrl.$inject = ['$scope', 'Upload', '$timeout', 'fileService'];

    function FileCtrl($scope, Upload, $timeout, fileService) {

        $scope.uploadFiles = uploadFiles;

        function uploadFiles(file, errFiles) {
            $scope.f = file;
            $scope.errFile = errFiles && errFiles[0];

            if (file) {
                file.upload = fileService.uploadFiles(file);

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
        };
    }
})();
