// Coding challenge 05/10/2022


// Given the head of a singly linked list, return true if it is a palindrome.

// ex:
// Input: head = [1,2,2,1]
// Output: true



// we can use the reverse property of arrays to help check if its a palindrome
// start by making a new array and pushing the value of each node as we iterate through it
// iterate through the linked-list using the next property and getting the value with the val property
// reverse the new array and store it
// iterate from the front of the reg array and iterate from the end of reversed array and compare values
// return true or false

var isPalindrome = (head) => {
  if (head === null) {
      return true
  }
  
  let node = head;
  let arr = new Array();
  
  while (node) {
      arr.push(node.val);
      node = node.next;
  }
  
  let reversedArr = arr.reverse();
  let index = 0;
  
  for (let i = reversedArr.length - 1; i >= 0; i--) {
      if (reversedArr[i] !== arr[index]) return false
      index++;
  }
  return true;
};

// time complexity: O(n^2)
// space complexity: O(n)



 
