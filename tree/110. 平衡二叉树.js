/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 一棵高度平衡二叉树定义为：

    一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const getHeight = (node) => {
    if (node === null) return 0
    const l = getHeight(node.left)
    const r = getHeight(node.right)
    if (l < 0 || r < 0) return -2
    // 左右子树高相差大于 1
    if (Math.abs(l - r) > 1) return -2
    return Math.max(l, r) + 1
  }

  return getHeight(root) >= 0
};

// 下面这个稍微好理解一些
var isBalanced = function (root) {
  let isBalanced = true
  function getDepth(node) {
    if (node === null) return 0

    const leftD = getDepth(node.left)
    const rightD = getDepth(node.right)
    if (Math.abs(leftD - rightD) > 1) {
      isBalanced = false
    }
    return Math.max(leftD, rightD) + 1
  }
  getDepth(root)
  return isBalanced
};