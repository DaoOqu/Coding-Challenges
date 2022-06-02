// Coding challenge 06/01/2022

//Implement a function that reverses a string using iteration and then recursion!


function reverseStringIterative(str) {
  let arr = str.split('');
  let revArr = [];

  if(str.length < 1) return str;
  
  while(arr.length > 0) {
    revArr.push(arr.pop());
  }
  return revArr.join('');
}

console.log(reverseStringIterative('yoyo mastery'));
//should return: 'yretsam oyoy'


function reverseStringRecursive(str) {
  if(str === '') {
    return ''
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseStringRecursive('yoyo mastery'));
//should return: 'yretsam oyoy'