const mergeTwoLists = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
  l2.next = mergeTwoLists(l1, l2.next);
  return l2;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
