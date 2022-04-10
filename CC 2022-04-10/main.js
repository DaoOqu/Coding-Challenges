// Coding challenge 04/10/2022

//Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

// you can put at most 8 eggs into the pot at once
// it takes 5 minutes to boil an egg
// we assume, that the water is boiling all the time (no time to heat up)
// for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it

//Ex:
// 0 -> 0
// 5 -> 5
//10 -> 10

function cookingTime(eggs) {
  let time;
  time = Math.ceil(eggs/8) * 5;
  return time;
}

//or

// function cookingTime(eggs) {
//   return Math.ceil(eggs/8) * 5;;
// }


cookingTime(0) // 0
cookingTime(5) // 5
cookingTime(10) // 10