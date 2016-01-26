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

    FileCtrl.$inject = ['$scope', 'Upload', '$timeout'];

    function FileCtrl($scope, Upload, $timeout) {
        $scope.uploadFiles = function(file, errFiles) {
            $scope.f = file;
            $scope.errFile = errFiles && errFiles[0];

            if (file) {
                file.upload = Upload.upload({
                    url: 'http://localhost:9091/files/upload',
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
        };
    }
})();
