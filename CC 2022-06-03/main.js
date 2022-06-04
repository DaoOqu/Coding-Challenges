// Coding challenge 06/03/2022

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Input: root = [2,1,3]
// Output: true

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4





// traverse through BST maybe in-order DFS?
// check if current node is bigger than prev ->
// in a valid BST this would true and traverse through entire BST, if it isn't the tree isnt valid


var isValidBST = function(root) {
  // set to true to return at the end if valid, false if it isnt
  let valid = true;
  
  // instantiate new node to keep track of prev
  // infinity to avoid any actual number being bigger than root during initial call
  let prevNode = new TreeNode(-Infinity, null, null)
  
  // DFS recursion section
  const traverse = (node) => {
      
      // Base case
      if(!node || !valid) return;
      
      // Get all left nodes
      traverse(node.left);
      
      // Compare against prev
      if(node.val <= prevNode.val) {
          valid = false;
      }
      
      // Update previous
      prevNode = node;
      traverse(node.right);
  };
  
  // Initial recursion call
  traverse(root);
  // Return true/false
  return valid;
};

// Time complexity: O(n) -> all vertices were traversed
// Space complexity: O(n) or O(h) -> where n or h is the height of tree, stored within call stack