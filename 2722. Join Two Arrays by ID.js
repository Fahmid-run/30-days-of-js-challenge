/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const combinedArray = arr1.concat(arr2);
  const merged = {};

  combinedArray.forEach((obj) => {
    if (!merged[obj.id]) {
      merged[obj.id] = { ...obj };
    } else {
      merged[obj.id] = { ...merged[obj.id], ...obj };
    }
  });

  return Object.values(merged);
};

let arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
let arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];

console.log(join(arr1, arr2));
