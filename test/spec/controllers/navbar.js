'use strict';

describe('Controller: NavbarCtrl', function() {

    // load the controller's module
    beforeEach(module('angularNewProjectApp'));

    var NavbarCtrl,
        scope,
        config;


    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        NavbarCtrl = $controller('NavbarCtrl', {
            $scope: scope
                // place here mocked dependencies
        });
    }));

    it('should attach a list of awesomeThings to the scope', function() {
        // console.log(NavbarCtrl.isCollapsed);
        // expect(NavbarCtrl.awesomeThings.length).toBe(3);
    });
});