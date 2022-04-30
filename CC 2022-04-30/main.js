// Coding challenge 04/30/2022

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.


// Example:
// Input: n = 3
// Output: ["1","2","Fizz"]

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]


const fizzBuzz = (n) => {
  let strArr = new Array();
  
  for (let i = 1; i <=n; i++) {
      if (i % 15 === 0) {
          strArr.push("FizzBuzz")
      }else if (i % 5 === 0) {
          strArr.push("Buzz")
      }else if (i % 3 === 0) {
          strArr.push("Fizz")
      }else strArr.push(String(i))
  }
  return strArr;
};

fizzBuzz(3) // ["1","2","Fizz"]
fizzBuzz(5) // ["1","2","Fizz","4","Buzz"]
fizzBuzz(15) // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]