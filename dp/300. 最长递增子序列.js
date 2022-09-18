/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = []
  for (let i = 0; i < nums.length; i++) {
    dp.push([nums[i]])
    let maxLeft = []
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // 找到左边最长递增序列
        if (dp[j].length > maxLeft.length) {
          maxLeft = dp[j]
        }
      }
    }
    dp[i] = maxLeft.concat(dp[i])
    // console.log('loop', dp[i])
  }

  return Math.max(...dp.map(v => v.length))
};

const cases1 = [10,9,2,5,3,7,101,18]
const cases2 = [7,7,7,7,7]
const cases3 = [0,1,0,3,2,3]
console.log(lengthOfLIS(cases1))
console.log(lengthOfLIS(cases2))
console.log(lengthOfLIS(cases3))