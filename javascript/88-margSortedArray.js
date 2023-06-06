/*
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1. 
*/

var merge = function (nums1, m, nums2, n) {
  var index = m + n - 1; //last index
  while (n > 0) {
    if (m > 0 && nums1[m - 1] > nums2[n - 1]) {
      nums1[index] = nums1[m - 1];
      m--;
    } else {
      nums1[index] = nums2[n - 1];
      n--;
    }
    index--;
  }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
