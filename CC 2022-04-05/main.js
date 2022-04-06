// Coding challenge 04/05/2022

// Two sum problem

// Given an array, return true if there is a pair of values that equal target parameter
// always integers, only numbers, not sorted

// ex: arr = [6,4,3,2,1,7] 
// target = 9 -> true


// naive approach

function hasPairWithSum(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === target) return true;
    }
  }
  return false;
}

// time complexity: O(n^2)
// space complexity: O(1)




// Efficient approach
function hasPairWithSum2(arr, target) {
  let set = new Set();

  for(let i = 0; i < arr.length; i++) {
    if(set.has(arr[i])) return true;

    set.add(target - arr[i]);
  }
  return false;
}

// time complexity: O(n)
// space complexity: O(n)