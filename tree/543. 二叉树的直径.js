/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//  给定二叉树

//        1
//      /   \
//     2     3
//    / \     
//   4   5    
// 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0
  maxDepth(root)
  function maxDepth(root) {
    if (root === null) return 0
    const leftMaxDeep = maxDepth(root.left)
    const rightMaxDeep = maxDepth(root.right)
    maxDiameter = Math.max(maxDiameter, leftMaxDeep + rightMaxDeep)
    return Math.max(leftMaxDeep, rightMaxDeep) + 1
  }
  return maxDiameter
};