from typing import List
#unique bumber of occurrances

class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        d = {}
        for i in arr:
            if i in d:
                d[i] +=1
            else:
                d[i] = 1
        s = set()
        for i in d:
            if d[i] in s:
                return False
            else:
                s.add(d[i])
        return True
    

s = Solution()
print(s.uniqueOccurrences([1,2,2,1,1,3]))