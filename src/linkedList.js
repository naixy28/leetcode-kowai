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

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 21. Merge Two Sorted Lists
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let currL1 = l1
  let currL2 = l2
  let tail = null
  let head = null

  while (currL1 && currL2) {
    if (currL1.val <= currL2.val) {
      head = head || currL1
      if (tail) {
        tail.next = currL1
      } 
      tail = currL1
      currL1 = currL1.next
    } else {
      if (head) {
        tail.next = currL2
        tail = currL2
        currL2 = currL2.next
      } else {
        head = currL2
        tail = head
        currL2 = currL2.next
      }
    }
  }

  if (head) {
    if (currL1) {
      tail.next = currL1
    }
    if (currL2) {
      tail.next = currL2
    }
  } else {
    head = currL1 || currL2
  }


  return head 
};


module.exports = {
  deleteNode,
  removeNthFromEnd,
  reverseList,
}