// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let res = 0
  let left = 0
  let right = 0
  let window = {}
  while(right < s.length) {
    const rightChar = s[right]
    right++
    window[rightChar] = window[rightChar] ? window[rightChar] + 1 : 1
    // 找到解后，尝试优化解
    while(window[rightChar] > 1) {
      const leftChar = s[left]
      left++
      window[leftChar]--
    }
    res = Math.max(res, right - left)
  }
  return res
}

console.log(lengthOfLongestSubstring("abcdaczzzsvcabcbb"))