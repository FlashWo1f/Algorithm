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

// console.log(mySqrt(8))
// console.log(mySqrt(1))
// console.log(mySqrt(0))
// console.log(mySqrt(36))
// console.log(mySqrt(81))

// 带有精度
var mySqrtWithAccuracy = function (x, accuracy) {
  if (x === 0 || x === 1) return x
  let left = 1, right = x, mid
  while (right >= left) {
    mid = left + ((right - left) / 2)
    if (mid === x / mid) return mid
    if (mid > x / mid) {
      right = mid - accuracy
    } else if (mid < x / mid) {
      left = mid + accuracy
    }
  }
  return right
}

function test(accuracy) {
  const cases = [8, 1, 36, 81, 102, 65, 2315123]
  for (let i = 0; i < cases.length; i++) {
    const res = mySqrtWithAccuracy(cases[i], accuracy)
    const resouce = Math.sqrt(cases[i])
    console.log(`满足条件？ ${Math.abs(res - resouce) < accuracy} 目标差距:${accuracy} --- resouce:${resouce} --- result: ${res}`, )
  }
}

test(1e-2)
test(1e-6)