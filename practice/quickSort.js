function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // 下面如果是 left 就会栈溢出
    // 因为当在 partition 中 for 循环找出了 (povitIndex + 1) 个元素比 povitValue 小 
    // 最后 swap(arr, povitIndex, povit) 则把比 povitValue 小的 left 交换导致大小错乱
    const pivot = right
    // debugger
    const pivotIndex = partition(arr, pivot, left, right)
    quickSort(arr, left, pivotIndex - 1 < left ? left : pivotIndex - 1)
    quickSort(arr, pivotIndex + 1 > right ? right : pivotIndex + 1, right)
  }
}

function partition(arr, povit, left, right) {
  const povitValue = arr[povit]
  let povitIndex = left
  for (let i = left; i < right; i++) {
    const curValue = arr[i]
    if (curValue < povitValue) {
      swap(arr, i, povitIndex)
      povitIndex++
    }
  }
  swap(arr, povitIndex, povit)
  return povitIndex
}

function swap(arr, a, b) {
  if (a === b) return
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}
const debuggerTest = [7,5,8,3,9,6,4,13]
quickSort(debuggerTest)
console.log(debuggerTest)


function getExample(n) {
  let arr = []
  for(let i = 0; i < n; ++i) {
    arr.push(Math.random().toFixed(3) * 1000)
  }
  return arr
}
const testArr = []
let i = 0
while (i < 10) {
  testArr.push(Math.floor(Math.random() * 1000))
  i++
}
let arr = getExample(100000)
console.time('run out time')
quickSort(arr)
console.log('result', arr)
console.timeEnd('run out time')