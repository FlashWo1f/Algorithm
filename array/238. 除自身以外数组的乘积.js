/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let left = 1
  // 某个数的左边的累乘 注意边界
  const leftArr = nums.map((v, idx) => left *= (idx > 0 ? nums[idx - 1] : 1))
  let right = 1
  // 某个数的右边的累乘 注意边界
  const rightArr = nums.reverse().map((v, idx) => right *= (idx > 0 ? nums[idx - 1] : 1)).reverse()
  // 合并
  return leftArr.map((v, idx) => v * rightArr[idx])
};

console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))
console.log(productExceptSelf([-1, 2]))