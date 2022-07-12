// Coding challenge 07/11/2022

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space. 


// Input: nums = [1,3,4,2,2]
// Output: 2

// Input: nums = [3,1,3,4,2]
// Output: 3


// no data structure can be initialized
// no modifying input array
// guaranteed one one repeated number
// as long as input isnt empty then values will never be zero


// NAIVE SOLUTION (BRUTE FORCE)
// the values in the input are from 1 to the input length inclusive
// counter to hold values and iterate over and over?
// two pointers? meets requirements but too inefficient 

var findDuplicate = function(nums) {
  let left = 0;
  let right = left + 1;
  
  while(left < right) {
    while(right < nums.length) {
      if(nums[left] !== nums[right]) {
        right++;
      } else return nums[left];
    }
    left++;
    right = left + 1;
  }
};

// Time complexity: O(n^2) -> can do better
// Space complexity: O(1) -> no data structures initialized (meets requirements)


// OPTIMIZED SOLUTION
// Fast & Slow pointers
// can be treated like a linked list cycle question
// if there is a unique duplicate there will be a cycle 

var findDuplicate = function(nums) {
  let slow = nums[0];
  let fast = nums[nums[0]]
  
  // guaranteed to have cycle
  while(slow !== fast) { 
    slow = nums[slow];
    fast = nums[nums[fast]]
  }
  
  slow = 0;
  
  // slows fast pointer down
  while(slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  
  return slow;
  
};
