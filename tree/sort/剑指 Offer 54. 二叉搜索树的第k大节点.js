/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var countNodes = function (root) {
  if (root === null) return 0
  return countNodes(root.left) + countNodes(root.right) + 1
};
var kthLargest = function (root, k) {
  const count = countNodes(root.right)
  if (count + 1 > k) return kthLargest(root.right, k)
  if (count + 1 === k) return root.val
  return kthLargest(root.left, k - count - 1)
};

// 方法二：构建一个中序遍历  塞到数组中  倒数第 k 个就是了