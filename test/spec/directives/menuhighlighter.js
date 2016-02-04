'use strict';

describe('Directive: menuHighlighter', function() {
    var element,
        scope,
        rootScope,
        location;

    // load the directive's module
    beforeEach(module('angularNewProjectApp'));
    beforeEach(inject(function($rootScope, $location) {
        rootScope = $rootScope;
        scope = $rootScope.$new();
        location = $location;
    }));

    it('should skip to any specified url page', inject(function($compile) {

        var menuHtml = ['<ul menu-highlighter>',
            '<li class="active"><a href="#/">Home</a></li>',
            '<li><a href="#/about">About</a></li>',
            '<li><a href="#/car">Car</a></li>',
            '<li><a href="#/file">File</a></li>',
            '</ul>'
        ].join('');
        element = angular.element(menuHtml);
        element = $compile(element)(scope);


        // console.log(element.html());

        // skip to about page , it is "/about" path and the brower display url http://loachost:8081/#/about 
        location.path('/about');
        // scope.$apply(); or rootScope.$apply()
        scope.$broadcast('$locationChangeSuccess');
        expect('/about').toBe(location.path());

        var activeHref = element.find('.active').html();
        expect('<a href="#/about">About</a>').toBe(activeHref);

        location.path('/');
        scope.$broadcast('$locationChangeSuccess');

        activeHref = element.find('.active').html();
        expect('<a href="#/">Home</a>').toBe(activeHref);
    }));
});
