/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0, right = nums.length - 1, mid
  while (left <= right) {
    mid = left + ((right - left) >> 1)
    if (nums[mid] === target) {
      return mid
    }
    if (nums[mid] >= nums[left]) {
      // 左边有序
      if (target < nums[mid] && target >= nums[left]) {
        // 值在左边
        right = mid - 1
      } else {
        // 值在右边
        left = mid + 1
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        // 目标值在右边
        left = mid + 1;
      } else {
        // 目标值在左边
        right = mid - 1;
      }
    }
  }
  return -1
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
console.log(search([4, 5, 6, 7, 0, 1, 2], 3))
console.log(search([5, 1, 3], 1))
console.log(search([3, 1, 2], 2))