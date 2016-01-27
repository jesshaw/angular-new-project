(function() {
    'use strict';
    /**
     * @ngdoc service
     * @name angularNewProjectApp.fileService
     * @description
     * # fileService
     * Service in the angularNewProjectApp.
     */
    angular
        .module('angularNewProjectApp')
        .service('fileService', fileService);

    fileService.$inject = ['Upload'];

    function fileService(Upload) {

        var serviceBase = "http://localhost:9091/files/upload";
        var service = {
            uploadFiles: uploadFiles
        };

        return service;

        ////////////

        function uploadFiles(file) {
            return Upload.upload({
                url: serviceBase,
                data: {
                    file: file
                }
            });
        }
    }
})();
