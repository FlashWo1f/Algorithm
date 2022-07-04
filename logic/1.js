// 输入是 1,2,3,5,7,8,10 
// 输出要求是 1~3 5 7~8 10

const format = (arr) => {
  let lastNum
  let preNum = 0
  return arr.reduce((pre, cur) => {
    lastNum = Number.isInteger(pre * 1) ? pre : preNum
    const res = lastNum + 1 === cur
    ? `${pre}~${cur}`.includes(`~${preNum}`) ? `${pre}~${cur}`.replace(`~${preNum}`, '') : `${pre}~${cur}`
    : `${pre} ${cur}`
    preNum = cur
    return res
  })
}

console.log(format([1, 2, 3, 5, 7, 8, 10, 11, 12, 13]))