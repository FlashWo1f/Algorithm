function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

// 递归版本
var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }
  let res = l1.val > l2.val ? l2 : l1
  res.next = mergeTwoLists(res.next, l1.val > l2.val ? l1 : l2)
  return res
}

// 循环版本

var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2
  if (!l2) return l1
  let dummy = new ListNode(-1)
  let p = dummy
  let p1 = l1,
    p2 = l2
  while (p1 !== null && p2 !== null) {
    console.log('@@@', dummy)
    if (p1.val > p2.val) {
      p.next = p2
      p2 = p2.next
    } else {
      p.next = p1
      p1 = p1.next
    }
    // p 不断前进
    p = p.next
  }

  if (!p1) {
    p.next = p2
  }
  if (!p2) {
    p.next = p1
  }
  // console.log('p:', p)
  // console.log('p.next', p.next)
  // console.log('dummy', dummy)
  // 打印
  // while(dummy.next) {
  //   console.log(dummy.next.val)
  //   dummy = dummy.next
  // }
  return dummy.next
}

const l13 = new ListNode(4)
const l12 = new ListNode(3, l13)
const l11 = new ListNode(1, l12)
const l23 = new ListNode(5)
const l22 = new ListNode(2, l23)
const l21 = new ListNode(1, l22)
console.log(mergeTwoLists(l11, l21))
