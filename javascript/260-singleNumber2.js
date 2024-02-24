/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let length = nums.length;
  let uniqueVal = [];
  for (let i = 0; i < length; i++) {
    let unique = nums.filter((item) => item === nums[i]);
    if (unique.length === 1) {
      uniqueVal.push(unique[0]);
    }
    continue;
  }
  return uniqueVal;
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
