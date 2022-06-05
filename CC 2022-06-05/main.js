// Coding challenge 06/05/2022

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:
 
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Input: root = [2,1,3]
// Output: true

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.



// In-order Depth first search

var isValidBST = function(root) {
  // returns true or false at the end
  let valid = true;
  // instantiate a node with -infinity to pass initial conditional
  let prevNode = new TreeNode(-Infinity, null, null);
  
  // start of DFS recursion
  let traverse = (node) => {
    // base case for recursion
    if(!node || !valid) return;
    
    // get all left nodes in branch
    traverse(node.left);
    
    // compare against prev to validate
    if(node.val <= prevNode.val) {
      valid = false;
    }
    
    // update prev with actual node value
    prevNode = node;
    // get all right nodes in branch
    traverse(node.right);
  }
  // start recursion with root as param
  traverse(root);
  // returns true/false 
  return valid;
  
};

