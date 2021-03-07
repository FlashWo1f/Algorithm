/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) return head 
  let tail = head.next
  const p = reverseList(head.next)
  // p 始终为 这条原始链表的最后一个节点(反转后的head节点)
  // tail.next 也始终为 null  所以这道题 tail.next 可以用 null 代替
  head.next = tail.next
  tail.next = head
  return p
};
// @lc code=end

