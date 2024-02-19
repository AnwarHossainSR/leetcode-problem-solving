from typing import ListNode
# merge two sorted linked


class Solution:
    def mergeTwoLists(self, l1, l2):

        if l1 == None:
            return l2
        if l2 == None:
            return l1

        head = ListNode(0)
        p = head
        while l1 != None and l2 != None:
            if l1.val <= l2.val:
                p.next = ListNode(l1.val)
                p = p.next
                l1 = l1.next
            else:
                p.next = ListNode(l2.val)
                p = p.next
                l2 = l2.next

        if l1 == None:
            p.next = l2
        if l2 == None:
            p.next = l1

        return head.next


s = Solution()
l1 = ListNode(1)
l1.next = ListNode(2)
l1.next.next = ListNode(4)
l2 = ListNode(1)
l2.next = ListNode(2)
l2.next.next = ListNode(3)
print(s.mergeTwoLists(l1, l2))
