'use strict';

xdescribe('Controller: FileCtrl', function() {

    // load the controller's module
    beforeEach(module('angularNewProjectApp'));

    var FileCtrl,
        fileServiceMock;

    beforeEach(function() {
        module('angularNewProjectApp');

        // Provide will help us create fake implementations for our dependencies
        module(function($provide) {

            // Fake carService Implementation returning a promise
            $provide.value('fileServiceMock', {
                uploadFiles: function() {
                    return {
                        then: function(callback, callback2, callback3) {
                            return callback({
                                status: 200,
                                data: "smalljpg"
                            }), callback2({
                                status: 200,
                                data: "sdfas"
                            }), callback3({
                                progress: 100
                            });
                        }
                    };
                }
            });

            return null;
        });
    });

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, _fileServiceMock_) {
        // scope = $rootScope.$new();
        FileCtrl = $controller('FileCtrl', {
            fileService: _fileServiceMock_
                // place here mocked dependencies
        });
    }));

    it('should attach a list of awesomeThings to the scope', function() {
        var upFile = {
            upload: fileServiceMock.uploadFiles(this)
        };
        FileCtrl.uploadFiles(upFile, null);
        expect(FileCtrl.f.result).toBe("smalljpg");
    });
});
