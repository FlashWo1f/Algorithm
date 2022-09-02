/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const res = new Array(n).fill(-1).map(v => new Array(n))
  let count = 1
  // 设置边界
  let upper_bound = 0, lower_bound = n - 1,
  left_bound = 0, right_bound = n - 1
  while(upper_bound <= lower_bound && left_bound <= right_bound) {
    for (let i = left_bound; i <= right_bound; i++) {
      res[upper_bound][i] = count++
    }
    upper_bound++
    
    for (let i = upper_bound; i <= lower_bound; i++) {
      res[i][right_bound] = count++
    }
    right_bound--

    for (let i = right_bound; i >= left_bound; i--) {
      res[lower_bound][i] = count++
    }
    lower_bound--

    for (let i = lower_bound; i >= upper_bound; i--) {
      res[i][left_bound] = count++
    }
    left_bound++
  }
  return res
};

console.log(generateMatrix(4))