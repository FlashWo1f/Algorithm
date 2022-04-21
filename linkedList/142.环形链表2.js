var detectCycle = function(head) {
  if (!head || !head.next) return null
  let slow = head, fast = head
  while(fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
      if (fast === slow) break
  }
  if (!fast || !fast.next) return null
  slow = head
  console.log(slow, fast, slow !== fast)
  while(slow !== fast) {
    console.log('do')
      slow = slow.next
      fast = fast.next
  }
  console.log(slow, fast)
  return slow
};
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
p4.next = p2

detectCycle(p1)