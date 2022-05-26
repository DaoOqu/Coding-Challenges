// Coding challenge 05/25/2022

// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// push(x) Pushes element x to the back of the queue.
// pop() Removes the element from the front of the queue and returns it.
// peek() Returns the element at the front of the queue.
// empty() Returns true if the queue is empty, false otherwise.

// Notes:
// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

// Example:
// Input:
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]

// Explanation:
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false



var MyQueue = function() {
  this.pushStack = []; // this stack is used for queue push method
  this.popStack = []; // this stack is used for queue pop method 
  
  // function to push and fill the pop stack in reverse from the push stack if not already filled
  this.pushStackToPopStack = () => {
      // checks the length of push stack, which is used to fill pop stack
      if(!this.pushStack.length) return;
      
      if(this.popStack.length === 0) {
          while(this.pushStack.length > 0) {
              this.popStack.push(this.pushStack.pop());
          }
      }
  } 
};

MyQueue.prototype.push = function(x) {
  // same for both stack and queue -> pushes item at the end 
  this.pushStack.push(x);
};

MyQueue.prototype.pop = function() {
  // fills pop stack in reverse with items from push stack
  this.pushStackToPopStack();
  
  // removes and returns the item at the "front" of the queue
  return this.popStack.pop();
};

MyQueue.prototype.peek = function() {
  // fills pop stack in reverse with items from push stack
  this.pushStackToPopStack();
  
  // returns the item at the "front" of the queue
  return this.popStack[this.popStack.length - 1];
};

MyQueue.prototype.empty = function() {
  // fills pop stack in reverse with items from push stack
  this.pushStackToPopStack();
  
  // returns true if queue is empty, false if it isnt
  return this.popStack.length === 0;
};