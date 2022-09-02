/**
 * @param {string[]} strs
 * @return {string}
 */
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
var longestCommonPrefix = function (strs) {
  if (!strs.length) return ''
  let strCount = 0
  const max = strs.map(v => v.length).sort((a, b) => b - a)[0]
  for (let i = 0; i < max; i++) {
    const char = strs[0][i]
    if (strs.every(v => v[i] === char)) {
      strCount++
      console.log(i, strs[0][i])
    } else break
  }

  return strs[0].slice(0, strCount)
};

console.log(longestCommonPrefix(["flower","flow","flight"]))