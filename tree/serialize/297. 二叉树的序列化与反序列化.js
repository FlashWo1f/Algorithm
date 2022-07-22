/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const NULL = '#'
const separator = ','
const arr = []
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  arr.length = 0
  function _ser(root) {
    if (root === null) return arr.push(NULL)
    arr.push(root.val)
    _ser(root.left)
    _ser(root.right)
    return arr.join(separator)
  }
  return _ser(root)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data || !data.length) return null
  let nodes = data.split(separator)
  function con() {
    if (!nodes.length) return null
    const nodeVal = nodes.shift()
    if (nodeVal === NULL) return null
    const root = new TreeNode(nodeVal * 1)
    root.left = con()
    root.right = con()
    return root
  }

  return con()
};

console.log(deserialize('1,2,#,#,3,4,#,#,5,#,#'))

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */