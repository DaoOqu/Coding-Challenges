// Coding challenge 06/09/2022

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1



var search = function(nums, target) {
  let min = 0;
  let max = nums.length - 1;
  
  while(min <= max) {
    let mid = Math.floor((min + max) / 2);
    
    if(nums[mid] < target) {
      min = mid + 1 // 3
    } else if(nums[mid] > target) { 
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};