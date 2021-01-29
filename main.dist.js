"use strict";

var add = function add() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (sum, el) {
    return sum + el;
  }, 0);
};

console.log(add(1, 2, 3));

//# sourceMappingURL=main.dist.js.map