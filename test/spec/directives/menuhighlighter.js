'use strict';

describe('Directive: menuHighlighter', function() {

    // load the directive's module
    beforeEach(module('angularNewProjectApp'));

    var element,
        scope, rootScope,
        location;

    beforeEach(inject(function($rootScope, $location) {
        rootScope = $rootScope;
        scope = $rootScope.$new();
        location = $location;
    }));

    it('should make hidden element visible', inject(function($compile) {

        // location.path('/new/path');
        // rootScope.$apply();
        // expect(location.path()).toBe('/new/path');

        var menuHtml = ['<ul menu-highlighter>',
            '<li class="active"><a href="#/">Home</a></li>',
            '<li><a href="#/about">About</a></li>',
            '<li><a href="#/car">Car</a></li>',
            '<li><a href="#/file">File</a></li>', '</ul>'
        ].join('');
        //console.log(menuHtml);
        element = angular.element(menuHtml);
        element = $compile(element)(scope);

        location.path('#/about');
        rootScope.$apply();
        expect(location.path()).toBe('/#/about');

        // console.log(element.find('.active').html());

// exp
ect('aa').toBe(element);

        // expect(element.text()).toBe('this is the menuHighlighter directive');
    }));
});
