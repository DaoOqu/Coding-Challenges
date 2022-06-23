// Coding challenge 06/22/2022

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]



// are the inputs validated? negatives? empty? at least two items?
// what do i return if empty?

// initialize new array and prefix and iterate through array ->
// current array equals to prefix -> calculate new prefix by multiplying with input array values as it iterates
// initialize suffix and iterate through array backwards ->
// current array equals itself multiplied by suffix -> calculate suffix by multipling with input array values as it iterates backwards
// return array


var productExceptSelf = function(nums) {
  const result = [];
  
  let prefix = 1;

  for(let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  
  let suffix = 1;
  
  for(let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  return result;
};

// Time complexity: O(n + n) -> same array n -> O(n)
// Space complexity: O(1) -> output array does not count for extra space