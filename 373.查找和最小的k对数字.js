/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的K对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
function swap(data, i, j) {
  const temp = data[i]
  data[i] = data[j]
  data[j] = temp
}

class Heap {

  constructor(compare) {
    this.count = 0
    // 一个一维数组来存储堆
    this.data = []
    // 控制大小顶堆
    this.compare = typeof compare === 'function' ? compare : ((a, b) => a > b)
  }

  // 向上调整
  shiftUp = (idx) => {
    while (idx && this.compare(this.data[idx], this.data[Math.floor((idx - 1) / 2)])) {
      swap(this.data, Math.floor((idx - 1) / 2), idx)
      idx = Math.floor((idx - 1) / 2)
    }
  }

  // 向下调整
  shiftDown = (idx) => {
    let index = idx
    // 向下调整 判断条件  index 这个节点有子节点
    while ((index * 2 + 1) < this.count) {
      // temp 指向三元组最大值的下标
      let temp = index
      // 比左子树小 那么 temp 下标改变
      if (this.compare(this.data[index * 2 + 1], this.data[temp])) temp = index * 2 + 1
      // 右子树存在且大于 temp 的下标对应的值
      if (((index * 2 + 2) < this.count) && this.compare(this.data[index * 2 + 2], this.data[temp])) temp = index * 2 + 2
      // 如果 temp 并没有改变 说明 index 对应的值已经是最大的了，无需再去向下调整了
      if (temp === index) break
      // 如果不是 交换值 进行下一个调整
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
    // 记录弹出之前的第一个值
    const val = this.data[0]
    // 首部弹出，并且尾部元素填充到首部
    // this.data[0] = this.data[this.count - 1]
    swap(this.data, 0, this.count - 1)
    this.count -= 1
    this.shiftDown(0)
    return val
  }
}
var kSmallestPairs = function (nums1, nums2, k) {
  const heap = new Heap((a, b) => {
    return a[0] + a[1] > b[0] + b[1]
  })
  let temp
  for (let n1 of nums1) {
    for (let n2 of nums2) {
      temp = [n1, n2]
      if (heap.count < k || heap.compare(heap.data[0], temp)) {
        heap.push(temp)
        if (heap.count > k) {
          heap.pop()
        }
      } else {
        break
      }
    }
  }
  return heap.data.slice(0, k)
};
// @lc code=end

