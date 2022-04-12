// Coding challenge 04/11/2022

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// ex: 
// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
  if (s.length % 2 === 0) {
    return s[Math.floor((s.length - 1) / 2)] + s[Math.ceil((s.length - 1) / 2)];
  }else return s[(s.length - 1) / 2];
}

//or

// function getMiddle(s) {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

getMiddle("test") //"es"
getMiddle("testing") //"t"
getMiddle("middle") //"dd"
getMiddle("A") //"A"
