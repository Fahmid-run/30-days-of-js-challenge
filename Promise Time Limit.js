/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

var timeLimit = function (fn, t) {
  return async function (...args) {
    const funcPromise = fn(...args);
    const timerPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });

    return Promise.race([funcPromise, timerPromise]);
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(50).catch(console.log); // "Time Limit Exceeded" at t=100ms
