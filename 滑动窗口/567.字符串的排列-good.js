// 输入：s1 = "ab" s2 = "eidbaooo"
// 输出：true
// 解释：s2 包含 s1 的排列之一 ("ba").

// 输入：s1= "ab" s2 = "eidboaoo"
// 输出：false

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let map = {}
  let missingType = 0
  for (let c of s1) {
    if (map[c]) {
      map[c]++
    } else {
      map[c] = 1
      missingType++
    }
  }

  let l = 0, r = 0
  for (; r < s2.length; r++) {
    const rightChar = s2[r]
    if (map[rightChar] !== undefined) map[rightChar]--
    if (map[rightChar] == 0) missingType--
    // console.log('###', map, missingType, s2.substring(l, r + 1), rightChar)
    while(missingType == 0) {
      if (r - l === s1.length - 1) {
        return true
      }
      const leftChar = s2[l]
      // console.log('%%', leftChar, l, r, s1.length, r - l === s1.length - 1)
      if (map[leftChar] !== undefined) map[leftChar]++
      if (map[leftChar] > 0) missingType++
      l++
    }
  }
  return false
}

// console.log(checkInclusion('adc', 'dcda'))
// console.log(checkInclusion('adc', 'dccdcba'))
console.log(checkInclusion('ab', 'eidboaoo'))
