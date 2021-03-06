// Coding challenge 06/27/2022

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.



// arithmetic formula: sum(1-n) = n(n+1)
// -> (n*(n+1)) / 2

var missingNumber = function(nums) {
  let inputSum = 0;
  
  for(let i = 0; i < nums.length; i++) {
    inputSum += nums[i];
  }
  
  let length = nums.length
  let actualSum = Math.floor((length * (length + 1)) / 2)
  return actualSum - inputSum;
};

// Time complexity: O(n) -> iterating through array once to sum values
// Space complexity: O(1) -> no data structures initialized 