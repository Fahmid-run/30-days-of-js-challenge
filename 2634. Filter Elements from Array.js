/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

function greaterThan(n) {
  if (!(n > 10)) {
    return false;
  }
  return true;
}

let arr = [10, 20, 30];

var filter = function (arr, fn) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let value = fn(arr[i], i);
    if (value == false) {
      continue;
    }
    result.push(arr[i]);
  }

  return result;
};
const newArray = filter(arr, greaterThan); // [20, 30]

console.log(newArray);
