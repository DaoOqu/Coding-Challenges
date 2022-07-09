// Coding challenge 07/08/2022

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).


// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.



// what are the inputs? arrays?
// sorted or not? validated? neg? whole?
// will they ever be different lengths?

// merge sort the two sorted arrays then find median
// 3 pointers total to iterate through num1, num2, and res arrays
// compare values and push smaller to res array
// if either num1 or num2 bigger than the other, push the rest of it to res array
// calculate median based on even or odd length of result array


var findMedianSortedArrays = function(num1, num2) {
  let num1Pointer = 0;
  let num2Pointer = 0;
  let resultPointer = 0;
  let result = [];
  
  while(num1Pointer < num1.length && num2Pointer < num2.length) {
    if(num1[num1Pointer] < num2[num2Pointer]) {
      result[resultPointer] = num1[num1Pointer];
      num1Pointer++;
    } 
    else {
      result[resultPointer] = num2[num2Pointer];
      num2Pointer++;
    }
    resultPointer++;
  }
  
  while(num1Pointer < num1.length) {
    result[resultPointer] = num1[num1Pointer];
    num1Pointer++;
    resultPointer++;
  }
  
  while(num2Pointer < num2.length) {
    result[resultPointer] = num2[num2Pointer];
    num2Pointer++;
    resultPointer++;
  }
  
  let median = Math.floor(result.length / 2);
  return result.length % 2 === 0 ? (result[median] + result[median - 1]) / 2 : result[median];
  
};

// Time complexity: O(log(m + n)) -> merge sort i think?? 
// Space complexity: O(n) -> array initialized