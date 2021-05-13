/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
 var preorder = function(root) {
  let ans = []
  function res(node) {
    if (node === null) return
    ans.push(node.val)
    for(let child of node.children) {
      res(child)
    }
  }
  res(root)
  return ans
};