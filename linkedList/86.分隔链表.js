/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  // let i = 0, value = null, curNode = head
  // while(i < x && curNode.next) {
  //   i++
  //   curNode = curNode.next
  //   value = curNode.val
  // }
  // 利用两个头指针 一个串起 小于 x 值的节点  另一个串起 大于的
  let r1 = new ListNode(null, null), 
  r2 = new ListNode(null, null),
  p = head,
  q,
  p1 = r1,
  p2 = r2
  // console.log('@@@', value, x)
  while(p){
    q = p.next
    if (p.val < x) {
      p.next = null
      p1.next = p
      p1 = p
    } else {
      p.next = null
      p2.next = p
      p2 = p
    }
    p = q
  }
  p1.next = r2.next
  return r1.next
};
// @lc code=end

