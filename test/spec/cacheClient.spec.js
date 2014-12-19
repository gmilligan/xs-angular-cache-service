'use strict';

describe('Cache Client Tests', function() {
  var cache1, cache2;

  beforeEach(module('test'));
  beforeEach(inject(function (cache1Svc, cache2Svc) {
    cache1 = cache1Svc;
    cache2 = cache2Svc
  }));

  describe('instantiation tests', function() {

    it('should create cache1 & cache2', function () {
      expect(cache1).toBeDefined();
      expect(cache2).toBeDefined();
    });
    it('should have all methods for both cache services', function () {
      expect(cache1.set).toBeDefined();
      expect(cache1.get).toBeDefined();
      expect(cache1.remove).toBeDefined();
      expect(cache1.removeAll).toBeDefined();

      expect(cache2.set).toBeDefined();
      expect(cache2.get).toBeDefined();
      expect(cache2.remove).toBeDefined();
      expect(cache2.removeAll).toBeDefined();
    });
  });

  describe('data type support tests', function() {
    afterEach(function () {
      //cacheClients.clearAll(cache1, cache2);
    });

    it('should store object data in both caches', function () {

      cacheClients.loadObjectData(cache1, cache2);

      expect(cache1.get('object1').name).toBe('Cache 1 object');
      expect(cache2.get('object1').name).toBe('Cache 2 object');
    });

    it('should store object data in both caches', function() {

      cacheClients.loadObjectData(cache1, cache2);

      expect(cache1.get('object1').name).toBe('Cache 1 object');
      expect(cache2.get('object1').name).toBe('Cache 2 object');
    });

    it('should store array data in both caches', function() {

      cacheClients.loadArrayData(cache1, cache2);

      expect(cache1.get('array1')[1]).toBe(2);
      expect(cache2.get('array1')[1]).toBe('two');
    });

    it('should store string data to both caches', function() {

      cacheClients.loadStringData(cache1, cache2);

      expect(cache1.get('string1')).toBe('cache 1, string 1');
      expect(cache2.get('string1')).toBe('cache 2, string 1');

      expect(cache1.get('string2')).toBe('cache 1, string 2');
      expect(cache2.get('string2')).toBe('cache 2, string 2');
    });

    it('should store numeric data to both caches', function() {

      cacheClients.loadNumericData(cache1, cache2);

      expect(cache1.get('1')).toBe(1);
      expect(cache2.get('2')).toBe(2);

      expect(cache1.get('1')).toBe(1);
      expect(cache2.get('2')).toBe(2);
    });

    it('should store boolean data to both caches', function() {

      cacheClients.loadBooleanData(cache1, cache2);
      cacheClients.logLocalStorage();

      expect(cache1.get('true')).toBe(true);
      expect(cache1.get('false')).toBe(null);

      expect(cache2.get('true')).toBe(true);
      expect(cache2.get('false')).toBe(null);
    });

  });

  describe('data removal tests', function() {
    afterEach(function() {
      cacheClients.clearAll(cache1, cache2);
    });

    it('should remove specific data (sub-key) from one cache, but none from the other', function() {

      cacheClients.loadAllData(cache1, cache2);

      expect(cache1.get('array1')[1]).toBe(2);

      cache1.remove('array1');
      expect(cache1.get('array1')).toBeNull();
      expect(cache1.get('object1').name).toBe('Cache 1 object');
      expect(cache2.get('object1').name).toBe('Cache 2 object');
    });

    it('should remove all data from one cache but not other', function() {

      cacheClients.loadAllData(cache1, cache2);

      cache1.removeAll();
      expect(cache1.get('array1')).toBeNull();
      expect(cache1.get('array1')).toBeNull();

      expect(cache2.get('object1').name).toBe('Cache 2 object');
      expect(cache2.get('array1')[1]).toBe('two');
    });

    it('should clear all data for one cache but not the other', function() {

      cacheClients.loadAllData(cache1, cache2);

      cache1.removeAll();

      expect(cache2.get('array1')[1]).toBe('two');
      expect(cache2.get('object1').name).toBe('Cache 2 object');
    });

  });

});


