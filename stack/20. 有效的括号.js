/**
 * @param {string} s
 * @return {boolean}
 */

// 输入：s = "()[]{}"
// 输出：true
// 输入：s = "(]"
// 输出：false
var isValid = function (s) {
  const map = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const top = stack[stack.length - 1]
    if (map[top] === s[i]) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
    if (['}', ']', ')'].includes(stack[0])) return false;
  }
  return !stack.length
};

console.log(isValid('()[}[]'))