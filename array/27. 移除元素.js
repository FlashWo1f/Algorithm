/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let slow = 0, fast = 0
  while(fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow++] = nums[fast]
    }
    fast++
  }
  return slow
  // return nums.slice(0, slow)
};

console.log(removeElement([3,2,2,3,3,3,3,1], 3))