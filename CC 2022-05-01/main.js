// Coding challenge 05/01/2022

// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.


// naive solution

// get the length of list
// find the middle (depends on even or odd) using mod
// returning that place


const middleNode = (head) => {
  let length = 0; // length counter
  let node = head;
  
  // length of list
  while (node !== null) {
  node = node.next;
  length++;        
  }
  
  //find the middle
  if (length % 2 !== 0) {
      node = head;
      let middleNum = Math.floor(length/2);
      while (middleNum > 0) {
          node = node.next;
          middleNum--;
      }
      return node;
  }else {
      node = head;
      let middleNum = length/2;
      while (middleNum > 0) {
          node = node.next;
          middleNum--;
      }
      return node;
  }
  return null;
};


// Better solution

// use fast/slow pointers to start at same place
// if we allow fast = x2 Slow ->
// then when fast is finished iterating through the list
// slow will end up in the middle of the list
// odd / even? -> fast.next to figure out if list is even when done iterating
// fast to figure out if list is odd when done iterating 


const middleNodes = (head) => {
  let slow = head;
  let fast = head;
  
  while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  }
  return slow;
};


middleNode([1,2,3,4,5]) // [3,4,5]
middleNode([1,2,3,4,5,6]) // [4,5,6]