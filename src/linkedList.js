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


module.exports = {
  deleteNode,
  removeNthFromEnd,
}