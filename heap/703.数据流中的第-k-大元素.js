/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */

function swap(data, i, j) {
  const temp = data[i]
  data[i] = data[j]
  data[j] = temp
}

class MinHeap {
  constructor() {
    this.count = 0
    // 一个一维数组来存储堆
    this.data = []
  }
  // 向上调整
  shiftUp = (idx) => {
    while (idx && this.data[Math.floor((idx - 1) / 2)] > this.data[idx]) {
      swap(this.data, Math.floor((idx - 1) / 2), idx)
      idx = Math.floor((idx - 1) / 2)
    }
  }

  // 向下调整
  shiftDown = (idx) => {
    let index = idx
    while ((index * 2 + 1) <= (this.count - 1)) {
      let temp = index
      if (this.data[temp] > this.data[index * 2 + 1]) temp = index * 2 + 1
      if (((index * 2 + 2) <= (this.count - 1)) && this.data[temp] > this.data[index * 2 + 2]) temp = index * 2 + 2
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
var KthLargest = function (k, nums) {
  this.k = k
  this.heap = new MinHeap()
  for (n of nums) { this.add(n); }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.heap.push(val)
  if (this.heap.count > this.k) {
    this.heap.pop()
  }
  return this.heap.data[0]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

