/**
 * 237. Delete Node in a Linked List
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};

/**
 * 19. Remove Nth Node From End of List
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let length = 1
  let current = head
  let deleNo

  while (current.next) {
    current = current.next
    length ++
  }
  
  deleNo = length - n
  current = head

  if (deleNo === 0) {
    head = head.next
  } else {
    while (deleNo > 1) {
      deleNo --
      current = current.next
    }
    current.next = current.next && current.next.next || null
  }

  return head
};

/**
 * 206. Reverse Linked List
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null
  let current = null
  let next = head

  while (next) {
    current = next
    next = current.next
    current.next = prev
    prev = current
  }
  return prev
};

// recursive TODO
var reverseList = function(head) {
  let prevNode = null
  let currNode = head

  function r(prev, curr) {
    if (curr && curr.next) {
      return r(curr, curr.next).next = prev
    } else {
      return curr
    }
  }

  return r(prevNode, currNode)
};


module.exports = {
  deleteNode,
  removeNthFromEnd,
  reverseList,
}