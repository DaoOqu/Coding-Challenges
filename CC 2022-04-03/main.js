// Coding challenge 04/03/2022

// Given two arrays that are sorted, merge them into a bigger one that is still sorted
// K-way merge heap approach

// push smallest element of each array into min heap
// push next element from same array to the heap
// repeat to make a sorted traversal of all elements

arr1 = [0,3,4,31];
arr2 = [4,6,30];
// [0,3,4,4,6,30,31]

const mergeSortedArrays = (arr1, arr2) => {
  const mergedArr = [];
  let i = 0;
  let j = 0;
  
  // validate input
  if(arr1.length === 0) return arr2;
  if(arr2.length === 0) return arr1;

  // loop to compare the values one by one and push respective value
  while (arr1[i] || arr2[j]) {
    // number > undefined -> false
    // number < undefined -> false
    if(!arr2[j] || arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }
  return mergedArr;
}

// time complexity: O(n)
// space complexity: O(n)

console.log(mergeSortedArrays(arr1, arr2));