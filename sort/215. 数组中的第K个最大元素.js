/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const backup = nums
  const targetIdx = nums.length - k

  function swap(arr, i, j) {
    if (i === j) return;
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  function partition(pivot, left, right) {
    const pivotValue = nums[pivot]
    let startIndex = left
    for (let i = left; i < right; i++) {
      if (nums[i] < pivotValue) {
        swap(nums, i, startIndex)
        startIndex++
      }
    }
    swap(nums, startIndex, pivot)
    return startIndex
  }

  function main(left = 0, right = nums.length - 1) {
    if (left <= right) {
      const idx = partition(right, left, right)
      if (idx === targetIdx) {
        return backup[idx]
      } else if (idx < targetIdx) {
        return main(idx + 1, right)
      } else {
        return main(left, idx - 1)
      }
    }
  }

  return main()
};

console.log(findKthLargest([3,2,1,5,6,4], 2))
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 6))