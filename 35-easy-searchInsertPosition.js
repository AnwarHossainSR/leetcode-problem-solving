const searchInsert = (nums, target) => {
  let isFound = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      isFound = true;
      return i;
    }
  }
  if (!isFound) {
    nums.push(target);
    nums.sort((a, b) => a - b);
    return nums.indexOf(target);
  }
};

console.log(searchInsert([1, 3, 5, 6], 7)); // 2
