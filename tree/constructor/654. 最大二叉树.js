/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (!nums.length) return null
  let maxIdx = 0
  for (const i in nums) {
    // 这里的 i 是字符串 .... 导致nums.slice(maxIdx + 1) 为空...
    if (nums[i] > nums[maxIdx]) maxIdx = i * 1
  }
  const root = new TreeNode(nums[maxIdx])
  const left = constructMaximumBinaryTree(nums.slice(0, maxIdx))
  const right = constructMaximumBinaryTree(nums.slice(maxIdx + 1))
  // console.log(nums,maxIdx, nums.slice(0, maxIdx), nums.slice(maxIdx + 1))
  root.left = left
  root.right = right
  return root
};
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

constructMaximumBinaryTree(
  [3, 2, 1, 6, 0, 5])