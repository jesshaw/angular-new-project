'use strict';

describe('Controller: CarCtrl', function() {

    // load the controller's module

    beforeEach(module('angularNewProjectApp'));

    var CarCtrl,
        carServiceMock;


    beforeEach(function() {
        module('angularNewProjectApp');

        // Provide will help us create fake implementations for our dependencies
        module(function($provide) {

            // Fake carService Implementation returning a promise
            $provide.value('carServiceMock', {
                getCars: function() {
                    return {
                        then: function(callback) {
                            return callback(["aa", "bb", "cc"]);
                        }
                    };
                }
            });

            return null;
        });
    });

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, _carServiceMock_) {

        CarCtrl = $controller('CarCtrl', {
            carService: _carServiceMock_
        });
    }));

    it('should attach a list of awesomeThings to the ctroller', function() {
        expect(CarCtrl.awesomeThings.length).toBe(3);
        expect(CarCtrl.awesomeThings[0]).toBe("aa");
    });
});
