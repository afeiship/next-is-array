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
