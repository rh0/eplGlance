'use strict';

describe('Controller: SchedCtrl', function () {

  // load the controller's module
  beforeEach(module('eplGlanceApp'));

  var SchedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SchedCtrl = $controller('SchedCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
