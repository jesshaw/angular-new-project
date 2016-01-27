(function() {
    'use strict';

    var value = {
        useBreeze: false,
        restApiUrl: "http://localhost:9091/",
    };

    /**
     * @ngdoc service
     * @name angularNewProjectApp.config
     * @description
     * # config
     * Value in the angularNewProjectApp.
     */
    angular
        .module('angularNewProjectApp')
        .value('config', value);
})();
