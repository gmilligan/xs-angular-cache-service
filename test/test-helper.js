// toggle log (reflection) of localStorage
var logOn = false;

var cacheClients = {

  loadAllData: function(cache1, cache2){
    this.loadStringData(cache1, cache2);
    this.loadNumericData(cache1, cache2);
    this.loadBooleanData(cache1, cache2);
    this.loadArrayData(cache1, cache2);
    this.loadObjectData(cache1, cache2);
  },
  loadObjectData: function(cache1, cache2){
    cache1.set('object1', {name: 'Cache 1 object'});
    cache2.set('object1', {name: 'Cache 2 object'});
  },
  loadArrayData: function(cache1, cache2){
    cache1.set('array1', [1,2,3,4,5]);
    cache2.set('array1', ['one','two','three','four','five']);
  },
  loadStringData: function (cache1, cache2){
    cache1.set('string1', 'cache 1, string 1');
    cache2.set('string1', 'cache 2, string 1');
    cache1.set('string2', 'cache 1, string 2');
    cache2.set('string2', 'cache 2, string 2');
  },
  loadNumericData: function (cache1, cache2){
    cache1.set('1', 1);
    cache1.set('2', 2);
    cache2.set('1', 1);
    cache2.set('2', 2);
  },
  loadBooleanData: function (cache1, cache2){
    cache1.set('true', true);
    cache1.set('false', false);
    cache2.set('true', true);
    cache2.set('false', false);
  },
  clearAll: function (cache1, cache2){
    cache1.removeAll();
    cache2.removeAll();
  },
  logLocalStorage: function (){
    if(logOn){
      for (key in window.localStorage) {
        console.log( key + ' -> ' + window.localStorage[key] );
      }
    }
  }
};

