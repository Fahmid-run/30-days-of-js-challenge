/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  let resolved = new Array(functions.length);
  let completed = 0;

  return new Promise(async (res, rej) => {
    if (functions.length == 0) {
      res(resolved);
    }

    functions.forEach((fn, i) => {
      fn()
        .then((value) => {
          resolved[i] = value;
          completed++;

          if (functions.length == completed) {
            res(resolved);
          }
        })
        .catch((err) => rej(err));
    });
  });
};

const promise = promiseAll([() => new Promise((res) => res(42))]);
promise.then((e) => {
  console.log(e);
}); // [42]
/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
