// Coding challenge 06/17/2022

// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3



// DFS - inorder traverse using a stack (iteratively)
// process inorder traversal and push values to an array 
// grab first (smallest) index 


// iteratively using stack
var kthSmallest = function(root, k) {
    let head = root;
    let stack = [];
    let counter = 0;
    
    while(head || stack.length > 0) {
        while(head) {
            stack.push(head);
            head = head.left;
        }
        head = stack.pop()
        counter++
        
        if(counter === k) {
            return head.val;
        }
        
        head = head.right;
    }
};

// Time complexity: O(n) -> where n is the number of nodes we traverse
// Space complexity: O(n) -> initialized stack that will store 'n' number of nodes



// recursive
var kthSmallest = function(root, k) {
  let output;
  
  const traverse = (root) => {
    if(root.left) traverse(root.left);

    k--;
    if(k === 0) output = root.val;
    
    if(root.right) traverse(root.right);
  }
  
  traverse(root);
  return output;
};

// Time complexity: O(n) -> where n is the number of nodes we traverse
// Space complexity: O(n) -> initialized stack that will store 'n' number of nodes