/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let length = nums.length;
  let uniqueVal;
  for (let i = 0; i < length; i++) {
    let unique = nums.filter((item) => item === nums[i]);
    if (unique.length === 1) {
      uniqueVal = unique[0];
      break;
    }
    continue;
  }
  return uniqueVal;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
