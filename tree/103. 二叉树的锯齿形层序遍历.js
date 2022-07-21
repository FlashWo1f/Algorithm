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
var zigzagLevelOrder = function (root) {
  const res = []
  if (!root) return res
  let leftToRight = true
  // 注释见 102
  const queue = [root]
  while (queue.length) {
    const len = queue.length
    const levelNode = []
    for (let i = 0; i < len; i++) {
      const it = queue.shift()
      // 其实遍历顺序还是按照正常顺序，只不过一个是插到前面，一个是后面而已
      if (leftToRight) {
        levelNode.push(it.val)
      } else {
        levelNode.unshift(it.val)
      }
      // !leftToRight && leftToRight.reverse()
      if (it.left) queue.push(it.left)
      if (it.right) queue.push(it.right)
    }
    leftToRight = !leftToRight
    res.push(levelNode)
  }

  return res
};