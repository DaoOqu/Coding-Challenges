// Coding challenge 06/04/2022

// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
 
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

var searchMatrix = function(matrix, target) {
  
  // binary search function that searches per row
  const binarySearch = (array) => {
    let min = 0;
    let max = array.length - 1;
    
    while(min <= max) {
      let mid = Math.floor((min + max) / 2);
      
      if(array[mid] < target) {
        min = mid + 1;
      } else if(array[mid] > target) {
        max = mid - 1;
      } else if(array[mid] === target){
        return true;
      }
    }  
  }
  
  // loop to get every matrix row and call search function
  for(array of matrix) {
    let res = binarySearch(array)
    if(res) return res;
  }
  
  return false;
};

// Time complexity: O(log n) -> binary search within loop per row
// Space complexity: O(1)
