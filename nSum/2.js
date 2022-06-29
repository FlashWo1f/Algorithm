/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 有点跟题意不一样
var twoSum1 = function (nums, target) {
  const arr = nums.sort((a, b) => a - b)
  let left = 0, right = arr.length - 1
  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum < target) {
      left++
    } else if (sum > target) {
      right--
    } else {
      console.log(sum)
      return [arr[left], arr[right]]
    }
  }
  return [-1, -1]
};
console.log(twoSum1([3, 2, 4], 6))

var twoSum = function (nums, target) {
  var obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let anotherNum = target - cur;
    if (obj[anotherNum] !== undefined && obj[anotherNum] !== i) {
      return [i, obj[anotherNum]]
    }
  }
};