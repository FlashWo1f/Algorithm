// 具体是 leetcode 第几题 不知道，是21年6月字节考的题
// var a = [1, 2, 4, 7, 6, 3, 2]
const findMax = function (arr) {
  let left = 0, right = arr.length - 1, mid = left + Math.floor((right - left) / 2)

  while(right > left + 1) {
    if ((mid - 1 < 0 || arr[mid] > arr[mid - 1]) && (mid + 1 > arr.length - 1 || arr[mid] > arr[mid + 1])) {
      return arr[mid]
    } else if (arr[mid] < arr[mid + 1]) {
      left = mid + 1
    } else if (arr[mid] < arr[mid - 1]) {
      right = mid - 1
    }
    mid = left + Math.floor((right - left) / 2)
    // console.log(left, mid, right)
  }
  return Math.max(arr[left], arr[right])
}

console.log(findMax([1, 2, 4, 7, 6, 3, 2]))
console.log(findMax([1]))
console.log(findMax([1, 9]))
console.log(findMax([1, 3, 9]))