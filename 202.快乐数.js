/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
function getNext(num) {
  let result = 0
  while(num >= 1) {
    result += (num % 10) * (num % 10)
    num = Math.floor(num / 10)
  }
  return result
}

var isHappy = function(n) {
  let pre = n, cur = getNext(n)
  while (pre !== cur && cur !== 1) {
    pre = getNext(pre)
    cur = getNext(getNext(cur))
  }
  return cur === 1
};

let result = []
for (let i = 0; i <= 100000; i++) {
  if (isHappy(i)) {
    result.push(i)
  }
}
console.log('isHappy?', result.reduce((acc, cur) => acc + cur))
// @lc code=end

