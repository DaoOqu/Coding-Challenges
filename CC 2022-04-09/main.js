// Coding challenge 04/09/2022

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case. In this case, all triangles must have surface greater than 0 to be accepted


function isTriangle(a,b,c) {
  //checking for all triangles, not just right triangles so pythagorean theorem is just one case

  return (a+b > c && b+c > a && c+a > b);
}

isTriangle(1,2,2); //true
isTriangle(7,2,2); //false