/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const filterS = (str) => {
    return str.split('').filter(v => {
      if (
        v === '0' ||
        +v ||
        (v.toLowerCase() !== v.toUpperCase())
      ) {
        return true
      }
      return false
    }).map(v => v.toLowerCase()).join('')
  }

  const str = filterS(s)
  let left = 0, right = str.length - 1
  while(left < right) {
    if (str[left++] !== str[right--]) {
      return false
    }
  }
  return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))