// Coding challenge 06/25/2022

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Input: n = 1
// Output: ["()"]


// will we always be given at least one pair of parentheses?

// valid parentheses consists of opening/closing in the correct order
// even number of opening/closing brackets

// only add open parentheses if open < n
// only add closed parentheses if closed < open
// valid IFF open === closed === n

var generateParenthesis = function(n) { 
  let stack = [];
  let res = [];
  
  const backtrack = (open, closed) => {
    if(open === n && closed === n) {
      res.push(stack.join(""));
    }
    if(open < n) {
      stack.push("(");
      backtrack(open + 1, closed);
      stack.pop();
    }
    if(closed < open) {
      stack.push(")");
      backtrack(open, closed + 1);
      stack.pop();
    }
  }
  
  backtrack(0, 0);
  return res;
};

// Time complexity: O(2^n)?? O(n*2^2n)?? O(2^2n)??
// Space complexity: O(n) ??