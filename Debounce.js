/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    return new Promise((res, rej) => {
      timer = setTimeout(() => {
        try {
          res(fn(...args));
        } catch (error) {
          rej(error);
        }
      }, t);
    });
  };
};

const log = debounce(console.log, 100);
log("Hello");
log("Hello");
log("Hello");
log("Hello");
log("Hello");
log("Hello");
log("Hello");
log("Hello");
/**
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
