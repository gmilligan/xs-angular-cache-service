'use strict';

describe('Cache Factory', function() {
  var cacheSvc;
  beforeEach(module('xs.cache'));
  beforeEach(inject(function (xsCacheFactory) {
    cacheSvc = xsCacheFactory;
  }));

  describe('xs.cache service', function () {
    it('should create cache service', function () {
      expect(cacheSvc).toBeDefined();
    });
  });

});