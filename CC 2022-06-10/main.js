// Coding challenge 06/10/2022

// Given the root of a binary tree, invert the tree, and return its root.

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Input: root = [2,1,3]
// Output: [2,3,1]

// Input: root = []
// Output: []



var invertTree = function(root) {
  if(!root) return root;
  
  let left = root.left;
  let right = root.right;
  root.left = right;
  root.right = left;

  invertTree(root.left);
  invertTree(root.right);
  
  return root;
  
};


// var invertTree = function(root) {
//   if(!root) return root;
  
//   let temp = root.left;
//   root.left = root.right;
//   root.right = temp;

//   invertTree(root.left);
//   invertTree(root.right);
  
//   return root;
  
// };