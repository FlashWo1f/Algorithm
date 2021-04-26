// https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/

class Heap {
  constructor(compare) {
    this.data = []
    this.count = 0
    this.compare = typeof compare === 'function' ? compare : ((a, b) => a > b)
  }

  push = (val) => {
    this.data.push(val)
    this.count += 1
    this.upAdjust(this.count - 1)
  }

  upAdjust = (idx) => {
    // 向上调整 => 当前节点和父节点进行比较
    let parent = Math.floor((idx - 1) / 2)
    while(idx && this.compare(this.data[idx], this.data[parent])) {
      this.swap(idx, parent)
      idx = parent
      parent = Math.floor((idx - 1) / 2)
    }
  }

  pop = () => {
    if (!this.count) return
    const val = this.data[0]
    this.swap(0, this.count - 1)
    this.downAdjust(0)
    return val
  }

  downAdjust = (idx) => {
    // 向下调整 当前节点和子节点进行比较
    while((idx * 2 + 1) < this.count) {
      // temp 记录 三元组 中最 小/大 的数的下标
      let temp = idx
      if (this.compare(this.data[idx * 2 + 1], this.data[temp])) {
        temp = idx * 2 + 1
      }
      if (((idx * 2 + 2) < this.count) && this.compare(this.data[idx * 2 + 2], this.data[temp])) {
        temp = idx * 2 + 2
      }
    }
  }
}
