(function() {
    'use strict';


    /**
     * @ngdoc directive
     * @name angularNewProjectApp.directive:hello
     * @description
     * # hello
     */
    angular
        .module('angularNewProjectApp')
        .directive('hello', helloDirective);

    function helloDirective() {
        return {
            link: function postLink(scope, element) {
                element.text('this is the hello directive');
            },
            restrict: 'EAC', //M注释方式现在不支持了
            template: '<div></div>'
        };
    }
})();
