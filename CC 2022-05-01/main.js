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