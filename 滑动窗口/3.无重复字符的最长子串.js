// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0
  let left = 0
  let right = 0
  let window = {}
  while (right < s.length) {
    const rightChar = s[right]
    right++
    window[rightChar] = window[rightChar] ? window[rightChar] + 1 : 1
    // 找到解后，尝试优化解
    while (window[rightChar] > 1) {
      const leftChar = s[left]
      left++
      window[leftChar]--
    }
    res = Math.max(res, right - left)
  }
  return res
}

var lengthOfLongestSubstring1 = function (s) {
  if (s === '') return 0
  let ans = 1
  for (let i = 0; i < s.length; i++) {
    let res = 1
    let l = i, r = i + 1
    for (; r < s.length; r++) {
      if (s.slice(l, l + res).includes(s[r])) {
        break
      }
      res += 1
    }
    ans = Math.max(ans, res)
  }
  return ans
};
const str = 'abcdaczzzsvcabcbbsdfzxcvdasdsdfewrsadadvfxzccxvasdfdczcxvsdafsadeddasfasfawfasdfageadsvdflikhasdlkfjvabsfbasjiklvbhaisbvilqebfvasuivbqeirhfiqwbdvbasdjvbsavnbkjasbvhisqnvjerhoeuwhviuhfdlkvahsflvhasviboyeqhvolanxckvnbqeoviqnroghietuygtgynasifnasughqiornvoqsvnojqweboprqvnoqbvaashfdbaOIUGBOEJABGBasbasadifzkjdfbaifpewbfZkjvbcsvbausdhrfeuwlksngoagnbprbgoqgouasbdgpiabgb'
console.time('while')
console.log(lengthOfLongestSubstring(str))
console.timeEnd('while')

console.time('for')
console.log(lengthOfLongestSubstring1(str))
console.timeEnd('for')