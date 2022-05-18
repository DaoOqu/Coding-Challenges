// Coding challenge 05/18/2022

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Input: head = [1,2]
// Output: [2,1]



// [1 -> 2 -> 3 -> 4 -> 5 -> null]
// [null <- 1 <- 2 <- 3 <- 4 <- 5]

// [5 -> 4 -> 3 -> 2 -> 1 -> null]


// two pointer system
var reverseList = function(head) {
  // initialize prev and curr
  let prevNode = null;
  let currNode = head; // 1
  
  while(currNode) {
      // reference next node
      let nextNode = currNode.next; // 4
      // point backwards to the prev node
      currNode.next = prevNode; // 2 <- 3
      // reference the next node in prev node
      prevNode = currNode; // 3
      // reference the next node in curr node
      currNode = nextNode; // 4
  }
  return prevNode;
};

// time complexity: O(n)
// space complexity: O(1)