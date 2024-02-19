from collections import defaultdict


class Solution:
    """ """

    def groupAnagrams(self, strs):
        """

        :param strs:

        """
        if not strs:
            return [[""]]
        if len(strs) == 1:
            return [strs]

        groups_dict = defaultdict(list)

        for value in strs:
            sorted_value = "".join(sorted(value))
            groups_dict[sorted_value].append(value)

        return list(groups_dict.values())


# calling
s = Solution()
print(s.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
