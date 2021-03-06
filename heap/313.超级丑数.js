/*
 * @lc app=leetcode.cn id=313 lang=javascript
 *
 * [313] 超级丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
function swap(data, i, j) {
  const temp = data[i]
  data[i] = data[j]
  data[j] = temp
}

class Heap {

  constructor(compare) {
    this.count = 0
    this.data = []
    this.compare = typeof compare === 'function' ? compare : ((a, b) => a > b)
  }

  top = () => {
    return this.count ? this.data[0] : null
  }

  shiftUp = (idx) => {
    while (idx && this.compare(this.data[idx], this.data[Math.floor((idx - 1) / 2)])) {
      swap(this.data, Math.floor((idx - 1) / 2), idx)
      idx = Math.floor((idx - 1) / 2)
    }
  }

  shiftDown = (idx) => {
    let index = idx
    while ((index * 2 + 1) < this.count) {
      let temp = index
      if (this.compare(this.data[index * 2 + 1], this.data[temp])) temp = index * 2 + 1
      if (((index * 2 + 2) < this.count) && this.compare(this.data[index * 2 + 2], this.data[temp])) temp = index * 2 + 2
      if (temp === index) break
      swap(this.data, temp, index)
      index = temp
    }
  }

  push = (x) => {
    this.data[this.count++] = x
    let index = this.count - 1
    this.shiftUp(index)
  }

  pop = () => {
    if (!this.count) return
    const val = this.data[0]
    swap(this.data, 0, this.count - 1)
    this.count -= 1
    this.shiftDown(0)
    return val
  }
}
var nthSuperUglyNumber = function (n, primes) {
  const pLens = primes.length
  const heap = new Heap((a, b) => a < b)
  let ans
  heap.push(1)
  while (n--) {
    ans = heap.pop()
    if (n) {
      let maxYinziIdx
      for (let i = 0; i < pLens; i++) {
        if (ans === 1) {
          maxYinziIdx = 0
        }
        if (ans % primes[i] === 0) {
          maxYinziIdx = i
        }
      }
      for (let j = maxYinziIdx; j < pLens; j++) {
        heap.push(ans * primes[j])
        console.log(heap.data)
      }
    }

  }
  // console.log(heap.data)
  return ans
};
// console.log(nthSuperUglyNumber(12, [2,7, 13, 19]))

// 大顶堆实现 超级丑数
// 事实证明 大顶堆是不能实现的 因为第3层的数部分比第四层部分大, 而我们必须每次取最小的弹出
const nthSuperUglyNumberUseGreaterHeap = (n, primes) => {
  const pLens = primes.length
  const gheap = new Heap()
  let currentRound = [1]
  gheap.push(1)
  let maxYinziIdx
  while (gheap.count <= n) {
    let nextRount = []
    for (const num of currentRound) {
      for (let i = 0; i < pLens; i++) {
        if (num === 1) {
          maxYinziIdx = 0
        }
        if (num % primes[i] === 0) {
          maxYinziIdx = i
        }
      }
      for (let j = maxYinziIdx; j < pLens; j++) {
        gheap.push(num * primes[j])
        nextRount.push(num * primes[j])
        if (gheap.count === n) {
          console.log(gheap.data)
          return gheap.top()
        } 
        // console.log(gheap.data)
      }
    }
    console.log('nextRount', nextRount)
    currentRound = nextRount
  }
}
console.log(nthSuperUglyNumberUseGreaterHeap(99, [2,7, 13, 19]))
// @lc code=end

