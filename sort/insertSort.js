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
  // console.log('原始', copy)
  const { length } = copy
  if (length <= 1) {
    return copy
  }
  // 0 ~ i - 1 是已排序区域  i ~ length - 1 是未排序区域
  for (let i = 1; i < length; i++) {
    let value = copy[i]
    let j = i - 1
    for (; j >= 0; --j) {
      if (copy[j] > value) {
        // 后移一位
        copy[j + 1] = copy[j]
      } else {
        break
      }
    }
    // 将 value 插入应该放到的位置
    copy[j + 1] = value
    // console.log('一次循环', copy)
  }
  return copy
}

function insertSort1(arr) {
  for (let i = 1; i < arr.length; i++) {
    const value = arr[i]
    let j = i - 1
    for (; j >= 0; j--) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = value
  }
  return arr
}

console.log(insertSort(getExample(100000)))
console.log('run out time', Date.now() - now)