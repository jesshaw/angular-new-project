'use strict';

describe('Directive: menuHighlighter', function () {

  // load the directive's module
  beforeEach(module('angularNewProjectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<menu-highlighter></menu-highlighter>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the menuHighlighter directive');
  }));
});
