// Coding challenge 05/03/2022

// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

//ex:
// Input: num = 14
// Output: 6


// positive number
// even -> divide by 2
// odd -> subtract 1
// count the number of operations
// every number will end up being 1 then subtracted to get zero

var numberOfSteps = function(num) {
  // set our counter -> to be returned at the end
      
      let input = num;
      let counter = 0;
      
  // set up loop & conditional -> while & if
      
      while (input != 0) {
          
  // check if even or odd using modulus 
          
          (input % 2 == 0) ? input /= 2 : input -= 1;
  
          counter++;
      }
      return counter;
  };

// O(n)
// O(1) -> i think