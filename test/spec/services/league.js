'use strict';

describe('Service: league', function () {

  // load the service's module
  beforeEach(module('eplGlanceApp'));

  // instantiate service
  var league;
  beforeEach(inject(function (_league_) {
    league = _league_;
  }));

  it('should do something', function () {
    expect(!!league).toBe(true);
  });

});
