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
  let p1 = l1
  let p2 = l2
  let carry = 0
  let dummy = new ListNode(-1)
  let p = dummy
  while(p1 || p2 || carry) {
    let value = carry
    if (p1) {
      value += p1.val
      p1 = p1.next
    }
    if (p2) {
      value += p2.val
      p2 = p2.next
    }
    carry = (value > 9) ? 1 : 0
    const node = new ListNode(value % 10)
    p.next = node
    p = p.next
  }
  return dummy.next
};