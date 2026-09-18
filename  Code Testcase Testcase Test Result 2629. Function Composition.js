/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    let reversedArr = functions.reverse();

    reversedArr.forEach((fn, i) => {
      x = fn(x);
    });

    return x;
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
// fn(4); // 9
console.log(fn(4));
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
