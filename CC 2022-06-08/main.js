// Coding challenge 06/08/2022


// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]



// push node values to an empty arrays and reverse them
// go from arr -> num and add them then -> stringify
// split then reverse

// create new node(s) and build list and pointers

var addTwoNumbers = function(l1, l2) {
  let arr1 = [];
  let arr2 = [];
  
  while(l1) {
    arr1.push(l1.val);
    l1 = l1.next;
  }
  
  while(l2) {
    arr2.push(l2.val);
    l2 = l2.next;
  }

  let num1 = BigInt(arr1.reverse().join(''));
  let num2 = BigInt(arr2.reverse().join(''));
  
  let arr3 = String(num1 + num2).split('').reverse();

  
  let newHead = new ListNode();
  let newPointer = newHead;
  
  for(let n of arr3) {
    let node = new ListNode(n);
    newPointer.next = node;
    newPointer = node;
  }
  return newHead.next;
  
};

// Time complexity: O(a + b) ???
// Space complexity: O(n) 
