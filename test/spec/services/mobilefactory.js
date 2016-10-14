'use strict';

describe('Service: mobilefactory', function () {

  // load the service's module
  beforeEach(module('onlineShoppingApp'));

  // instantiate service
  var mobilefactory;
  beforeEach(inject(function (_mobilefactory_) {
    mobilefactory = _mobilefactory_;
  }));

  it('should do something', function () {
    expect(!!mobilefactory).toBe(true);
  });

});
