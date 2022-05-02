function reverseN(head, n) {
  // n === 1 的条件要注意
  if (!head.next || n === 1) return head
  const tail = head.next
  const p = reverseN(head.next, --n)
  head.next = tail.next
  tail.next = head
  return p
}

function reverseBetween(head, m, n) {
  if (!head || !head.next) return head 
  const count = n - m + 1
  // 应该用虚拟头节点的
  let p = head
  m -= 1
  while(--m) {
    p = head.next
  }
  p.next = reverseN(p.next, count)
  return head
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
let p1 = new ListNode(3)
let p2 = new ListNode(2)
let p3 = new ListNode(0)
let p4 = new ListNode(4)
let p5 = new ListNode(5)
p1.next = p2
p2.next = p3
p3.next = p4
p4.next = p5

let head = reverseBetween(p1, 2, 4)
while (head) {
  console.log(head.val)
  head = head.next
}