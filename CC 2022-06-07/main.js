// Coding challenge 06/07/2022

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.

// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]



// use hashmap to hold a key/value pair that conists of old node and new node which holds old nodes value
// re-initialize new node and get the value from the hashmap using the old node value as key
// return the head

var copyRandomList = function(head) {
  let map = new Map();
  map.set(null, null);
  let currentNode = head;
  
  while(currentNode) {
    let node = new Node(currentNode.val);
    map.set(currentNode, node);
    currentNode = currentNode.next;
  }
  
  currentNode = head;
  
  while(currentNode) {
    let node = map.get(currentNode);
    node.next = map.get(currentNode.next) // || null;
    node.random = map.get(currentNode.random) // || null;
    currentNode = currentNode.next;
  }
  
  return map.get(head);
   
};

// Time complexity: O(n) -> sequential while loops of same size
// Space complexity: O(n) -> initialized a hashmap and node



// We can optimize space from O(n) -> O(1) if we copy the old node into new node and link it inside old node
// that way we're just iterating through one linked list and dont initialize new data structures 