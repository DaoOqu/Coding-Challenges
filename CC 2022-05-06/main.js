// Coding challenge 05/06/2022

// Given a string s, find the length of the longest substring without repeating characters.


// ex:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

//Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.



// Dynamic programming question??

// long subSTRING not subSEQUENCE meaning must be in line in the original string
// pwwkew -> substring: wke, subsequence: pwke

// one of each character per substring


const lengthOfLongestSubstring = (s) => {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;
  
  const map = new Map(); //hashnmap
  let i = 0; // pointer 1
  let j = 0; // pointer 2
  let max = 0; // the value or length we are going to return 
  
  while (i < s.length) {
      while (map.has(s[i])) { // check if char is in hashmap
          map.delete(s[j]); // if yes, delete it (meaning it will delete all extra/repeating characters)
          j++ 
      }
      map.set(s[i]); // if not, add it 
      max = Math.max(max, i - j + 1); // calculate the max substring from set (i - j + 1)
  i++; 
  }
  return max; // return max values which would have the substring
};

// time complexity: O(n^2)
// space complexity: O()