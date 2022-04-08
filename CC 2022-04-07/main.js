// Coding challenge 04/07/2022

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


// Input: prices = [7,1,5,3,6,4]
// Output: 5





// does the buying and selling day have to be different?
// assuming the buy date (smaller index) must be before sell date (larger index)
// are all inputs within array validated? -> non-neg, whole integers
// what is the min/max # of inputs that can be given in array? -> 1 <= price <= 10^5

// return 0 when you cant achieve profit -> can never achieve profit if array is in order from biggest to smallest
// because next index will always be smaller than last, or if price.length = 1

// find the smallest value and then find the largest difference from that index forward
// anything preceeding that smallest value will be larger (i.e negative difference)
// if no larger index proceeding -> return 0 


// two pointer/sliding window technique because array-based problem where we want to calculate information
// about certain sub-sections of array

const maxProfit = prices => {
  let profit = 0;
  let leftIndex = 0;
  let rightIndex = 1;
  
  // loop that iterates through the array
      // track and subtract -> left and right (right - left)
      // compare difference against profit -> if bigger then re-initialize and increment rightIndex
      // if not bigger but still pos -> still increment rightIndex 
      // if not bigger but neg -> leftIndex > rightIndex -> rightIndex can potentially be the best buy date
      // re-initialize left with right -> increment the right
  // return profit
  
  
  while(rightIndex < prices.length) {
      const difference = prices[rightIndex] - prices[leftIndex];
      
      if(difference > profit) profit = difference;
      if(difference < 0) leftIndex = rightIndex;
      
      rightIndex++;
  }
  return profit;
}

// time complexity O(n)
// space complexity O(1)