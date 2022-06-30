/**
 * @param {number[]} nums
 * @return {number[][]}
*/
var threeSum = function (nums) {

  nums = nums.sort((a, b) => a - b)

  const twoSum = (_left, target = 0) => {
    const arr = nums.slice(_left)
    let left = 0, right = arr.length - 1
    console.log(left, arr)
    const result = []
    while (left < right) {
      const lv = arr[left]
      const rv = arr[right]
      const sum = lv + rv
      // console.log('sum', sum, target)
      if (sum < target) {
        while (left < right && arr[left] === lv) left++
      } else if (sum > target) {
        while (left < right && arr[right] === rv) right--
      } else {
        result.push([lv, rv])
        while (left < right && arr[left] === lv) left++
        while (left < right && arr[right] === rv) right--
      }
    }
    return result
  }

  const res = []
  let cur
  for (let i = 0; i < nums.length - 2; i++) {
    if (cur !== nums[i]) {
      cur = nums[i]
      const curple = twoSum(i + 1, 0 - nums[i])
      curple.forEach(v => {
        const newI = [cur, ...v]
        res.push(newI)
      })
    }
  }

  return res
};

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0]))
console.log(threeSum([0, 0]))
console.log(threeSum([0, 0, 0]))