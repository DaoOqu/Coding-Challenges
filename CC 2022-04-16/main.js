// Coding challenge 04/16/2022

// Write a function that returns both the minimum and maximum number of the given list/array.

// Ex:
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]

function minMax (arr) {
  arr = arr.sort((a, b) => a - b);
  let newArr = [];
  newArr.push(arr[0], arr[arr.length - 1]);
  return newArr;
}

minMax([1,2,3,4,5]) // [1,5]
minMax([2334454, 5]) // [5, 2334454]
minMax([1]) // [1]