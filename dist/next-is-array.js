/*!
 * name: @feizheng/next-is-array
 * description: Array.isArray polly fill for next.
 * url: https://github.com/afeiship/next-is-array
 * version: 1.0.0
 * date: 2019-12-18 19:17:55
 * license: MIT
 */

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

//# sourceMappingURL=next-is-array.js.map
