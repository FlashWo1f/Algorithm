/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd1 = function (head, n) {
  if (!head.next) return null
  let slow = head,
    fast = head
  while (n > 0) {
    fast = fast.next
    if (!fast) return head.next
    n -= 1
  }
  while (fast && fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return head
}

var removeNthFromEnd = function (head, n) {
  // 虚拟头结点
  let dummy = new ListNode(-1)
  dummy.next = head
  // 删除倒数第 n 个，要先找倒数第 n + 1 个节点
  let x = findFromEnd(dummy, n + 1)
  // 删掉倒数第 n 个节点
  x.next = x.next.next
  return dummy.next
}

var findFromEnd = function (head, k) {
  let p1 = head
  // p1 先走 k 步
  for (let i = 0; i < k; i++) {
    p1 = p1.next
  }
  let p2 = head
  // p1 和 p2 同时走 n - k 步
  while (p1 != null) {
    p2 = p2.next
    p1 = p1.next
  }
  // p2 现在指向第 n - k 个节点
  return p2
}
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
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
let head = removeNthFromEnd(p1, 3)
while (head) {
  console.log(head.val)
  head = head.next
}
