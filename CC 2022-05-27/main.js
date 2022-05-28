// Coding challenge 05/27/2022

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]'



var MinStack = function() {
  this.stack = [];
  this.min = [];
};


MinStack.prototype.push = function(val) {
  this.stack.push(val);
  
  const lastMin = this.min[this.min.length - 1];
  
  if(lastMin === undefined || val < lastMin) {
    this.min.push(val);
  } else {
    this.min.push(lastMin);
  }
};


MinStack.prototype.pop = function() {
  this.stack.pop();
  this.min.pop();
};


MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};


MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1];
};
