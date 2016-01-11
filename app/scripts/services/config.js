'use strict';

/**
 * @ngdoc service
 * @name angularNewProjectApp.config
 * @description
 * # config
 * Value in the angularNewProjectApp.
 */
(function() {
    var value = {
        useBreeze: false
    };
    angular.module('angularNewProjectApp').value('config', value);
}());
