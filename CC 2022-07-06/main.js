// Coding challenge 07/06/2022

// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.


// Input: head = [1,2,3,4]
// Output: [1,4,2,3]


// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]



// only one list given
// will it ever be empty? values?
// is it validated? whole? int?

// can be done without extra memory like using an array

// split into sections? reverse a section?
// merge two section of linked list basically
// one section/linked list is the first half 
// the second section/linkedlist is the second half that will need to be reversed
// merge them using fast and slow pointers where the slow pointer will reach the middle when the fast reaches the end for even lists
// for odd lists when fast reaches null the slow will reach the middle (even though the first section have the extra node)

var reorderList = function(head) {
  // find middle
  let slow = head;
  let fast = head.next;
  
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  // reverse second half of list
  let second = slow.next;
  slow.next = null;
  let prev = null;
  
  while(second) {
    let temp  = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }
  
  // merge two halves/sections
  let first = head;
  second = prev;
  
  while(second) {
    let temp1 = first.next;
    let temp2 = second.next;
    
    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
};

// Time complexity: O(n) -> where n is length of linked list
// space complexity: O(1) -> no data structures initialized