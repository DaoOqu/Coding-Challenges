// Coding challenge 06/19/2022

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

/* 
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/



// will the string contain non-alphanumeric characters? (meaning anything thats not letters & numbers)
// will the input ever be empty?
// will there be any non printable characters? 

// remove non letter and non number characters and spaces
// change everything that remains to lower case
// two pointers - one at the beginning one at the end
// compare as they iterate to the middle (first < last)

const isPalindrome = (s) => {
  if(s.length < 2) return true;
  
  let str = formatString(s);
  
  let first = 0;
  let last = str.length - 1;
  
  while(first < last) {
    if(str[first] !== str[last]) return false;
    
    first++;
    last--;
  }
  return true;
  
};

const formatString = (s) => {
  let res = "";
  
  for(let char of s) {
    if(char === " ") continue;
    
    let lower = char.toLowerCase();
    let upper = char.toUpperCase();
    
    if(!isNaN(char) || lower !== upper) res += lower;
  }
  return res;
}

// Time complexity: O(n)
// Space  complexity: O(1)