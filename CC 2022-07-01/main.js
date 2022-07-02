// Coding challenge 07/01/2022

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.


// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Input: nums = [1], target = 0
// Output: -1


/*
can i assume the input is an array??
is the array sorted? decreasing or increasing??
will the input ever be empty? or any items in the input?
Is the input validated? negs? whole?
what am i returning? number? what if target is not inside?

can brute force by iterating through entire array and comparing to target
O(n) -> not bad but we can do better


find mid and split input into two sections
figure out based on actual value of mid compared to actual value of left variable what section we're in
if mid is in left section, compare target to mid and left variable
if mid is in right section compare target to mid and right variable
based on result you can decide what section(s) to keep looking in
return index if found or -1 otherwise
O(log n)
*/

const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if(target === nums[mid]) return mid;
    
    if(nums[left] <= nums[mid]) { // left section
      if(target > nums[mid] || target < nums[left]) left = mid + 1;
      else right = mid - 1;
    } 
    else { // right section
      if(target < nums[mid] || target > nums[right]) right = mid - 1;
      else left = mid + 1;
    }
  }
  return -1;
};

// Time complexity: O(log n)
// space complexity: O(1)