// Coding challenge 04/12/2022

//Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

//ex:

// [90,98,89,100,100,86,94] -> 94
// [49,3,5,300,7] -> 73

let average = scores => {
  return Math.round(scores.reduce((a,b) => a + b, 0) / scores.length);
}

score([90,98,89,100,100,86,94]) //94
score([49,3,5,300,7]) //73