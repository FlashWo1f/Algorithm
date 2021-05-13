/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  let ans = [], level = 0
  function lo(root, ans, level) {
      if (root === null) return;
      if (Array.isArray(ans[level])) {
          ans[level].push(root.val)
      } else {
          ans[level] = [root.val]
      }
      lo(root.left, ans, level + 1)
      lo(root.right, ans, level + 1)
  }
  lo(root, ans, level)
  return ans
};