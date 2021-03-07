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

var reverseBetween = function(head, left, right) {
  if (!head || !head.next) return head
  const count = right - left + 1
  if(count <= 1) return head 
  let cur = head, pre
  left -= 1
  while(left >= 1) {
    left--
    console.log('keft', left)
    pre = cur
    cur = cur.next
  }
  const p = reverseN(cur, count)
  if (pre) {
    pre.next = p
    return head
  } else {
    return p
  }
};
function reverseN(head, n) {
  if (n === 1) return head
  let tail = head.next
  const p = reverseN(head.next, n - 1)
  head.next = tail.next
  tail.next = head
  return p 
}
let node = reverseBetween(head, 4,5)
// let node = head
// console.log(node, node.next)
while (node) {
  console.log('val',node.val)
  node = node.next
}