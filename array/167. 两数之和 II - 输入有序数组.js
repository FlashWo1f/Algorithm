/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0, right = numbers.length - 1
  while (left < right) {
    const sum = numbers[left] + numbers[right]
    if (sum > target) {
      right--
    } else if (sum < target) {
      left++
    } else {
      return [left + 1, right + 1]
    }
  }
  return [-1, -1]
};

console.log(twoSum([-1,0], -1))
