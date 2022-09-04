/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  if (!head || !head.next) return head
  // 使用虚拟头节点
  let vir = new ListNode(null, head)
  let pre = vir
  const count = right - left + 1
  while(--left) {
    pre = pre.next
  }
  pre.next = reverseN(pre.next, count)
  return vir.next
};
function reverseN(head, n) {
  if (n === 1) return head
  let tail = head.next
  const p = reverseN(head.next, n - 1)
  head.next = tail.next
  tail.next = head
  return p 
}
// @lc code=end

