(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.isArray =
    Array.isArray ||
    function(inObj) {
      return inObj instanceof Array;
    };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isArray;
  }
})();
