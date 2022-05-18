// Coding challenge 05/17/2022

// Given an array, return the number that occurs a second time, first.

//ex: 
// [2,5,1,2,3,4,1,2,4] return 2
// [2,1,1,2,3,5,1,2,4] return 1
// [2,3,4,5] return undefined

// validate inputs -> always whole positive numbers? empty array? at least two or more elements?


// naive approach
const firstRecurringNum2 = arr => {

  // if(arr.length < 2) return undefined; -> not needed. The program below takes care of empty or < 2 arrays

  let len = arr.length;
  
  for(let i = 0; i < len; i++) { 
    for(let j = i + 1; j < len; j++) {
      // if it finds a match, it re-initializes len to the j index
      // this shortens the array window to possibly detect a pair of numbers that occured first
      // forces the loop to run through entire array, shortening up the window every time an occurence happens
      if(arr[i] === arr[j]) len = j;
    }
  }
  // after the loop is done -> if the conditional is satisfied then -> 
  // return the first occurence within the shortened window
  if(len < arr.length) return arr[len];
  // or undefined if conditional is not satisfied
  return undefined;
}

// time complexity: O(n^2)
// space complexity: O(1)



// better approach
const firstRecurringNum = arr => {

  // create hashmap
  let set = new Set();
  
  // if(arr.length < 2) return undefined; -> not needed. The program below takes care of empty or < 2 arrays
  
  // iterate through array and check if each value has been seen before
  for(let i = 0; i < arr.length; i++) {
    // if yes, return that value
    if(set.has(arr[i])) return arr[i];

    // if not, push it to hashmap
    set.add(arr[i]);
  }
  // if none recurr, return undefined
  return undefined;
} 

// time complexity: O(n)
// space complexity: O(n)

arr = [2,5,1,2,3,4,1,2,4];
arr1 = [2,1,1,2,3,5,1,2,4];
arr2 = [2,3,4,5];
arr3 = [2];
arr4 = [];

console.log(firstRecurringNum(arr1));
console.log(firstRecurringNum2(arr1));