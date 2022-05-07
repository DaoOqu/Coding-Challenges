// Coding challenge 05/07/2022

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.



// dynamic programming??

// will there always be a common prefix? -> no, return "" if that's the case
// are the strings within array validated? i.e null, undefined, empty. all one case?
//


var longestCommonPrefix = function(strs) {
    
  if (strs.length === 1) return strs[0]; // a single element is the answer
  let result = ""; // what we will return, including if there is no common prefix
  let i = 0;
  
  while (result.length < strs[0].length) { // our result length cant be bigger than 1st element length
      const currentPrefix = strs[0][i]; // initialize 1st index of 1st element
      if (strs.every(string => string[i] === currentPrefix)) { // compare prefix's char by char
          result += currentPrefix;
      } else {
          return result; // this will return "" for no common prefix
      }
      i++;
  }
  return result;
};

// time complexity: O(n)
// space complexity: O(n) i think
