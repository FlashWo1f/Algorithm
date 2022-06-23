/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const m = matrix.length, n = matrix[0].length
  const sumMatrix = new Array(m + 1).fill().map(v => new Array(n + 1).fill(0))
  if (m === 0 || n === 0) return
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      sumMatrix[i][j] = sumMatrix[i - 1][j] + sumMatrix[i][j - 1] + matrix[i - 1][j - 1] - sumMatrix[i - 1][j - 1]
      // console.log(i, j, sumMatrix[i][j])
    }
  }
  // console.log(sumMatrix)
  this.sumMatrix = sumMatrix
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  // 目标矩阵之和由四个相邻矩阵运算获得
  return this.sumMatrix[row2 + 1][col2 + 1] - this.sumMatrix[row1][col2 + 1] - this.sumMatrix[row2 + 1][col1] + this.sumMatrix[row1][col1]
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

const a = new NumMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
console.log(a.sumRegion(0, 1, 1, 2))