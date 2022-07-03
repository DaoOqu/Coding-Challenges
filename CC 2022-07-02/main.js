// Coding challenge 07/02/2022

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.


// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 



// find the smallest element by calculating mid and splitting array into two sections
// in left section if value of mid >= value of left --> this case search right portion 
// in right section otherwise --> this case search left portion
// if in a sorted portion where value of left < value of right --> comapre result to value of left
// repeat all steps until loop is done and return result

var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let res = nums[0];
  
  while(left <= right) {    
    if(nums[left] < nums[right]) {
      res = Math.min(res, nums[left]);
    }
    
    let mid = Math.floor((left + right) / 2);
    res = Math.min(res, nums[mid]);
    
    if(nums[mid] >= nums[left]) { // in left section -> search right
      left = mid + 1;
    } 
    else { // in right section -> search left
      right = mid - 1;
    }
  }
  return res;
};

// Time complexity: O(log n) -> binary search
// space compelxity: O(1) -> no data structures initialized