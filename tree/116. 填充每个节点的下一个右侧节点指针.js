/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) return null
  traverse(root.left, root.right)
  return root
};

function traverse(node1, node2) {
  if (node1 === null || node2 === null) return

  // 将传入的两个节点串起来
  node1.next = node2

  // 相同父节点的两个子节点
  traverse(node1.left, node1.right)
  traverse(node2.left, node2.right)
  // 跨越父节点
  traverse(node1.right, node2.left)
}