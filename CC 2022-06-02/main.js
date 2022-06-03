// Coding challenge 06/02/2022


// Implement a function that reverses a string using iteration and then recursion
// ex: 'yoyo mastery'
// should return: 'yretsam oyoy'


function reverseStringIterative(str) {
  let arr = str.split('');
  let revArr = [];

  if(typeof str !== 'string' || !str) return 'Not good'
  if(str.length < 1) return str;
  
  while(arr.length > 0) {
    revArr.push(arr.pop());
  }
  return revArr.join('');
}

console.log(reverseStringIterative('yoyo mastery'));
// Time complexity: O(n)
// Space complexity: O(n)



function reverseStringRecursive(str) {
  if(str === '') {
    return ''
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseStringRecursive('yoyo mastery'));
// Time complexity: O(2^n)
// Space complexity: O(1)