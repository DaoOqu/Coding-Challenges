// Coding challenge 05/19/2022

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

// Input: nums = [1,2,3,4]
// Output: false

// is the input always an array? 
// are the array elements always positive? negative?
// can I assume there will always be more than two elements?
// is the array sorted?

// nested loops without sort (CAUSE YOU DON'T NEED IT)

var containsDuplicate = function(nums) {
  
  // nested loops to iterate through array while comparing to next element
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      // return true if there's a duplicate
      if(nums[i] === nums[j]) return true;
    }
  }
  // return false if theres no duplicate
  return false;
};

// time complexity: O(n^2)
// space complexity: O(1)