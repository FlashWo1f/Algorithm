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
var sortList = function (head) {
  if (!head || !head.next) return head

  const midNode = findMidNode(head)
  let rightNode = midNode.next
  midNode.next = null
  
  let left = sortList(head)
  let right = sortList(rightNode)

  return mergeTwoListNode(left, right)
};

function findMidNode(node) {
  // console.log(node.val, node.next)
  if (!node || !node.next) return node
  let slow = node
  // 下面 fast = node 就会 栈溢出
  let fast = node.next
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  console.log('slow', slow)
  return slow
}

function mergeTwoListNode(l1, l2) {
  if (!l1) return l2
  if (!l2) return l1
  const dummy = new ListNode(-1)
  let p = dummy
  while(l1 && l2) {
    if (l1.val > l2.val) {
      p.next = l2
      l2 = l2.next
    } else {
      p.next = l1
      l1 = l1.next
    }
    p = p.next
  }

  if (!l1) {
    p.next = l2
  } 

  if (!l2) {
    p.next = l1
  } 

  return dummy.next
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const node5 = new ListNode(3)
const node4 = new ListNode(2, node5)
const node3 = new ListNode(1, node4)
const node2 = new ListNode(5, node3)
const node1 = new ListNode(6, node2)
console.log('ans:-------', sortList(node1))