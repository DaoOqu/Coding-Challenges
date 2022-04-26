// Coding challenge 04/25/2022


// Find the sum of the digits of all the numbers from 1 to N (both ends included).

// Examples
// # N = 4
// 1 + 2 + 3 + 4 = 10

// # N = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

// # N = 12
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

const twistedSum = n => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i < 10) {
      sum += i;
    }else {
      sum += i.toString().split('').reduce((a, b) => Number(a) + Number(b), 0);
    }
  }
  return sum;
}


twistedSum(3) // 6
twistedSum(10) // 46
twistedSum(11) // 48
twistedSum(12) // 51