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


// optimal solution using hashmap/set

var containsDuplicate = function(nums) {
  // initialize a set because we don't need keys, just values
  let set = new Set();
  
  // loop through array and check if value is in set
  for(let i = 0; i < nums.length; i++) {
    // if it does return true
    if(set.has(nums[i])) return true;
    
    // if it doesn't, push it to the set
    set.add(nums[i]);
  }
  // if loop finishes and no duplicates return false
  return false;
};

// time complexity: O(n) -> less time but more space
// space complexity: O(n) -> larger space for less time