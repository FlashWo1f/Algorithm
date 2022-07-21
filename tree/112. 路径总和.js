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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null)  return false
  
  let curSum = 0
  let flag = false
  const traverse = (node) => {
    if (node === null) return 0
    curSum += node.val
    if (node.left === null && node.right === null && curSum === targetSum) {
      flag = true
    }
    traverse(node.left)
    traverse(node.right)
    // 这条路径不通的话，要把值减掉去，换另一台路径
    curSum -= node.val
  }

  traverse(root)
  return flag
};

// 分治方法实现
function _hasPathSum(root, targetSum) {
  if (root === null)  return false

  if (root.left === null && root.right === null) return root.val === targetSum 
  return _hasPathSum(root.left, targetSum - root.val) || _hasPathSum(root.right, targetSum - root.val)
}