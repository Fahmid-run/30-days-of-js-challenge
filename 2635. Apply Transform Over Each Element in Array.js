/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function plusone(n) {
  return n;
}

let arr = [1, 2, 3];
var map = function (arr, fn) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }

  return result;
};
const newArray = map(arr, plusone);

console.log(newArray);
