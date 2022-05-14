// Coding challenge 05/14/2022

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 
// Input: s = "(]"
// Output: false

// Input: s = "()[]{}"
// Output: true


// stack is a structure that follow last in, first out
// similar to array but instead anything pushed and taken is from the head
// any open bracket must have a closed bracket

// () 
// ['(']

const isValid = s => {
  // initialize array to imitate stack
  const stack = [];
  
  for(let c of s) {
    // if we encounter a left bracket, push that bracket to the stack
    if(c === '[' || c === '{' || c === '(') {
      stack.push(c);
    }
    // if we encounter a right bracket, pop and compare
    else if(c === '}') {
      if(stack.pop() !== '{') return 0;
    }else if(c === ')') {
      if(stack.pop() !== '(') return 0;
    }else if(c === ']') {
      if(stack.pop() !== '[') return 0;
    }
    
  }
  // if brackets are left in string, input string is not valid
  return stack.length ? false : true;
  
}

// time complexity: O(n)
// space complexity: O(n)