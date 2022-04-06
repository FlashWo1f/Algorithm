// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const res = []
  let map = {}
  let missingType = 0
  for (const c of p) {
    if (!map[c]) {
      map[c] = 1
      missingType++
    } else {
      map[c]++ 
    }
  }

  let left = 0, right = 0
  for (; right < s.length; right++) {
    const rightChar = s[right]
    if (map[rightChar] !== undefined) map[rightChar]-- 
    if (map[rightChar] === 0) missingType--
    while(missingType == 0) {
      if (right - left + 1 === p.length) {
        res.push(left)
      }
      const leftChar = s[left]
      if (map[leftChar] !== undefined) map[leftChar]++
      if (map[leftChar] > 0) missingType++
      left++
    }
  }
  return res
}

// console.log('findAnagrams', findAnagrams("cbaebabacd", "abc"))
console.log('findAnagrams', findAnagrams("abab", "ab"))
