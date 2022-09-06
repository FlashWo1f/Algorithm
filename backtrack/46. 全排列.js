/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let ans = []
  const dfs = (path = []) => {
    if (path.length === nums.length) return ans.push(path.slice())
    nums.forEach(v => {
      if (!path.includes(v)) {
        // console.log('???', path, [...path, v])
        dfs([...path, v])
      }
    })
  }

  dfs()
  return ans
};

console.log(permute([1, 2, 3]))

function permute1(nums) {
  let ans = []
  const dfs = (path = []) => {
    if (path.length === nums.length) return ans.push(path.slice())
    nums.forEach(v => {
      if (!path.includes(v)) {
        // 标准模板
        path.push(v)
        // console.log('???', path)
        dfs(path)
        // 这里需要 pop 而上面不需要的原因是 上面每次都传递一个新的path数组
        path.pop()
      }
    })
  }

  dfs()
  return ans
}

console.log(permute1([1, 2, 3]))
