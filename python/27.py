from typing import List


class Solution:
    """ """

    def removeElement(self, nums: List[int], val: int) -> int:
        """

        :param nums: List[int]:
        :param val: int:

        """
        if nums == []:
            return 0

        i = 0
        while i < len(nums):
            if nums[i] == val:
                nums.pop(i)
            else:
                i += 1
        return len(nums)


s = Solution()
print(s.removeElement([3, 2, 2, 3], 3))  # 2
