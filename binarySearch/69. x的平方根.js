/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0 || x === 1) return x
  let left = 1, right = x, mid
  while (right >= left) {
    mid = left + ((right - left) >> 1)
    if (mid === x / mid) return mid
    if (mid > x / mid) {
      right = mid - 1
    } else if (mid < x / mid) {
      left = mid + 1
    }
  }
  // 跳出循环条件  取小的一个 -> right
  return right
};

console.log(mySqrt(8))
console.log(mySqrt(1))
console.log(mySqrt(0))
console.log(mySqrt(36))
console.log(mySqrt(81))
