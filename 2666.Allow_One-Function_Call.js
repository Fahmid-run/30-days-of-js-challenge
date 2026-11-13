/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let count = 0;
  return function (...args) {
    if (count >= 1) {
      return undefined;
    }
    count++;
    return fn(...args);
  };
};

let fn = (a, b, c) => a * b * c;
let onceFn = once(fn);
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(5, 7, 4));
console.log(onceFn(2, 4, 4));

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
