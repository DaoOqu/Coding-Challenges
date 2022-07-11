// Coding challenge 07/10/2022


// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.


// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.



// fast and slow pointers
// if there is a cycle then ->
// the fast pointer will equal the slow pointer at some point while looping
// if not and the fast pointer manages to reach null then there is no cycle

var hasCycle = function(head) {
  let fastHead = head;
  
  while(fastHead && fastHead.next) {
    head = head.next;
    fastHead = fastHead.next.next;
    
    if(fastHead === head) return true;
  }
  return false;
};

// Time complexity: O(n) -> iterating through linked list
// Space complexity: O(1) -> no data structure initialized 