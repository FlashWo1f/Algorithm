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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let sum = 0
  function traverse(node) {
    if (node === null) return
    // 灵魂是这里的 right 和 left 对调
    traverse(node.right)
    sum += node.val
    console.log(node.val, sum)
    node.val = sum
    traverse(node.left)
  }

  traverse(root)
  return root
};