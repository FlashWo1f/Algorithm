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
 * @return {TreeNode[]}
 */
const separator = ','
const NULL = '#'
var findDuplicateSubtrees = function (root) {
  const map = {}
  const res = []
  function treaver(node) {
    if (node === null) return NULL

    const lStr = treaver(node.left)
    const rStr = treaver(node.right)
    
    const str = lStr + separator + rStr + separator + node.val
    const times = map[str] || 0
    if (times === 1) {
      res.push(node)
    }
    map[str] = times + 1
    
    return str
  }
  treaver(root)
  return res
};

// 思路：序列化每个节点与其子树  存储到 map， key 为字符，value 为出现的次数