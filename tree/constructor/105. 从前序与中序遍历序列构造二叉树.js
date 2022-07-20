/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null
  const rootVal = preorder[0]
  const rootIdx = inorder.findIndex(v => v === rootVal)
  const root = new TreeNode(rootVal)
  root.left = buildTree(preorder.slice(1, rootIdx + 1), inorder.slice(0, rootIdx))
  root.right = buildTree(preorder.slice(rootIdx + 1), inorder.slice(rootIdx + 1))

  return root
};