/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let i = 0;
  return function () {
    let num = n + i;
    i++;
    return num;
  };
};

const counter = createCounter(10);

console.log(counter());
console.log(counter());

console.log(counter());

console.log(counter());

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
