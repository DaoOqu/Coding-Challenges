// Coding challenge 04/28/2022

// Given the head of a singly linked list, return true if it is a palindrome.

// Input: head = [1,2,2,1]
// Output: true

// Input: head = [1,2]
// Output: false



// Notes:
// we can use the reverse property of arrays to help check if its a palindrome
// start by making a new array and pushing the value of each node as we iterate through it
// iterate through the linked-list using the next property and getting the value with the val property
// reverse the new array and store it
// iterate from the front of the reg array and iterate from the end of reversed array and compare values
// return true or false 

const isPalindrome = (head) => {
  if (head === null) {
      return true
  }
  
  let node = head;
  let arr = new Array();
  
  while (node) {
      arr.push(node.val);
      node = node.next;
  }
  
  for (let i = 0; i < arr.length/2; i++) {
      if (arr[i] !== arr[arr.length - i - 1]) return false;
  }
  return true;
};

isPalindrome([1,2,2,2]) // true
isPalindrome([1,2]) // false