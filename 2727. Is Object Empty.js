/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  return JSON.stringify(obj) === "{}" || JSON.stringify(obj) === "[]";
};

let test = { name: "testt" };

let test2 = [121212, 12];

console.log(isEmpty(test));
