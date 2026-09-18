/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("hi");
    }, millis);
  });
}

sleep(2000);

/** 
 * let t = Date.now()
 * sleep(100).then(() Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

Note that minor deviation from millis in the actual sleep duration is acceptable.$0=> console.log(Date.now() - t)) // 100
 */
