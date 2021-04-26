/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
class Heap {
  constructor(compare) {
    this.data = []
    this.count = 0
    this.compare = compare
  }

  top = () => {
    return this.count ? this.data[0] : null
  }

  swap = (a, b) => {
    const temp = this.data[a]
    this.data[a] = this.data[b]
    this.data[b] = temp
  }

  push = (val) => {
    this.count += 1
    this.data.push(val)
    this.upAdjust(this.count - 1)
  }

  upAdjust = (idx) => {
    let parent = Math.floor((idx - 1) / 2)
    while (idx && this.compare(this.data[idx], this.data[parent])) {
      this.swap(idx, parent)
      idx = parent
      parent = Math.floor((idx - 1) / 2)
    }
  }

  pop = () => {
    if (!this.count) {
      return
    }
    const val = this.data[0]
    this.swap(0, this.count - 1)
    this.count -= 1
    this.data.pop()
    this.downAdjust(0)
    return val;
  }

  downAdjust = (idx) => {
    while ((idx * 2 + 1) < this.count) {
      let temp = idx
      if (this.compare(this.data[idx * 2 + 1], this.data[idx])) {
        temp = idx * 2 + 1
      }
      if (((idx * 2 + 2) < this.count) && this.compare(this.data[idx * 2 + 2], this.data[temp])) {
        temp = idx * 2 + 2
      }
      if (temp === idx) {
        break
      }
      this.swap(temp, idx)
      idx = temp
    }
  }
}
var nthUglyNumber = function (n) {
  // 小顶堆
  const heap = new Heap((a, b) => a < b)
  let ans
  heap.push(1)
  while (n--) {
    ans = heap.top()
    heap.pop()
    if (ans % 5 === 0) {
      heap.push(5 * ans)
    } else if (ans % 3 === 0) {
      heap.push(5 * ans)
      heap.push(3 * ans)
    } else {
      heap.push(5 * ans)
      heap.push(3 * ans)
      heap.push(2 * ans)
    }
  }
  return ans
};
// @lc code=end

