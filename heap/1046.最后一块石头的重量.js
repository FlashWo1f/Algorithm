/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
 function swap(data, i, j) {
  const temp = data[i]
  data[i] = data[j]
  data[j] = temp
}

class Heap {
  constructor() {
      this.count = 0
      // 一个一维数组来存储堆
      this.data = []
  }
  // 向上调整
  shiftUp = (idx) => {
      while (idx && this.data[Math.floor((idx - 1) / 2)] < this.data[idx]) {
          swap(this.data, Math.floor((idx - 1) / 2), idx)
          idx = Math.floor((idx - 1) / 2)
      }
  }

  // 向下调整
  shiftDown = (idx) => {
      let index = idx
      // 向下调整 判断条件  index 这个节点有子节点
      while ((index * 2 + 1) <= (this.count - 1)) {
          // temp 指向三元组最大值的下标
          let temp = index
          // 比左子树小 那么 temp 下标改变
          if (this.data[temp] < this.data[index * 2 + 1]) temp = index * 2 + 1
          // 右子树存在且大于 temp 的下标对应的值
          if (((index * 2 + 2) <= (this.count - 1)) && this.data[temp] < this.data[index * 2 + 2]) temp = index * 2 + 2
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
var lastStoneWeight = function (stones) {
  const heap = new Heap()
  for (let i = 0; i < stones.length; i++) {
      heap.push(stones[i])
  }
  while(heap.count > 1) {
      const s1 = heap.pop()
      const s2 = heap.pop()
      if (s1 !== s2) {
        heap.push(s1 - s2)
      }
  }
  // console.log(heap.data, heap.count)
  return heap.count ? heap.data[0] : 0
};
lastStoneWeight([2,7,4,1,8,1])
// @lc code=end

