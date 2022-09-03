/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 缓存让复杂度 O(2 ** n) -> O(n)
  const map = {}
  function getStep(x) {
    if (x === 1) return 1
    if (x === 2) return 2
    if (map[x]) return map[x]
    const step = getStep(x - 1) + getStep(x - 2)
    map[x] = step
    return step
  }
  return getStep(n)
};

console.log(climbStairs(44))