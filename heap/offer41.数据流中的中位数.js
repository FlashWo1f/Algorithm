class Heap {
  constructor(compare) {
    this.data = []
    this.count = 0
    this.compare = compare
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

const MedianFinder = function () {
  // 以中间线为界的左边的 heap 大顶堆
  const heap1 = new Heap((a, b) => a > b)
  // 右边的 heap 小顶堆
  const heap2 = new Heap((a, b) => a < b)
  this.heap1 = heap1
  this.heap2 = heap2
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (!this.heap1.count) {
    this.heap1.push(num)
  } else {
    if (num > this.heap1.data[0]) {
      this.heap2.push(num)
      if (this.heap2.count - this.heap1.count === 2) {
        this.heap1.push(this.heap2.pop())
      }
    } else {
      this.heap1.push(num)
      if (this.heap1.count - this.heap2.count === 2) {
        this.heap2.push(this.heap1.pop())
      }
    }
  }
  return null
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const length = this.heap1.count + this.heap2.count
  console.log('??', length)
  let ret
  if (!length) {
    return null
  } else if (length % 2 === 0) {
    ret = (this.heap1.data[0] + this.heap2.data[0]) / 2
  } else {
    const v = (this.heap1.count > this.heap2.count) ? this.heap1 : this.heap2
    ret = v.data[0]
  }
  return ret
};

const test = new MedianFinder()
test.addNum(3)
test.addNum(7)
test.addNum(5)
test.addNum(8)
test.addNum(1)
test.addNum(9)
test.addNum(2)
// test.addNum(1)
// test.addNum(2)
// test.addNum(3)
console.log(test.findMedian())
// console.log(test, test.heap1.data[0], test.heap2.data[0])
