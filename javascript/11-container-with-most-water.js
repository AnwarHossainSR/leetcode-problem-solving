/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    // Calculate the area of the current container
    const currentArea = Math.min(height[left], height[right]) * (right - left);

    // Update the maximum area
    maxArea = Math.max(maxArea, currentArea);

    // Move the pointer with the smaller height
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
