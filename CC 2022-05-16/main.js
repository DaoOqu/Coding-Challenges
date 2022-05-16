// Coding challenge 05/16/2022

// Given 2 arrays, create a function that lets a user know (true/false) whether these two arrays contain any common items

// ex:
// arr1 = ['a', 'b', 'c', 'x']
// arr2 = ['z', 'y', 'i']
// return false

// arr1 = ['a', 'b', 'c', 'x']
// arr2 = ['z', 'y', 'x']
// return true


// 2 parameters/inputs -> will they always be arrays? yes. How large will the inputs get? no size limit
// will they always be strings? any numbers? 
// will the array ever be empty?
// is time or space complexity more important?
// return boolean

// naive approach:
// we can compare every element in each array to find possible common items, typically done with a nested loops where the first element in the bigger array, if there is one, is compared with every element in the smaller one... etc.

// Considering this is a quadratic approach, it will be time consuming. so not the most efficient.

// const commonElements = (arr1, arr2) => {
//   for(let i = 0; i < arr1.length; i++) {
//     for(let j = 0; j < arr2.length; j++) {
//       if(arr1[i] === arr2[j]) return true;
//     }
//   }
//   return false;
// }

// time complexity: O(a*b)
// space complexity: O(1) -> not creating any new variables, just using existing inputs


// better approach

const commonElements = (arr1, arr2) => {
  // loop through arr1 and push -> obj {a: true, b: true, c: true, x: true}
  let map = {};

  for(let i = 0; i < arr1.length; i++) {
    if(!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  // loop through arr2 -> check and compare  obj properties and see if they match
  for(let i = 0; i < arr2.length; i++) {
    if(map[arr2[i]]) return true;
  }
  return false;

  // while theres still 2 loops, they wont be nested -> O(a + b)
}

// or 'cleaner' code (language specific)

const commonElements2 = (arr1, arr2) => {
  return arr1.some(item => arr2.includes(item));
}

// time complexity:  O(a + b)
// space complexity: O(a) -> created an obj and pushed an array into it