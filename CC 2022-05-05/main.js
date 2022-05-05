// Coding challenge 05/05/2022

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

 
// ex:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]


// given array and integer -> return array of indicies
// nested loop that adds the values of two indicies and returns the index array if it equals target

const twoSum = (nums, target) => {

  for (let i = 0; i < nums.length; i++) {
    
    for (let j = 0; j < nums.length; j++) {

      if (i === j) continue;
      if (nums[i] + nums[j] === target) return [i, j];
      
    }
    
  }
  
};

// time complexity: O(n^2)
// space complexity: O(1)

// or 


// given array and integer -> return array of indicies
// create an initial hashmap then 
// start by iterating through array and getting the difference between current value and target
// ex: [1,2,3], target 4 -> 4 - 1 = 3 -> index[2]
// if the hashmap contains the difference value -> return the array of the current index and index value index
// if it doesnt contain it -> set the value and index in the hashmap



const twoSum2 = (nums, target) => {
  
  const indexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    
    if (indexMap.has(difference)) {
      return [i, indexMap.get(difference)];
    }
    
    indexMap.set(nums[i], i);
  }
  
  return [];
  
};


// time complexity: O(n)
// space complexity: O(1)
