// 有一个单链表的 head，我们想删除它其中的一个节点 node。

// 给你一个需要删除的节点 node 。你将 无法访问 第一个节点  head。

// 链表的所有值都是 唯一的，并且保证给定的节点 node 不是链表中的最后一个节点。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  // 值变成下一个
  node.val = node.next.val
  // 再把下一个删掉
  node.next = node.next.next
};