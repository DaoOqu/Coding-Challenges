// Coding challenge 04/10/2022

// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Ex:
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

function halvingSum(n) {
  let sum = n;
  let i = 2;

  while (n/i >= 1) {
    sum += Math.floor(n/i);
    i *= 2;
  }
  return sum;
}

//or

// function halvingSum(n) {
//   if(n === 1) return n;
//   return n + halvingSum(Math.floor(n/2));
// }

//or

// function halvingSum(n) {
//   let sum = 0;
//   while (n > 0) {
//     sum += n;
//     n = Math.floor(n / 2);
//   }
//   return sum;
// }

halvingSum(25) //47