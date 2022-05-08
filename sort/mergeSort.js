// 归并排序

function mergeSort(arr, left = 0, right = arr.length - 1) {
  // 递归终止条件
  if (left >= right) return
  const mid = left + Math.floor((right - left) / 2)
  // 分而治之
  mergeSort(arr, left, mid)
  mergeSort(arr, mid + 1, right)
  // 将小问题的反馈统一一下
  merge(arr, left, right, mid)
}

function merge(arr, left, right, mid) {
  let i = left, j = mid + 1, k = 0
  // 申请一个额外空间来存合并结果
  let temp = []
  // 合并两个数组
  while(i <= mid && j <= right) {
    if (arr[i] < arr[j]) {
      temp.push(arr[i])
      i++
    } else {
      temp.push(arr[j])
      j++
    }
  }

  // 判断是哪个数组先放完
  let start = i, end = mid
  if (j <= right) {
    start = j
    end = right
  } 
  // 将剩下的数组项放入 temp
  if (start <= end) {
    temp = temp.concat(arr.slice(start, end + 1))
  }
  // 将 temp 赋值给 arr
  for(let i = 0; i <= right - left; i++) {
    arr[left + i] = temp[i]
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
let arr = getExample(100)
// let arr = [3, 7, 4, 8, 1, 9]
mergeSort(arr)
console.log('result', arr)
console.log('run out time', Date.now() - now)