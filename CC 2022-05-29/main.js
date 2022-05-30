// Coding challenge 05/29/2022

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Input: list1 = [], list2 = [0]
// Output: [0]


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */



// are both lists validated? integers? Whole? Can they be neg?
// are the lists sorted? in what order?
// can they be empty? one? or both? same length?
// up to how many nodes can be in a list?

var mergeTwoLists = function(list1, list2) {
  
  // iterate through lists and compare each node
  // whichever node is smaller, add it to merged list then move to next node
  // if equal, choose one and move to next node until null is reached
  // for the case of unequal lists lengths, find the list with remaining nodes ->
  // and add the remaining nodes to the end of the merged list
  
  
  let dummy = new ListNode();
  let tail = dummy;
  
  while(list1 && list2) {
    if(list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  
  if(list1) {
    tail.next = list1;
  } else {
    tail.next = list2;
  }
  
  return dummy.next;
  
};

// Time complexity: O(min(n, m)) or O(n + m)??
// Space complexity: O(1)