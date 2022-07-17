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
 * @return {void} Do not return anything, modify root in-place instead.
 */

// 错误示范
var wrongAnswer = function (root) {
  // 题目说明了 return void
  if (!root) return null

  const left = wrongAnswer(root.left)
  const right = wrongAnswer(root.right)

  if (left) {
    // 左节点的 right 指向 right
    left.right = right
    root.right = left
  } else {
    // root 的 right 指向 right ！！！错误
    // 应该是 root 的最下层的 right 节点的right 指针指向 right
    // 如果是这样的话, 那么会丢失一段 节点
    root.right = right
  }
  // 左节点置为空
  root.left = null

  return root
};

var flatten = function (root) {
  if (root === null) return

  flatten(root.left)
  flatten(root.right)

  const left = root.left
  const right = root.right

  root.left = null
  root.right = left

  let p = root
  // 下沉到 root 最下面的 right 节点
  while(p.right) {
    p = p.right
  }
  p.right = right
}