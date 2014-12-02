#xs-angular-cache-service
A simple angular cache service. Persists state & data using $cacheFactory (for session) & localStorage (between sessions).
Uses module keys and section subkeys enable hierarchical store logic.  

###Table of Contents 
######Usage

* [HTML5 Assumed](#assumption)
* [Module Definition](#module-definition)
* [Create Cache Services](#create-cache-services)
* [Using Cache Services](#using-cache-services)
* [Local Storage](#local-storage)

----

<a name="assumption"></a>
###HTML5 Assumed
HTML5 is assumed. This cache service uses `localStorage` for inter-session storage.
For a while now, my web apps have been mobile in nature, where HTML5 is mostly assured.

<a name="module-definition"></a>
###Module Definition
#####Include the module into your project
```js

    <script src="/service/xs-angular-cache-service.js"></script>

    angular.module('app', ['xs.cache'])

```  
----
<a name="create-cache-services"></a>
###Create Application Caches Services 
Create a cache service for each module that requires a cache 

Syntax:
```js

    // create cache service for specific app modules (image, print, report)
    angular
        .module('app')
        .factory('imageCacheSvc', function(xsCacheFactory) {
            return xsCacheFactory('image', 500);
        })
        .factory('printCacheSvc', function(xsCacheFactory) {
            return xsCacheFactory('print', 500);
        })
        .factory('reportCacheSvc', function(xsCacheFactory) {
            return xsCacheFactory('report', 500);
        });

```
----
<a name="using-cache-services"></a>
###Using Cache Service
Usage of cache service within a controller  

Syntax:
```js

  // simplified controller usage
  // inject cache service
  angular
    .module('app.print')
    .controller('PrintCtrl', ['printCacheSvc', PrintCtrl]);
  
  function PrintCtrl( printCacheSvc ){

    // cache key definitions
    var STATUS_KEY = 'status';
    var LOCATION_KEY = 'location';
    var SEARCH_KEY = 'key';
    
    // write to the status cache
    vm.gotStatusChange = function() {
      // stop gap to prevent cache overwrite on first void change
      if(vm.selected.status.length !== 0){
        printCacheSvc.set(STATUS_KEY, vm.selected.status);
      }
    };
    
    // read from the status cache
    vm.selected.status = printCacheSvc.get(STATUS_KEY);
    
    // read from location cache
    vm.selected.status = printCacheSvc.get(LOCATION_KEY);
  }
    
```
<a name="local-storage"></a>
###Local Storage Definition
In Local Storage - different cache services store their info (as follows) for "status" keys on "print" & "reconcile" modules:

  
Key                | Value                       
------------------ | ----------------------------                   
print.status       | ['In Storage','On Display'] 
reconcile.status   | ['On Display']                  



----
#####Thoughts:
* xsCacheFactory uses Angular's minimal $cacheFactory. This takes place of session storage (in days of yore).    
 
