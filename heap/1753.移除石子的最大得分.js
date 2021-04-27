/*
 * @lc app=leetcode.cn id=1753 lang=javascript
 *
 * [1753] 移除石子的最大得分
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
// 笨蛋法
var maximumScore = function (a, b, c) {
  let score = 0
  let arr1 = Array.from(arguments).sort((a, b) => a - b)
  while ((arr1[0] || arr1[1])) {
    const firstIdx = arr1[0] ? 0 : 1
    arr1[firstIdx] -= 1
    arr1[arr1.length - 1] -= 1
    score += 1
    arr1.sort((a, b) => a - b)
    // console.log('1:::', arr1)
  }
  return score
};
const maximumScoreUseRule = (a, b, c) => {
  [a, b, c] = [a, b, c].sort((a, b) => a - b)
  if (a + b <= c) {
    return (a + b)
  } else {
    return Math.floor((a + b + c) / 2)
  }
}
// console.log(maximumScore(4, 4, 6))
// console.log(maximumScore(2, 4, 6))
console.log(maximumScoreUseRule(4,4,6))
// @lc code=end

