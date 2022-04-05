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
var checkInclusion = function(s1, s2) {
  let map = {} 
  const len = s1.length
  let missingType = 0
  for (const c of s1) { 
    if (!map[c]) {
      missingType++; 
      map[c] = 1;
    } else {
      map[c]++;
    }
  }
  let l = 0
  for (; l <= s2.length - len; l++) {
    const subs = s2.substring(l, l + len)
    console.log(subs)
    let _missingType = missingType
    const _map = { ...map }
    for (const sItem of subs) {
      if (_map[sItem]) {
        _map[sItem]--
        !_map[sItem] && _missingType--
      }
      if (_missingType == 0) return true
    }
  }
  return false
}

// console.log(checkInclusion('ab', 'eidbaooo'))
console.log(checkInclusion('adc', 'dcda'))