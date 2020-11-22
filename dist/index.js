/*!
 * name: @jswork/next-is-array
 * description: Array.isArray polly fill for next.
 * homepage: https://github.com/afeiship/next-is-array
 * version: 1.0.0
 * date: 2020-11-22 17:45:08
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.isArray =
    Array.isArray ||
    function (inObj) {
      return inObj instanceof Array;
    };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isArray;
  }
})();
