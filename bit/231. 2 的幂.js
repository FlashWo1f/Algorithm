/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false
  // 2 的倍数问题 ——> 位运算问题 -> 2 的幂次方 -> 二进制中 1 开头 后面n个 0 如果 - 1 之后就是 n个1 按位且操作就是 0
  return (n & (n - 1)) === 0
};

var isPowerOfTwo = function (n) {
  return n > 0 && (n & (-n)) === n
};