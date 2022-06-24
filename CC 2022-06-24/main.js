// Coding challenge 06/24/2022


// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.


// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9




// will the input ever be empty?
// any negative integers? whole numbers?
// sorted array? if not, is it allowed?

// start by adding entire array into a set
// iterate through array and check if each number has its previous number in the set
// if yes -> continue iterating
// if no -> check if the set has the next number in sequence
// update longest sequence and return after iterating 


var longestConsecutive = function(nums) {
  let set = new Set(nums);
  let maxSeq = 0;

  for(let n of nums) {
    if(!set.has(n - 1)) {
      let length = 0;
      while(set.has(n + length)) {
        length++;
      }
      maxSeq = Math.max(length, maxSeq);
    }
  }
  return maxSeq;
};

// Time complexity: O(2n) -> O(n) -> iterate through array at least once and visit each number at most twice
// space complexity: O(n) -> initialized Set