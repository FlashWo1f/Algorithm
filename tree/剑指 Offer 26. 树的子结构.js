/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (A === null) return false
  if (B === null) return false
  if (A.val === B.val && isMatch(A, B)) return true
  return isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

function isMatch(A, B) {
  // A包含B
  if (B === null) return true
  if (A === null) return false
  if (A.val !== B.val) return false
  return isMatch(A.left, B.left) && isMatch(A.right, B.right)
}