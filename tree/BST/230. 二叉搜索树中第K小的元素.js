/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let res
  let rank = 0
  function traverse(node) {
    if (node === null) {
      return
    }
    traverse(node.left)
    rank++
    if (rank === k) {
      res = node.val
      return
    }
    traverse(node.right)
  }

  traverse(root, k)
  return res
};