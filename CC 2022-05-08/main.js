// Coding challenge 05/08/2022

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


// hashmap problem
// take the string and sort it and check if the sorted version is in the map
// if it is -> add unsorted str to that map's array
// if not -> set the map with sorted str as key (to look up later) and unsorted as first value in an array of values

// create and return an array from the values of the map



const groupAnagrams = (strs) => {
  let arrMap = new Map();
  
  for (let i of strs) { // O(n)
      let sortStr = i.split('').sort().join(''); // O(nlog(n))
      if (arrMap.has(sortStr)) {
          arrMap.get(sortStr).push(i);
      } else {
          arrMap.set(sortStr, [i]);
      }
  }
  return Array.from(arrMap.values()); 
};

// Time complexity -> O(n * nlog(n))
// Space complexity -> O(n)