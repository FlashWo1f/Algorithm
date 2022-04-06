const findLongestNoRepeatStr = function (s) {
  let window = {}
  let res = 0
  let l = 0, r = 0
  // 这里与 while 不同，for 的 第三个语句是最后执行的
  for(; r < s.length; r++) {
    const rightChar = s[r]
    window[rightChar] = window[rightChar] ? window[rightChar] + 1 : 1
    while(window[rightChar] > 1) {
      const leftChar = s[l]
      l++
      window[leftChar]--
    }
    res = Math.max(res, r - l + 1)
  }
  return res
}

console.log(findLongestNoRepeatStr("abcdaczzzsvcabcbb"))