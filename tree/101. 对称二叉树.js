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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function isSameNode(A, B) {
    // 都为 null
    if (A === B) return true
    // 其中一个为 null
    if (!A || !B) return false
    if (A.val === B.val && isSameNode(A.left, B.right) && isSameNode(A.right, B.left)) return true
    return false
  }
  return isSameNode(root.left, root.right)
};