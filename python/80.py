from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) <= 2:
            return len(nums)

        index = 2  # Start from the third element
        for i in range(2, len(nums)):
            if nums[i] != nums[index - 2]:
                nums[index] = nums[i]
                index += 1

        return index
    
obj = Solution()
print(obj.removeDuplicates([1,1,1,2,2,3]))
