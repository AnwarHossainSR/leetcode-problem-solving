/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let count = n;

  function counter() {
    const currentCount = count;
    count += 1;
    return currentCount;
  }

  return counter;
};

const counter = createCounter(5);

console.log(counter()); // Output: 5
console.log(counter()); // Output: 6
console.log(counter()); // Output: 7
console.log(counter()); // Output: 8
console.log(counter()); // Output: 9
console.log(counter()); // Output: 10
