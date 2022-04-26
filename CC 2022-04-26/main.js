// Coding challenge 04/26/2022

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

const spinWords = string => {
  let strArr = string.split(' ');
  let result = '';
  strArr.map((el, i) => {
    if (el.length >= 5) {
      strArr[i] = el.split('').reverse().join('');
    }else {
      strArr[i] = el;
    }
    result = strArr.join(' ');
  });
  return result;
}

// or

const spinWord = string => {
  return string.split(' ').map(word => {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

spinWords( "Hey fellow warriors" ) // "Hey wollef sroirraw"
spinWords( "This is a test") // "This is a test"
spinWords( "This is another test" ) // "This is rehtona test"