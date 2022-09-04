/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
var rotateRight = function(head, k) {
  if (!head || !head.next) return head 
  let preTail = head, curTail = head, length = 1
  while(preTail.next) {
    preTail = preTail.next
    length++
  }
  preTail.next = head
  // 取余
  let move = length - (k % length)
  while (--move) {
    curTail = curTail.next
  }
  let result = curTail.next
  curTail.next = null
  return result
};
// @lc code=end

