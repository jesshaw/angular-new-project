(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name angularNewProjectApp.carService
     * @description
     * # carService
     * Service in the angularNewProjectApp.
     */
    angular
        .module('angularNewProjectApp')
        .service('carService', carService);

    carService.$inject = ['$http', 'config'];

    function carService($http, config) {
        var serviceBase = config.restApiUrl + 'cars';
        var service = {
            getCars: getChars,
        };

        return service;

        ////////////

        function getChars() {
            return $http.get(serviceBase).then(
                function(results) {
                    //console.log(results.data);
                    return results.data;
                });
        }
    }
})();
