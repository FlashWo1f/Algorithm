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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = []
  if (root === null) {
    return res
  }
  const queue = [root] // 队列，存储每一层的节点，null 为结束信号
  while (queue.length) {
    const level = []
    const len = queue.length // 记录当前层节点的长度 因为 for 过程中，queue 的len 会变化
    for (let i = 0; i < len; i++) {
      // 当前层次的某个节点
      const it = queue.shift()
      level.push(it.val)
      if (it.left) queue.push(it.left)
      if (it.right) queue.push(it.right)
    }
    res.push(level)
  }

  return res
};