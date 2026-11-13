/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    let res = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      const func = functions[i];
      res = func(res);
    }

    return res;
  };
};

const fn = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
fn(1); // 9
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
