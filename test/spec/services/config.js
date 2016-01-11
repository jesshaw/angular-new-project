'use strict';

describe('Service: config', function() {

    // load the service's module
    beforeEach(module('angularNewProjectApp'));

    // instantiate service
    var config;
    beforeEach(inject(function(_config_) {
        config = _config_;
    }));

    it('should do something', function() {
        console.log(config);
        expect(!!config).toBe(true);
    });

});
