/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function (x) {
//   return Math.floor(Math.sqrt(x));
// };

var mySqrt = function (x) {
  let i = 1;
  let sqr = i * i;

  while (x >= sqr) {
    i++;
    sqr = i * i;
  }
  return i - 1;
};

console.log(mySqrt(8));
