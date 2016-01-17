'use strict';

/**
 * @ngdoc service
 * @name angularNewProjectApp.fileService
 * @description
 * # fileService
 * Service in the angularNewProjectApp.
 */
angular.module('angularNewProjectApp')
    .service('fileService', ['$http',
        function($http) {
            var self = this,
                serviceBase = 'http://localhost:8080/files/',
                config = {
                    // method: 'POST',
                    // url: 'http://example.com',
                    headers: {
                        'Content-Type': 'multipart/form-data'
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
    ]);
