function getExample(n) {
  let arr = []
  for(let i = 0; i < n; ++i) {
    arr.push(Math.random().toFixed(3) * 1000)
  }
  return arr
}

// 冒泡排序
const now = Date.now()

function bubbleSort(arr) {
  for(let i = 0; i < arr.length - 1; ++i) {
    let flag = false
    for(let j = i + 1; j < arr.length; ++j) {
      if (arr[i] > arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        flag = true
      }
    }
    if (!flag) {
      break;
    }
  }
  return arr
}

console.log('result', bubbleSort(getExample(100000)))
console.log('run out time', Date.now() - now)