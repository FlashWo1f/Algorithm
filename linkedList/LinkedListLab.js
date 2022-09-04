function LinkedList(val) {
  this.val = val
  this.next = null
}

const head = new LinkedList(1)
l2 = new LinkedList(2)
l3 = new LinkedList(3)
l4 = new LinkedList(4)
l5 = new LinkedList(5)
head.next = l2
l2.next = l3
l3.next = l4
l4.next = l5
l5.next = null

var reverseList = function(head) {
  if (!head || !head.next) return head 
  // tail 已反转部分的 尾部
  let tail = head.next
  const p = reverseList(head.next)
  // p 始终为 这条原始链表的最后一个节点(反转后的head节点)
  // tail.next 也始终为 null
  head.next = tail.next
  tail.next = head
  return p
};

var reverseN = function (head, n) {
  if (n === 1) return head
  let tail = head.next
  const p = reverseN(head.next, n - 1)
  head.next = tail.next
  tail.next = head
  return p 
}

// let node = reverseList(head)
let node = reverseN(head, 3)
// let node = head
// console.log(node, node.next)
while (node) {
  console.log('val',node.val)
  node = node.next
}