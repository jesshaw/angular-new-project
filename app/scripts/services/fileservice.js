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

    fileService.$inject = ['Upload', 'config'];

    function fileService(Upload, config) {

        var serviceBase = config.restApiUrl + "files/upload";
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
