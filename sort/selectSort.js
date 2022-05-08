function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    swap(arr, minIndex, i)
  }
  return arr
}

function swap(arr, a, b) {
  if (a === b) return 
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function getExample(n) {
  let arr = []
  for(let i = 0; i < n; ++i) {
    arr.push(Math.random().toFixed(3) * 1000)
  }
  return arr
}

const now = Date.now()
let arr = getExample(100000)
selectSort(arr)
console.log('result', arr)
console.log('run out time', Date.now() - now)