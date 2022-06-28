/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 查询最左 + 最右
  const findLeft = () => {
    let left = 0, right = nums.length - 1, mid

    while (left <= right) {
      mid = left + ((right - left) >> 1)
      if (nums[mid] > target) {
        right = mid - 1
      } else if (nums[mid] < target) {
        left = mid + 1
      } else {
        if (mid === 0 || nums[mid - 1] < nums[mid]) return mid
        right = mid - 1
      }
    }

    return -1
  }

  const findRight = () => {
    let left = 0, right = nums.length - 1, mid

    while (left <= right) {
      mid = left + ((right - left) >> 1)
      if (nums[mid] > target) {
        right = mid - 1
      } else if (nums[mid] < target) {
        left = mid + 1
      } else {
        if (mid === nums.length - 1 || nums[mid + 1] !== nums[mid]) return mid
        left = mid + 1
      }
    }

    return -1
  }
  return [findLeft(), findRight()]
};

// console.log(searchRange([3, 5, 7, 7, 8, 8, 10], 8))
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
console.log(searchRange([2, 2], 2))
// console.log(searchRange([], 8))