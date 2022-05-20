// Coding challenge 05/20/2022

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "acca", t = "ccac"
// Output: false

// given two strings, will they always be valid chars? nums? symbols?
// will the strings have at least one char?
// will the strings always be lower case?
// will the strings be the same length?
// if string1 is an anagram of string 2 then vice versa is true


// less optimal solution:
var isAnagram = function(s, t) {
  // if strings are not the same length, return false
  if(s.length !== t.length) return false;
  
  // create arrays out of strings and sort
  let arrS = s.split('').sort();
  let arrT = t.split('').sort();
  
  for(let i = 0; i < arrS.length; i++) {
    // compare chars in both arrays
    // return false if not the same at any point
    if(arrS[i] !== arrT[i]) return false;
  }
  return true;
};

// time complexity: O(nlogn) -> two sorts
// space complexity: O(n) -> created array


// optimal solution using hashmap:

// what will we do with more than one of the same char?
// ex: anagram -> 3 'a'
var isAnagram = function(s, t) {
  // if strings are not the same length, return false
  if(s.length !== t.length) return false;
  
  // create map for char key and value to char counter
  let map = new Map();
  
  for(let i = 0; i < s.length; i++) {
    if(map[s[i]]) {
      map[s[i]]++;
    } else map[s[i]] = 2;
  }
  
  for(let i = 0; i < t.length; i++) {
    map[t[i]]--;
    if(map[t[i]] < 1 || !map[t[i]]) return false;
  }
  return true;
  
};

// time complexity: O(a + b) -> two loops not nested
// space complexity: O(n) -> created hashmap