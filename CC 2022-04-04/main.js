// Coding challenge 04/04/2022

// create function that reverses a string:
// 'Hi my name is David'
// 'divaD si eman ym iH'

str = 'Hi my name is David';

// function reverse(str) {
//   // validate inputs
//   if(typeof str !== 'string' || !str) return 'Not good'

//   // turn the str into arr
//   let arr = str.split('');
//   // reverse the array then turn back into str and return
//   return arr.reverse().join('');
// }


// without using reverse method

function reverse(str) {
  // validate inputs
  if(typeof str !== 'string' || !str) return 'Not good'

  // initialize empty array
  const backwards = [];
  // push the string in backwards into array
  for(let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i])
  }
  // turn array into string and return
  return backwards.join('');
}


// time complexity: O(n)
// space complexity: O(n)

console.log(reverse(str));
