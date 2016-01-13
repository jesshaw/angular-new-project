'use strict';

/**
 * @ngdoc service
 * @name angularNewProjectApp.tokenInterceptor
 * @description
 * # tokenInterceptor
 * Factory in the angularNewProjectApp.
 */
angular.module('angularNewProjectApp')
    .factory('tokenInterceptor', ['$q', '$window',
        function($q, $window) {
            return {
                request: function(config) {
                    config.headers = config.headers || {};
                    console.log($window.sessionStorage.token);
                    if ($window.sessionStorage.token) {
                        config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
                    }
                    return config;
                },

                response: function(response) {
                    return response || $q.when(response);
                }
            };
        }
    ]);
