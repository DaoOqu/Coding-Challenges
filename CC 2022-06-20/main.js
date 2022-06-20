// Coding challenge 06/20/2022

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.


// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].





// are the inputs validated? -> whole integers, negatives included
// will the input always contain at least two items?
// is the input sorted?
// will there always be a unique solution? only one?
// what am I returning?


// if input was not sorted -> use hashmap
// since input is sorted -> use two pointers to iterate through array
// beginning and ending pointers
// add and compare to target 

var twoSum = function(numbers, target) {
  if(numbers.length === 2) return [1,2];
  
  let left = 0;
  let right = numbers.length - 1;
  
  while(left < right) {
    if(numbers[left] + numbers[right] < target) left++;
    else if(numbers[left] + numbers[right] > target) right--;
    else return [left + 1, right + 1];
  } 
  
};

// Time complexity: O(n) -> only one loop where n is size of input
// Space complexity: O(1) -> no data structures initialized