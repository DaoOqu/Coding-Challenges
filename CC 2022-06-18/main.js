// Coding challenge 06/18/2022

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Input: nums = [2,0,1]
// Output: [0,1,2]


// are the elements within the array validated? -> zero, neg, null, undefined, etc..
// does in-place mean no array manipulation? -> modify nums in place
// is this basically asking if I know how the sort function works?
// will the parameter ever NOT contain either 0, 1 or 2? -> always contains 0,1,2


// gameplan:
// nums = [2,0,1] -> count the number of 0, 1 and 2's respectively
// modify nums -> nums = [0, 1, 2] by re-initializing it based on count in correct order


const sortColors = (nums) => {
  let redCount = 0;
  let whiteCount = 0;
  let blueCount = 0;

  // iterate through nums and count 0,1,2
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] === 0) {
          redCount++;
      } else if(nums[i] === 1) {
          whiteCount++;
      } else blueCount++;
  }
  
  // iterate through nums and overwrite based on counters
  for(let i = 0; i < nums.length; i++) {
    if(redCount > 0) {
      nums[i] = 0;
      redCount--;
    }else if(whiteCount > 0) {
      nums[i] = 1;
      whiteCount--;
    }else {
      nums[i] = 2;
      blueCount--;
    }
  }
};

// time complexity: O(n + n) -> O(2n) iterating twice through same array but not at same time
// can use two pointers instead of two loops instead

// space complexity: O(1)??