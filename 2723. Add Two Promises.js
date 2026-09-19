/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  let sum = 0;
  return Promise.all([promise1, promise2]).then(([val1, val2]) => {
    sum = val1 + val2;
    return sum;
  });
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
