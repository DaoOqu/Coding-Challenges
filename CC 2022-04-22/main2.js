// Coding challenge 04/22/2022

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples:S
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  const count = {};
  
  for (const element of A) {
    if (count[element]) {
      count[element] += 1;
    }else {
      count[element] = 1;
    }
  }
  
  const keys = Object.keys(count);
  let result;
  keys.forEach(key => {
    if (count[key] % 2 !== 0) {
      result = Number(key);
    }
  });
  return result;
}

// or

function findOdd(A) {
  let obj = {};
  
  A.forEach(el => {
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for (prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop);
  }
}