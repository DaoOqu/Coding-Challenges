// Coding challenge 05/24/2022

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Input: nums = [1], k = 1
// Output: [1]

// will always have at least one element?
// will they always be integers?
// are we returning the integer that comes up a 'k' number of times? or
// are we returning the 'k' most elements that come up the most frequently?
// will we see integers that come up the same amount of times? and will we have to choose one over the other?


//  two loops with hashmap and sort
var topKFrequent = function(nums, k) {
  // initialize hashmap to count integer instances
  // insitialize array to return
  let map = new Map();
  let arr = [];
  
  // if less than two elements, only one element can be biggest
  if(nums.length < 2) return nums;
  
  // iterating through array
  for(let i of nums) {
    // if the hashmap contains the current element then set it with an updated counter
    if(map.has(i)) {
      map.set(i, (map.get(i) + 1));
      // if not, set it with a counter of one
    } else map.set(i, 1);
  }
  
  // iterate through the hashmap entries and push them to array as an array
  for (let [key, value] of map.entries()) {
    arr.push([key, value]);
  }
  
  // sort array based on counter num from biggest to smallest
  arr.sort((a, b) => b[1] - a[1]);
  // slice array from 0th to kth index and place it into own array then return
  return arr.slice(0, k).map(x => x[0]);
}

// time complexity: O(n log n)
// space complexity: O(n)