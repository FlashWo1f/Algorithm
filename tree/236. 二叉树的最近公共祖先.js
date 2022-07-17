/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) return null
  // 一个节点是否为另一个节点的祖先：a 节点的左右某节点等于 b节点
  if (root === p || root === q) return root

  // root 节点的左子树包含了 p 或者 q
  const leftLCA = lowestCommonAncestor(root.left, p, q)
  // root 节点的右子树包含了 p 或者 q
  const rightLCA = lowestCommonAncestor(root.right, p, q)

  // 如果二者都存在 => root 的左右子树分别有 p 和 q => LCA == root
  if (leftLCA && rightLCA) return root 
  if (!leftLCA && !rightLCA) return null
  // 只存在一个，那么就说明这节点就是 LCA
  return leftLCA || rightLCA
};