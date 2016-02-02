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

    FileCtrl.$inject = ['Upload', '$timeout', 'fileService'];

    function FileCtrl(Upload, $timeout, fileService) {
        var vm = this;

        vm.f = null;
        vm.errFile = null;
        vm.errorMsg = null;
        vm.uploadFiles = uploadFiles;

        ////////////

        function uploadFiles(file, errFiles) {
            vm.f = file;
            vm.errFile = errFiles && errFiles[0];

            if (file) {
                file.upload = fileService.uploadFiles(file);

                file.upload.then(function(response) {
                    $timeout(function() {
                        file.result = response.data;
                    });
                }, function(response) {
                    if (response.status > 0) {
                        vm.errorMsg = response.status + ': ' + response.data;
                    }
                }, function(evt) {
                    file.progress = Math.min(100, parseInt(100.0 *
                        evt.loaded / evt.total));
                });
            }
        }
    }
})();
