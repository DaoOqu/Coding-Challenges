// Coding challenge 06/26/2022

// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

// Note that division between two integers should truncate toward zero.

// It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.


// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

// are all inputs validated?
// will there always be at least two integers before an operation?

// create a stack, iterate through the array and push all numbers into it in order
// when an operation is encountered -> pop twice and perform the operation
// push the result into the stack
// repeat until input is iterated
// return the only item that should be in the stack

var evalRPN = function(tokens) {
  let stack = [];
  let result = 0;
  
  for(let i = 0; i < tokens.length; i++) {
    if(tokens[i] === "+") {
      stack.push(stack.pop() + stack.pop());
    }
    else if(tokens[i] === "-") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b - a);
    }
    else if(tokens[i] === "*") {
      stack.push(stack.pop() * stack.pop());
    }
    else if(tokens[i] === "/") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b / a);
    }
    else stack.push(BigInt(tokens[i]));
  }
  return stack[0];
};


var evalRPN = function(tokens) {
  let stack = [];
  let result = 0;
  
  for(let element of tokens) {
    if(element === "+") {
      stack.push(stack.pop() + stack.pop());
    }
    else if(element === "-") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b - a);
    }
    else if(element === "*") {
      stack.push(stack.pop() * stack.pop());
    }
    else if(element === "/") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b / a);
    }
    else stack.push(BigInt(element));
  }
  return stack[0];
};

// Time complexity: O(n) -> where n is the size of the input
// Space complexity: O(n) -> initialized stack