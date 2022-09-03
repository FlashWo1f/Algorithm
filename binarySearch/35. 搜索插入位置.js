/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
var searchInsert = function (nums, target) {
  // right = nums.length -> 可能插到最后面
  let left = 0, right = nums.length, mid
  while(left < right) {
    mid = left + ((right - left) >> 1)
    if (nums[mid] > target) {
      // 这里不要减一，因为有可能就插这
      right = mid
    } else if (num[mid] < target) {
      left = mid + 1
    } else {
      return mid
    }
  }
  // 这里 left === right 哪个都行
  return right
};