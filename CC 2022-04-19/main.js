// Coding challenge 04/19/2022

// implement a program that sums the digits of a non-negative integer. For example, the sum of 3433 digits is 13.

// Digits can be a number, a string, or undefined. In case of undefined return an empty string ''.

// To give you a little more excitement, the program will not only write the result of the sum, but also write all the sums used: 3 + 4 + 3 + 3 = 13.

function sum(n) {
  if(n === undefined) return '';
  let sum = n.toString().split('').reduce((el, i) => parseInt(el) + parseInt(i));
  let str = n.toString().split('').join(' + ');
  return str + " = " + sum;
}

sum("3433") // "3 + 4 + 3 + 3 = 13")
sum("64323") // "6 + 4 + 3 + 2 + 3 = 18")
sum("8") //"8 = 8")