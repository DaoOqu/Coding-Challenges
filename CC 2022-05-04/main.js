// Coding challenge 05/04/2022

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

 // ex:
// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6


// this is an array of arrays (list of lists)
// sum wealth across indivdual lists
// iterate through parent list -> [[0], [1], ...]
// [0] -> iterate through and sum integers
// return largest amount

var maximumWealth = function(accounts) {
    
  let result = 0;
  let sum = 0;
  
  accounts.forEach(element => {
      sum = element.reduce((a, b) => a + b, 0);
      // conditional to replace result when the value is bigger
      if (sum > result) result = sum;
  });
  
  return result; // 8 -> 10 
  
};

// or

var maximumWealth = function(accounts) {
    
  let result = [];
  let sum = 0;
  
  accounts.forEach(element => {
      sum = element.reduce((a, b) => a + b, 0);
      result.push(sum);
  });
  
  return Math.max(...result);
};

