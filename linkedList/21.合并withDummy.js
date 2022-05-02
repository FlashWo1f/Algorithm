function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2
  if (!l2) return l1
  let dummy = new ListNode(-1)
  let p = dummy
  while(l1 && l2) {
    if (l1.val > l2.val) {
      p.next = l2
      p = l2
      l2 = l2.next
    } else {
      p.next = l1
      p = l1
      l1 = l1.next
    }
  }
  if (!l1) {
    p.next = l2
  } else {
    p.next = l1
  }

  return dummy.next
}

const l13 = new ListNode(4)
const l12 = new ListNode(3, l13)
const l11 = new ListNode(1, l12)
const l23 = new ListNode(5)
const l22 = new ListNode(2, l23)
const l21 = new ListNode(1, l22)
let head = mergeTwoLists(l11, l21)
console.log(head)
while(head) {
  console.log(head.val)
  head = head.next
}