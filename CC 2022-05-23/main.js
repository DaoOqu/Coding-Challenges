// Coding challenge 05/23/2022

// Given the parameter strArr, which will contain 2 strings representing two comma seperated lists of keypresses, return true if the keypresses produce the same printable string and false if they do not.
// A keypress can be either a printable character or a backspace represented by '-B'. You can produce a printable string from such a string of keypresses by having backspaces erase one preceding character

// ex: ["a,a,a,-B,c", "a,c"]
// output: false

// ex: ["a,b,c,d,d,-B", "a,b,c,d"]
// output: true


// one input that consists of two strings seperated by a comma
// -B signifies backspace

// stack problem

function equivalentKeypresses(strArr) {
  // split each element of array
  const arr1= strArr[0].split(',');
  const arr2= strArr[1].split(',');

  // initialize arrays to compare
  const firstStr = [];
  const secondStr = [];

  // loop through arrays using forEach
  arr1.forEach(char => {
    // if backspace is detected, pop from array
    if(char === '-B') {
      firstStr.pop;
      // if it isnt push it into first string arr
    } else {
      firstStr.push(char);
    }
  });

  // same methods used for second arr
  arr2.forEach(char => {
    // if backspace is detected, pop from array
    if(char === '-B') {
      secondStr.pop;
      // if it isnt push it into first string arr
    } else {
      secondStr.push(char);
    }
  });

  // compare the arrays and return boolean
  return(firstStr.join() === secondStr.join());
}

// time complexity: O(n)
// space complexity: O(n)
