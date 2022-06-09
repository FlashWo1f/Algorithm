/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let slow = 0, fast = 0
  // const swap = (i, j) => {
  //   if (i === j) return 
  //   const temp = nums[i]
  //   nums[i] = nums[j]
  //   nums[j] = temp
  // }
  while(fast < nums.length) {
    if (nums[slow] < nums[fast]) {
      // 根本不需要交换值，直接覆盖好了
      // swap(++slow, fast)
      nums[++slow] = nums[fast]
    }
    fast++
  }
  return slow + 1
}

// [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))