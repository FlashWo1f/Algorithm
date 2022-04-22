/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre = null
  let cur = head
  let next = cur.next
  while(cur) {
    cur.next = pre
    pre = cur
    cur = next
    if (next) {
      next = next.next
    }
  }
  return pre
}

var reverseListRecursion = function (head) {
  if (!head.next || !head) return head
  const tail = head.next
  const p = reverseListRecursion(head.next)
  head.next = tail.next
  tail.next = head
  return p
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
let p1 = new ListNode(3)
let p2 = new ListNode(2)
let p3 = new ListNode(0)
let p4 = new ListNode(4)
p1.next = p2
p2.next = p3
p3.next = p4

let head = reverseListRecursion(p1)
while (head) {
  console.log(head.val)
  head = head.next
}