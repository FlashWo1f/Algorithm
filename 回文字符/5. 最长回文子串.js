/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const palindrome = (str, l, r) => {
    while (l >= 0 && r < str.length && str[l] === str[r]) {
      l--;
      r++;
    }
    // 或者 substring —— 与 slice 区别
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring
    // 因为上面第一步就 l-- r++ 所以下面 l + 1, r
    return str.slice(l + 1, r)
  }
  
  let res = []
  for (let i = 0; i < s.length; i++) {
    // 找到以 s[i] 为中心的回文串
    // 找到以 s[i] 和 s[i+1] 为中心的回文串
    const s1 = palindrome(s, i, i)
    const s2 = palindrome(s, i, i + 1)
    // console.log(i, s1, s2)
    res = res.length > s1.length ? res : s1
    res = res.length > s2.length ? res : s2
  }
  return res
};

console.log(longestPalindrome('cbbd'))