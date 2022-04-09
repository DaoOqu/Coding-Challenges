// Coding challenge 04/09/2022

//Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

//Ex: 
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
  //The number 0 is even and the details ask to return even for an empty array
  //Have to return a string not boolean

  let arrSum = array.reduce((a, b) => a + b, 0);
  return arrSum % 2 === 0 ? "even" : "odd";
}

oddOrEven([0]) //"even"
oddOrEven([0, 1, 4]) //"odd"
oddOrEven([0, -1, -5]) //"even"