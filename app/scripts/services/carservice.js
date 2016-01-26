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

    carService.$inject = ['$http'];

    function carService($http) {
        var serviceBase = 'http://localhost:9091/cars';
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
