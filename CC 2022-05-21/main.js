// Coding challenge 05/21/2022

// Given the num parameter, return the string true if the parameter is a prime Number, otherwise return the string false. The range will be between 1 and 2^16 

// ex:
// input: 19
// output: true

// input: 110
// output: false

// prime number is that which is greater than 1 that is not a product of two smaller natural numbers
// only has two factors -> itself and 1

// ex: 5 -> prime 
// ex: 6 -> not prime

// so if a number is divisible by any number larger than 1 it is prime

// check square root
// if we can't find any factors less than or equal to the square root of num, then num must be prime

function primeTime(num) {
  let squareRoot = Math.sqrt(num);
  for(let i = 2; i <= squareRoot; i++) {
    if(num % i === 0) return false;
  }
  return num > 1;
}

// time complexity: O(n) -> O(sqrt(n))
// space complexity: O(1)
