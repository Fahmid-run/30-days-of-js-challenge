/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => {
    fn(a) - fn(b);
  });
};

console.log(
  sortBy([1, 2, 23, 1, 2322, 4], (a, b) => {
    return b - a;
  }),
);
