/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  let key;
  let object = {};
  for (let index = 0; index < this.length; index++) {
    const element = this[index];

    key = fn(element);
    if (object.hasOwnProperty(key)) {
      object[key].push(element);
    } else {
      object[key] = [];

      object[key].push(element);
    }
  }
  return object;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].groupBy(String));
