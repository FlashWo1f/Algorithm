/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  // 神奇的思路
  // 1. 把每个节点后面都插入一个复制节点 且依次连接
  // 2. 把复制出来的 random 都指向 random.next
  // 3. 舍弃原节点
  let p = head
  while (p) {
    const temp = p.next
    p.next = new Node(p.val, temp, p.random)
    p = temp
  }
};
// @lc code=end

