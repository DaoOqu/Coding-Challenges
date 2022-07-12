// Coding challenge 07/11/2022

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space. 


// Input: nums = [1,3,4,2,2]
// Output: 2

// Input: nums = [3,1,3,4,2]
// Output: 3


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