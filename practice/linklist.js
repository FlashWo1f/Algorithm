function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function reverseN(head, n) {
  if (n === 1) return head
  let tail = head.next
  const p = reverseN(head.next, n - 1)
  head.next = tail.next
  tail.next = head
  return p
}

function reverseBetween(head, m, n) {
  const dummy = new ListNode(null, head)
  let p = dummy
  // count 要提前记录
  const count = n - m + 1
  while(--m) {
    p = p.next
  }

  // const count = n - m + 1 写这里就错了
  
  p.next = reverseN(p.next, count)
  return dummy.next
}

function _reverseN(head, n) {
  let count = 0
  let p = head
  while(p) {
    p = p.next
    if (++count >= n) break
  }
  return count < n ? head : reverseN(head, n)
}

function reverseKGroup(head, k) {
  const dummy = new ListNode(null, head)
  let p = dummy
  let cur = p.next
  while((p.next = _reverseN(cur, k)) !== cur) {
    p = cur
    cur = p.next
    console.log('cur:', cur)
  }
  return dummy.next
}

let p1 = new ListNode(3)
let p2 = new ListNode(2)
let p3 = new ListNode(0)
let p4 = new ListNode(4)
let p5 = new ListNode(5)
let p6 = new ListNode(7)
p1.next = p2
p2.next = p3
p3.next = p4
p4.next = p5
p5.next = p6

let head = reverseKGroup(p1, 2)
while (head) {
  console.log(head.val)
  head = head.next
}