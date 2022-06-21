// Coding challenge 06/21/2022

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Input: height = [1,1]
// Output: 1



// are inputs validated? negs? empty?
// always at least two elements in array?

// max amount of water a container can store = area between two lines
// two pointer -> one in beginning one at end
// calculate area and hold it in a variable
// iterate on both ends to the middle while comparing area calculation to max

// return max area once both pointers meet in middle

const maxArea = (height) => { 
  let left = 0;
  let right = height.length - 1;
  let result = 0;
  
  while(left < right) {
    let diff = right - left;
    let area = Math.min(height[left], height[right]) * (diff);
    
    if(area > result) result = area;
    
    if(height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
    
  }
  return result;
}

// Time complexity: O(n) -> where n is the number of items in the array
// Space complexity: O(1) -> no other data structures initialized