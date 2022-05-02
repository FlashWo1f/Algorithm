function lengthOfLongestSubstring(str) {
  const map = {}
  let left = 0, right = 0
  let longest = ''
  for (; right < str.length; right++) {
    const i = str[right]
    if (map[i]) {
      map[i] += 1
    } else {
      map[i] = 1
    }
    while(map[i] > 1) {
      const j = str[left]
      left++
      map[j] -= 1
    }
    longest = longest.length < (right - left + 1) ? str.slice(left, right + 1) : longest
  }
  return longest
}

console.log(lengthOfLongestSubstring("abcdaczzzsvcabcbb"))
