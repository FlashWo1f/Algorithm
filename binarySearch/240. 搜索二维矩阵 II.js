/**
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
   每行的元素从左到右升序排列。
   每列的元素从上到下升序排列。
   1 4 7
   2 5 8
   3 6 9
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length, n = matrix[0].length
  let i = 0, j = n - 1
  while(i < m && j >= 0) {
    if (matrix[i][j] === target) {
      return true
    } else if (matrix[i][j] < target) {
      i++
    } else {
      j--
    }
  }
  return false
};