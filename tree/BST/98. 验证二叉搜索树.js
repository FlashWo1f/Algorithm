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
var isValidBST = function (root) {
  if (!root) return true
  const l = root.left
  const r = root.right
  // root 的左边应该更小
  if (root.left != null && root.left.val >= root.val)
    return false
  // root 的右边应该更大
  if (root.right != null && root.right.val <= root.val)
    return false
  return isValidBST(root.left) && isValidBST(root.right)
}
// [5,4,6,null,null,3,7] -> 这种不通过，需要 root 的整个左子树都要小于 root.val 整个右子树都要大于 root.val

var isValidBST1 = function (root, min = null, max = null) {
  if (root === null) return true
  // 若 root.val 不符合 max 和 min 的限制，说明不是合法 BST
  if (min !== null && root.val <= min.val) return false
  if (max !== null && root.val >= max.val) return false
  // 限定左子树的最大值是 root.val，右子树的最小值是 root.val
  return isValidBST1(root.left, min, root)
    && isValidBST1(root.right, root, max)
}