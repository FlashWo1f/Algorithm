/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (head === null) return null
  let pre = head, cur = head
  let miss = null
  while(cur && cur.next) {
    pre = pre.next
    cur = cur.next.next
    if (pre === cur) {
      miss = head
      while(pre !== miss) {
        pre = pre.next
        miss = miss.next
      }
      return pre
    }
  }
  return null
};
// @lc code=end

