// Coding challenge 06/16/2022

// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]



// preorder - process root node then left subtree then right subtree
// inorder - from root position, process left subtree (left to right) then up to root then right subtrees

// first val in preorder will always be root 
// find the root value inside inorder array -> anything before makes up left subtree
// rinse and repeat

var buildTree = function(preorder, inorder) {
  if(!preorder.length || !inorder.length) return null;
  
  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(preorder[0]);
  
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  
  return root;
};

// Time complexity: O(n^2) -> indexOf function and slicing every recursive stack (can be optimized w/ hashmap)
// Space complexity: O(n^2) ??