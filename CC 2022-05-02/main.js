// Coding challenge 05/02/2022

// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

// ex:
// Input: mat = 
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]], 
// k = 3
// Output: [2,0,3]

// list of lists
// iterate through parent list 
// iterate and sum through integers within each element (lists)
// push the KEY of the sums (not sum itself) into seperate object from weakest to strongest (in terms of value sum)
// return 'k' weakest rows

var kWeakestRows = function(mat, k) {
    
  let objOfSums = [];
  
  // iterate through parent list
  mat.forEach((element, index) => {
      // iterate and sum each element
      let sum = element.reduce((a, b) => a + b, 0);  
      
      // push a new obj into an array to capture the index with its sum
      objOfSums.push({index: index, sum: sum});
  });
  
  // sort the object with respect to the sum value and cutoff object based on 'k'
  let newObj = objOfSums.sort((a,b) => a.sum - b.sum).slice(0, k);
  
  // re-initialize array to push into it
  objOfSums = [];
  
  // push the index key into an empty array and return it
  for(row of newObj) {
      objOfSums.push(row.index);
  }
  
  return objOfSums;
};

