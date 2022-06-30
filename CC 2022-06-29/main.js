// Coding challenge 06/29/2022

// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.


// Input: piles = [3,6,7,11], h = 8
// Output: 4

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23




// can i assume the input is an array?
// are the inputs validated? Whole? Negative?
// will the inputs ever be empty? or empty items within input?
// what am I returning?

// if the number of hours is equal to input length then ->
// the min k has to be largest input
// the number of hours cannot be larger then input length ->
// or else it wouldnt be possible to finish all piles 

// BRUTE FORCE O(max(p) * p)
// so k has to be a min of 1 and max of largest item in input
// implement k = [1....max P] -> and the first number to satisfy requirements is answer

// BINARY SEARCH
// take k = [1... max P], calculate middle and section the array in half
// see if k[mid] statifies requirements, if it does ->
// try the smaller values to see if there's a smaller answer
// if it didn't satisfy -> try the larger section
// either way, re-initialize mid and rinse and repeat

var minEatingSpeed = function(piles, h) {  
  let left = 1;
  let right = Math.max(...piles);
  let res = right;
  
  while(left <= right) {
    let mid = Math.floor((left + right)/2);
    let hours = 0;
    
    for(let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / mid);
    }
    
    if(hours <= h) {
        res = mid;      
        right = mid - 1;
    }
    else {
        left = mid + 1;
    }
  }
  return res;
};

// Time complexity: O(n * log (p)) -> where n is lenght of input and p is max item in input
// space complexity: O(1) -> no data structures initialized 