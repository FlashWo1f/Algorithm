function swap(arr, i, j) {
  if (i === j) return;
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function partition (arr, pivot, left, right) {
  const pivotValue = arr[pivot]
  let startIndex = left
  for(let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, startIndex)
      startIndex++
    }
  }
  swap(arr, startIndex, pivot)
  return startIndex
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = partition(arr, right, left, right)
    quickSort(arr, left, pivotIndex - 1 < left ? left : pivotIndex - 1)
    quickSort(arr, pivotIndex + 1 > right ? right : pivotIndex + 1, right)
  }
}

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
const now = Date.now()
let arr = getExample(100000)
quickSort(arr)
// 快排真的好快呀
console.log('result', arr)
console.log('run out time', Date.now() - now)
// console.log(nthNum(testArr, 0, testArr.length - 1, 2), testArr)
// console.log('unsort', testArr)
// quickSort(testArr, 0, testArr.length - 1);
// console.log('sort', testArr)

// 查找第 n 大的数
function nthNum(arr, left = 0, right = arr.length - 1, n) {
  if (left < right) {
    const { length } = arr
    let pivotIndex = partition(arr, right, left, right)
    if (pivotIndex > length - n) {
      return nthNum(arr, left, pivotIndex - 1 < left ? left : pivotIndex - 1, n)
    } else if (pivotIndex < length - n) {
      return nthNum(arr, pivotIndex + 1 > right ? right : pivotIndex + 1, right, n)
    } else {
      return pivotIndex
    }
  }
}