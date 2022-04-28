// Coding challenge 04/28/2022

// Given the head of a singly linked list, return true if it is a palindrome.

// Input: head = [1,2,2,1]
// Output: true

// Input: head = [1,2]
// Output: false


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