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
 * @return {number}
 */
var countNodes = function (root) {
  // O(logn * logn)
  if (root === null) return 0
  let hl = 0, hr = 0
  let lnode = root
  let rnode = root
  while(lnode) {
    lnode = lnode.left
    hl++
  }
  while(rnode) {
    rnode = rnode.right
    hr++
  }
  // 一颗完全二叉树的两个子树，至少有一颗是满二叉树 所以时间复杂度能下来
  if (hl == hr) {
    return Math.pow(2, hl) - 1
  }
  return countNodes(root.left) + countNodes(root.right) + 1
};