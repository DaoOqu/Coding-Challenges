// Coding challenge 06/11/2022

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Input: root = [1,null,2]
// Output: 2



// DFS - Problem
// recursive

// run through all nodes -> O(n)
// use recursion to count

var maxDepth = function(root) {
  let leftDepth = 0;
  let rightDepth = 0;

  
  if(!root) return 0;
  
  if(root.left) {
    leftDepth = maxDepth(root.left);
  }
  
  if(root.right) {
    rightDepth = maxDepth(root.right);
  }
  
  return Math.max(leftDepth, rightDepth) + 1;
  
};

// Could be more efficient with function below:

// var maxDepth = function(root) {
//   if(root === null || root === undefined) return 0;
  
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  
// };

// Time complexity: O(n)
// Space complexity: O(1)