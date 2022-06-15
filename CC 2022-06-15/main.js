// Coding challenge 06/15/2022

// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false


// do you consider both null to be equal?
// do you consider a non-empty root tree equal to an empty sub tree ->
// (since they root will technically reach null eventually)

const isSubtree = (root, subRoot) => {
  
  // DFS - Recursive
  // Recursion for main function and helper function
  // helper function -> simple "same tree" function
  
  // find at least one node within root tree that is same as head of subRoot tree
  // then begin recursion to find out if the rest of the nodes are same
    
    const sameTree = (root, subRoot) => {
      if(!root && !subRoot) return true;
      if((!root || !subRoot) || (root.val !== subRoot.val)) return false;
    
      let left = sameTree(root.left, subRoot.left);
      let right = sameTree(root.right, subRoot.right);
      
      return left && right;
    }
    
    if(!subRoot) return true;
    if(!root) return false;
    
    if(sameTree(root, subRoot)) return true;
    
    return (isSubtree(root.left, subRoot) || 
            isSubtree(root.right, subRoot));
  };
  
