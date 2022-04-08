const findLongestNoRepeatStr = function (s) {
  let map = {}
  let res = 0
  let l = 0, r = 0

  for(; r < s.length; r++) {
    const rightChar = s[r]
    map[rightChar] = map[rightChar] ? map[rightChar] + 1 : 1
    while(map[rightChar] > 1) {
      // !!!: 这次练习把下面的 s[l] 马虎写成了 map[l] 导致无限循环
      const leftChar = s[l]
      l++
      map[leftChar]--
    }
    res = Math.max(res, r - l + 1)
  }
  return res
}

console.log(findLongestNoRepeatStr("abcdaczzzsvcabcbb"))
