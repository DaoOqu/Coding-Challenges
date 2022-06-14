// Coding challenge 06/13/2022

// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.


// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// Input: root = [1,2]
// Output: 1



// may or may not pass through the root
// diameter represented by number of edges

// use DFS and recursion to start at the bottom of tree and count up
// compute height of tree to return to upper node
// compute diameter using the left and right heights and place in variable to return at the end

var diameterOfBinaryTree = function(root) {
  let max = 0;
  
  const maxDepth = (root) => {
      if(root === null || root === undefined) return -1;
      
      let left = maxDepth(root.left);
      let right = maxDepth(root.right);
      max = Math.max(max, 2 + left + right); // this updates our max diameter that we will return at the end
      
      return 1 + Math.max(left, right); // this computes height that we will return to upper node
  }
  
  maxDepth(root);
  return max;
};

// Time complexity: O(n) -> going through every node
// Space complexity: O(1) -> no other data structures initialized