/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = []
  const round = []
  function findPath(node, sum = 0) {
    if (!node) return

    const val = node.val
    round.push(val)
    sum += val
    if (!node.left && !node.right) {
      if (sum === targetSum) {
        // 这里没用 Array.from 折磨我好久... 没注意这个 QAQ 我好蠢
        result.push(Array.from(round))
        console.log('summm', result)
      }
    }
    // console.log('/..', val, round)
    findPath(node.left, sum)
    findPath(node.right, sum)
    // 这条路径不通的话，要把值减掉去，换另一台路径
    sum -= val
    round.pop()
  }
  findPath(root)
  console.log(result)
  return result
};
