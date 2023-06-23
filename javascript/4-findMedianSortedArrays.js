/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let nums = nums1.concat(nums2);
  nums.sort((a, b) => a - b);
  let len = nums.length;
  let mid = Math.floor(len / 2);
  return len % 2 === 0 ? (nums[mid] + nums[mid - 1]) / 2 : nums[mid];
};

findMedianSortedArrays([1, 2], [3, 4]);
