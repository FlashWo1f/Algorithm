// 排序测试

function getExample(n) {
  let arr = []
  for(let i = 0; i < n; ++i) {
    arr.push(Math.random().toFixed(3) * 1000)
  }
  return arr
}

function swap(arr, a, b) {
  if (a === b) return
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

/**
 * 
 * @param {function} fn 目标排序算法方法
 * @param {number} amount 自动生成长度为 amount 的受测数组
 */
function sortTest(fn, amount = 100000) {
  let arr = getExample(amount) 
  console.log('source', arr)
  const now = Date.now()
  fn(arr)
  console.log('result', arr)
  console.log('run out time', Date.now() - now)
}

function mergeSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return
  const mid = left + Math.floor((right - left) / 2)
  mergeSort(arr, left, mid)
  mergeSort(arr, mid + 1, right)
  merge(arr, left, right, mid)
}

function merge(arr, left, right, mid) {
  let temp = []
  let i = left, j = mid + 1
  while(i <= mid && j <= right) {
    if (arr[i] < arr[j]) {
      temp.push(arr[i++])
    } else {
      temp.push(arr[j++])
    }
  }

  let start = i, end = mid
  if (j <= right) {
    start = j
    end = right
  }

  temp = temp.concat(arr.slice(start, end + 1))

  for (let idx = 0; idx <= right - left; idx++) {
    arr[left + idx] = temp[idx]
  }
}

// sortTest(mergeSort)
// mergeSort([3, 7, 4, 8, 1, 9])

const findPartition = (arr, pivot, left, right) => {
  const pivotValue = arr[pivot]
  let index = left
  for (let i = left; i < right; i++) {
    const value = arr[i]
    if (value < pivotValue) {
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, pivot, index)
  return index
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivot = left
    const index = findPartition(arr, pivot, left, right)
    quickSort(arr, left, index - 1 < left ? left : index - 1)
    quickSort(arr, index + 1 > right ? right : index + 1, right)
  }
}

sortTest(quickSort)

module.exports = {
  sortTest,
  getExample,
}