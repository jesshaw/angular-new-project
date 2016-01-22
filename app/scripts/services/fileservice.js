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

    fileService.$inject = ['$http'];

    function fileService($http) {

        var self = this,
            serviceBase = 'http://localhost:8080/files/',
            config = {
                // method: 'POST',
                // url: 'http://example.com',
                headers: {
                    'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryDvl8w2z7tmU4JDUH',
                    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                },
                // data: {
                //     test: 'test'
                // }

            };

        self.upload = function(file) {
            return $http.post(serviceBase + 'upload', file, config).then(
                function(results) {
                    console.log(results.data);
                    return results.data;
                });
        };
        return self;
    }
})();
