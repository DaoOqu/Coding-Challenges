// Coding challenge 05/28/2022

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Input: head = []
// Output: []


var reverseList = function(head) {
  // initliaze a previous (null) and current (head) node to begin
  // loop through list make them all point to the previous node while re-initializing current/next node
  
  let prev = null;
  let current = head;
  
  while(current) {
    let next = current.next; // stores the next reference before updating in next line
    current.next = prev; // if we didnt store this in the last line, it would be lost in memory
    prev = current;
    current = next;
  }
  return prev;
};

// Time complexity: O(n)
// Space complexity: O(1)