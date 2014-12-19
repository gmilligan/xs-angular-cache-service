/*

  App module creates separate cache services to enable discrete testing across modules.

*/
(function (window, angular) {  'use strict';

  angular
    .module('test', ['xs.cache'])
    .factory('cache1Svc', function(xsCacheFactory) {
      return xsCacheFactory('cache1', 500);
    })
    .factory('cache2Svc', function(xsCacheFactory) {
      return xsCacheFactory('cache2', 500);
    });

})(window, window.angular);


