'use strict';

describe('Controller: TeamctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('eplGlanceApp'));

  var TeamctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamctrlCtrl = $controller('TeamctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
