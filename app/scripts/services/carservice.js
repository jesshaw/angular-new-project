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
        var self = this;
        var serviceBase = 'http://localhost:9001/cars';
        self.getCars = function() {
            return $http.get(serviceBase).then(
                function(results) {
                    console.log(results.data);
                    return results.data;
                });
        };
    }
})();
