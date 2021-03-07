function getExample(n) {
  let arr = []
  for(let i = 0; i < n; ++i) {
    arr.push(Math.random().toFixed(3) * 1000)
  }
  return arr
}


const now = Date.now()
// 插入排序
function insertSort(arr) {
  const copy = [...arr]
  const { length } = copy
  if (length <= 1) {
    return copy
  }

  for (let i = 1; i < length; i++) {
    let value = copy[i]
    let j = i - 1
    for (; j >= 0; --j) {
      if (copy[j] > value) {
        copy[j + 1] = copy[j]
      } else {
        break
      }
    }
    copy[j + 1] = value
  }
  return copy
}

console.log(insertSort(getExample(100000)))
console.log('run out time', Date.now() - now)