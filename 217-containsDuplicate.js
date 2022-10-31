// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function (nums) {
//   let unique = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (i == 0) {
//       unique.push(nums[i]);
//     } else {
//       if (unique.includes(nums[i])) {
//         return true;
//       } else {
//         unique.push(nums[i]);
//       }
//     }
//   }
//   return false;
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let unique = new Set(nums);
  return unique.size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 4]));
