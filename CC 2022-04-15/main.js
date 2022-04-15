// Coding challenge 04/15/2022

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

// ex:
// For example, take 153 (3 digits), which is narcisstic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// and 1652 (4 digits), which isn't:
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

function narcissistic(value) {
  let arr = String(value).split('');
  let result = arr.map((num) => Math.pow(num, arr.length));
  let result2 = result.reduce((a, b) => a + b);
  return result2 === value ? true : false;
}

//or

// function narcissistic( value ) {
//   return ('' + value).split('').reduce(function(p, c){
//     return p + Math.pow(c, ('' + value).length)
//     }, 0) == value;
// }

narcissistic(371) // true
narcissistic(7) // true
