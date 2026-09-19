/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  return this.length ? this.reverse()[0] : -1;
};

let test = ["a", "b"];

console.log(test.last());

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
