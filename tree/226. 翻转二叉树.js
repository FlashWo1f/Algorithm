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
var invertTree = function (root) {
  if (root === null) {
    return root
  }
  function reverse(root) {
    if (root === null) {
      return root
    }
    const temp = root.left
    root.left = root.right
    root.right = temp
    reverse(root.left)
    reverse(root.right)
  }
  reverse(root)
  return root
};
// -------------------------
var invertTree = function(root) {
  if (root === null) return root
  swap(root) 
  invertTree(root.left)
  invertTree(root.right)
  return root
};
function swap(node) {
  const { left, right } = node
  const temp = left
  node.left = right
  node.right = temp
}