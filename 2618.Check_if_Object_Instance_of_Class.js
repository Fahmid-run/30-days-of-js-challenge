/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (obj == null) return false;
  if (obj.constructor === classFunction) return true;
  return checkIfInstanceOf(Object.getPrototypeOf(obj), classFunction);
};

class Animal {}
class Dog extends Animal {}
class AnotherAniamal extends Dog {}

// checkIfInstanceOf(new AnotherAniamal(), Animal);

// checkIfInstanceOf(Date, Date); // true
console.log(checkIfInstanceOf(5n, Object)); // true

/**
 */
