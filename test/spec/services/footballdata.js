'use strict';

describe('Service: footballData', function () {

  // load the service's module
  beforeEach(module('eplGlanceApp'));

  // instantiate service
  var footballData;
  beforeEach(inject(function (_footballData_) {
    footballData = _footballData_;
  }));

  it('should do something', function () {
    expect(!!footballData).toBe(true);
  });

});
