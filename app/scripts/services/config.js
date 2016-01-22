(function() {
    'use strict';

    var value = {
        useBreeze: false
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
