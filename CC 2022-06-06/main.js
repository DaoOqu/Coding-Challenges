// Coding challenge 06/06/2022

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level)

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Input: root = [1]
// Output: [[1]]

// Input: root = []
// Output: [[]]



// simple level-order BFS traversal

var levelOrder = function(root) {
  let currentNode = root;
  // queue holds child node references 
  let queue = [];
  // list is what we're gonna return
  let list = [];

  // start by pushing root node to queue
  queue.push(currentNode);
  
  if(!root) return list;
  
  while(queue.length) {
    // need to set this so conditional holds a constant length per level
    let length = queue.length;
    
    // array of values per level that we push to list 
    // Resets every loop because its global to the conditional
    let values = [];
    
    for(let i = 0; i < length; i++) {
      // shift then push node value to value list
      currentNode = queue.shift();
      values.push(currentNode.val);
    
      if(currentNode.left) queue.push(currentNode.left); 
      if(currentNode.right) queue.push(currentNode.right);
    }
    // push array of values to list every loop
    list.push(values);
  }
  
  return list;
};
