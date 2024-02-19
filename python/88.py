from typing import List


class Solution:
    """ """
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """

        :param nums1: List[int]:
        :param m: int:
        :param nums2: List[int]:
        :param n: int:

        """
        nums1[m:] = nums2[:]
        nums1.sort()
        return nums1


s = Solution()
