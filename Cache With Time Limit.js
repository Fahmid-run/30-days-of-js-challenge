var TimeLimitedCache = function () {
  this.cache = {};
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const exists = this.cache.hasOwnProperty(key);
  if (exists) {
    clearTimeout(this.cache[key].timer);
  }

  let timer = setTimeout(() => {
    delete this.cache[key];
  }, duration);

  this.cache[key] = { value, timer };

  return exists;
};

TimeLimitedCache.prototype.get = function (key) {
  if (this.cache[key]) {
    return this.cache[key].value;
  }
  return -1;
};

TimeLimitedCache.prototype.count = function () {
  return Object.getOwnPropertyNames(this.cache).length;
};

const timeLimitedCache = new TimeLimitedCache();
// timeLimitedCache.set(1, 42, 1000); // false

console.log(timeLimitedCache.set(1, 42, 1000));
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1

console.log(timeLimitedCache.set(1, 50, 120));
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.get(1)); // 42
