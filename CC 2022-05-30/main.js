// Coding challenge 05/30/2022

// Write two functions that finds the factorial of any number. 
// One should use recursive, the other should just use a for loop

// 5! -> 5*4*3*2*1 = 120


// Recursive

function findFactorialRecursive(num) {
  if(num < 2) return 1;
  if(num === 2) return 2;

  return num * findFactorialRecursive(num - 1);
}

// Time complexity: O(n)
// Space complexity; O(1)


// Iterative 

// function findFactorialIterative(num) {
//   let answer = 1;

//   for(let i = num; i > 0; i--) {
//     answer *= i;
//   }
//   return answer;
// }

// OR

function findFactorialIterative(num) {
  let answer = 1;
  
  if(num === 2) answer = 2;
  
  for(let i = 2; i <= num; i++) {
    answer *= i;
  }
  return answer;
}

// Time complexity: O(n)
// Space complexity; O(1)

console.log(findFactorialRecursive(5));