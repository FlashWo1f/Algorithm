/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let vir = new ListNode(null, head)
  let p = vir, q = p.next
  while((p.next = __reverseN(q, k)) !== q) {
    p = q
    q = p.next
  }
  return vir.next
};

function __reverseN(head, k) {
  let cur = head
  let count = k
  while (--k && cur) {
    cur = cur.next
  }
  return cur ? reverseN(head, count) : head
}

function reverseN(head, n) {
  if (n === 1 || !head.next) return head
  const p = reverseN(head.next, n - 1)
  let tail = head.next
  head.next = tail.next
  tail.next = head
  return p 
}
// @lc code=end

