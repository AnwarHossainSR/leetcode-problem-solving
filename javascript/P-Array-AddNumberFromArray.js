/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let len = l1.length > l2.length ? l1.length : l2.length;
  let sLen = l1.length < l2.length ? l1.length : l2.length;
  let carry = 0;
  let sum = [];
  for (let i = 0; i < len; i++) {
    if (i <= sLen - 1) {
      if (l1[i] + l2[i] > 9) {
        console.log("if 2");
        sum.push((l1[i] + l2[i] + carry) % 10);
        carry = 1;
      } else {
        console.log("else 2");
        sum.push(l1[i] + l2[i] + carry);
        carry = 0;
      }
    } else {
      if (l1[i] + carry > 9) {
        sum.push((l1[i] + carry) % 10);
        carry = 1;
      } else {
        sum.push(l1[i] + carry);
        carry = 0;
      }
    }
  }
  if (carry > 0) sum.push(carry);
  return sum;
};

addTwoNumbers([2, 4, 3], [5, 6, 4]);
