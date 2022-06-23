/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//  输入: nums = [0,1,0,3,12]
//  输出: [1,3,12,0,0]
var moveZeroes = function (nums) {
  let slow = 0,
    fast = 0
  // 沿用 27 题的思路
  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      nums[slow++] = nums[fast]
    }
    fast++
  }
  for (; slow < nums.length; slow++) {
    nums[slow] = 0
  }
  return nums
}

console.log(moveZeroes([1, 3, 12, 0, 0, 5, 7, 0, 4]))
console.log(moveZeroes([0]))
