// Coding challenge 05/30/2022

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0,1,1,2,3,5,8,13,21,34,55,89,144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values
// ex: num = 5 -> 2 + 3


// Iterative

function fibonacciIterative(num) {
  let arr = [0, 1];

  for(let i = 2; i < num + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  
  return arr[num];
}

// Time complexity: O(n)
// Space complexity: O(n)


// Recursive

function fibonacciRecursive(num) {
  if(num < 2) return num;

  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}

console.log(fibonacciIterative(2));

// Time complexity: O(2^n)
// Space complexity: O(1)