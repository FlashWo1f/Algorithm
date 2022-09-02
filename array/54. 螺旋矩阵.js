/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  let mt = 0, mb = m - 1, nl = 0, nr = n - 1
  const res = []
  // 0 1 2 3 -> 右下左上
  // console.log(m,n)
  let dir = 0
  while ((mb >= mt) && (nr >= nl)) {
    let _mt = mt, _mb = mb, _nl = nl, _nr = nr
    // console.log('_mt', _mt, _mb, _nl, _nr)
    if (dir === 0) {
      while (_nr >= _nl) {
        res.push(matrix[_mt][_nl])
        _nl++
      }
      mt += 1
    } else if (dir === 1) {
      while (_mt <= _mb) {
        res.push(matrix[_mt][_nr])
        _mt++
      }
      nr -= 1
    } else if (dir === 2) {
      while (_nr >= _nl) {
        res.push(matrix[_mb][_nr])
        _nr--
      }
      mb -= 1
    } else if (dir === 3) {
      while (_mt <= _mb) {
        res.push(matrix[_mb][_nl])
        _mb--
      }
      nl += 1
    }
    dir = (dir + 1) % 4
  }

  return res
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
// 易懂一些
function spiralOrder1(matrix) {
  let m = matrix.length, n = matrix[0].length;
  let upper_bound = 0, lower_bound = m - 1;
  let left_bound = 0, right_bound = n - 1;
  let res = [];
  // res.length == m * n 则遍历完整个数组
  while (res.length < m * n) {
    console.log('times')
    if (upper_bound <= lower_bound) {
      // 在顶部从左向右遍历
      for (let j = left_bound; j <= right_bound; j++) {
        res.push(matrix[upper_bound][j]);
      }
      // 上边界下移
      upper_bound++;
    }

    if (left_bound <= right_bound) {
      // 在右侧从上向下遍历
      for (let i = upper_bound; i <= lower_bound; i++) {
        res.push(matrix[i][right_bound]);
      }
      // 右边界左移
      right_bound--;
    }

    if (upper_bound <= lower_bound) {
      // 在底部从右向左遍历
      for (let j = right_bound; j >= left_bound; j--) {
        res.push(matrix[lower_bound][j]);
      }
      // 下边界上移
      lower_bound--;
    }

    if (left_bound <= right_bound) {
      // 在左侧从下向上遍历
      for (let i = lower_bound; i >= upper_bound; i--) {
        res.push(matrix[i][left_bound]);
      }
      // 左边界右移
      left_bound++;
    }
  }
  return res;
}
console.log(spiralOrder1([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
