// 排序测试

function getExample(n) {
  let arr = []
  for(let i = 0; i < n; ++i) {
    arr.push(Math.random().toFixed(3) * 1000)
  }
  return arr
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

module.exports = {
  sortTest,
  getExample,
}
// 好像写错了
function insertSort(arr) {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    let target = i
    for (let j = i; j >=0 ; j--) {
      if (arr[j] < arr[i]) {
        arr[j + 1] = arr[j]
        target--
      }
    }
    arr[target] = arr[i]
  }
  return arr
}

sortTest(insertSort, 10)