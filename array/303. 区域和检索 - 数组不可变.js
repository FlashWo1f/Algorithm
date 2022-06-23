/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  let pre = nums[0]
  this.preSums = nums.map((i, idx) => {
    const res = idx ? i + pre : i
    return pre = res
  })
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.preSums[right] - (left ? this.preSums[left - 1] : 0)
};

const nums = [-2, 0, 3, -5, 2, -1]
var obj = new NumArray(nums)
console.log(obj.preSums)
console.log(obj.sumRange(0, 2))
console.log(obj.sumRange(2, 5))
console.log(obj.sumRange(0, 5))

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */