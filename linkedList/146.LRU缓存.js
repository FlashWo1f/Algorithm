class ListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
}

class DoubleList {
  constructor() {
    // 初始化双向链表的数据
    this.head = new ListNode(0, 0)
    this.tail = new ListNode(0, 0)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.size = 0
  }

  // 链表尾部添加节点，时间 O(1)
  addLast = (node) => {
    node.prev = this.tail.prev
    node.next = this.tail
    this.tail.prev.next = node
    this.tail.prev = node
    this.size += 1
    return node
  }

  // 删除链表的第一个节点，并返回该节点，时间 O(1)
  remove = (node) => {
    node.prev.next = node.next
    node.next.prev = node.prev
    this.size -= 1
    return node.key
  }

  removeFirst = () => {
    const first = this.head.next
    if (first === this.tail) return null
    return this.remove(first)
  }

  getSize = () => {
    return this.size
  }
}
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.map = new Map()
  this.cache = new DoubleList()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const oldNode = this.map.get(key)
    this.cache.remove(oldNode)
    this.cache.addLast(oldNode)

    return this.map.get(key).value
  } else {
    return -1
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    const oldNode = this.map.get(key)
    this.cache.remove(oldNode)
  } else {
    if (this.cache.getSize() === this.capacity) {
      const first = this.cache.removeFirst()
      this.map.delete(first)
    }
  }
  this.map.set(key, this.cache.addLast(new ListNode(key, value)))
  return null
};

const test = () => {
  const t = new LRUCache(2)
  console.log(t.put(1, 1))
  console.log(t.put(2, 2))
  console.log(t.get(1))
  console.log(t.put(3, 3))
  console.log(t.get(2))
  console.log(t.put(4, 4))
  console.log(t.get(1))
  console.log(t.get(3))
  console.log(t.get(4))
}

test()
