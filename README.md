#xs-angular-cache-service
A simple angular cache service, persists state and/or data using $cacheFactory (for session) & localStorage (between sessions).
This cache service extends angular's `$cacheFactory`, by using using HTML5 localStorage to persist data across sessions. 
Uses serialization and deserialization to store JavaScript objects objects into to the cache.   
It uses module keys and section sub-keys enable a hierarchical logic store.

###Table of Contents 
######Usage

* [HTML5 Assumed](#assumption)
* [Demo](#demo)
* [Module Definition](#module-definition)
* [Create Cache Services](#create-cache-services)
* [Using Cache Services](#using-cache-services)
* [Methods](#methods)
* [Local Storage](#local-storage)

----

<a name="assumption"></a>
###HTML5 Assumed
HTML5 is assumed. This cache service uses HTML5's `localStorage` for inter-session storage.
It is accepted, there are environments where folks are forced to run older browsers. 
This module is not for those cases.
It was really designed with mobile targets in mind, but works well in all modern browsers. 

<a name="demo"></a>
###Demo
You can simply run a [online version](http://common.xybersolve.com/xs-angular-cache-service/demo/xs-angular-demo.html) of cache demo, or  



####Test, Build & Run  
To test, build & run a local copy: 

1) Clone or download the project from [Github](https://github.com/gmilligan/xs-angular-cache-service). 
2) Run `npm install`. 
3) Go to the `demo` directory 
4) Run `xs-angular-cache-demo.html`.

The `npm install` process will:

* Install all required files (node, angular & bootstrap modules)
* Run tests on the source (jshint and karma/jasmine)
* "Build" the source (minify)


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

<a name="methods"></a>
###Methods
Cache clients have use of the following methods: 

 Method              | Functionality
---------------------|----------------------------
`set(key, item)`     | Store data (Boolean, Numeric, String, Array or Object) using cache key. 
`get(key)`           | Retrieve data stored on given cache key.
`remove(key)`        | Remove keyed item from cache and local storage.  
`removeAll()`        | Remove all items from this cache and local storage.

----

<a name="local-storage"></a>
###Local Storage Definition
In Local Storage - different cache services store their info (as follows) for "status" keys on "print" & "reconcile" modules:
  
Key                | Value                       
------------------ | ----------------------------                   
print.status       | ['In Storage','On Display'] 
reconcile.status   | ['On Display']                  

 
