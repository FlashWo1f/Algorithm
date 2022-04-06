// 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

// 示例 1：

// 输入：s = "(()"
// 输出：2
// 解释：最长有效括号子串是 "()"
// 示例 2：

// 输入：s = ")()())"
// 输出：4
// 解释：最长有效括号子串是 "()()"
// 示例 3：

// 输入：s = ""
// 输出：0
// 错误解法
function longestValidParentheses(s) {
  const stack1 = []
  const stack2 = []
  
  const getTop = () => stack1[stack1.length - 1]
  for (let i = 0; i < s.length; i++) {
    const current = s[i]
    if (!stack1.length || current === '(') {
      stack1.push(current)
    } else {
      const top = getTop()
      if (top === '(' && current === ')') {
        stack2.push(stack1.pop(), current)
      }
    }
  }

  console.log('$$$', stack2)
  return stack2.length
}


longestValidParentheses(")()())))))))()()((())()()()))())()")