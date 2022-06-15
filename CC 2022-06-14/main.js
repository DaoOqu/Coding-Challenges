// Coding challenge 06/14/2022

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.


// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Input: p = [1,2], q = [1,null,2]
// Output: false

// Input: p = [1,2,1], q = [1,1,2]
// Output: false



// DFS - Recursion
// compare against each other and return if theyre the same or not

var isSameTree = function(p, q) {
  if(!p && !q) return true;
  if((!p || !q) || (p.val !== q.val)) return false;
      
  let left = isSameTree(p.left, q.left);
  let right = isSameTree(p.right, q.right);
  
  return left && right;
};

