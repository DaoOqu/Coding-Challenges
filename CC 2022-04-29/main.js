// Coding challenge 04/29/2022

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Input: ransomNote = "aa", magazine = "aab"
// Output: true



// two strings where b (or parts of b) must used to make a
// b cannot be shorter than a
// -> use for of to iterate char by char through string
// if magazine string doesnt inlude the current char return false
// if it does replace it to "build" the string ->
// return true if it completes the loop


const canConstruct = (ransomNote, magazine) => {
  for (const char of ransomNote) {
      if (!magazine.includes(char)) return false;
      magazine = magazine.replace(char, '');
  }
  return true;
};


canConstruct("a", "b"); // false
canConstruct("aa", "ab"); // false
canConstruct("aa", "aab"); // true