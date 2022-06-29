// Coding challenge 06/28/2022

// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).


// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.




// 2-d array -> n number of items -> n = points.length

// [[1,3],[-2,2]] -> (0,0)
// √(x1 - x2)2 + (y1 - y2)2)
// 

// some data that will tell us the distance 
// O(n) 
// hashmap (key -> index, value -> distance)
// iterate the values of map -> kth closest points
// if sort -> O(n log n)
// return as 2-d array

var kClosest = function(points, k) {
  let arr = [];
  
  for(let i = 0; i < points.length; i++) {
    let x1 = points[i][0];
    let y1 = points[i][1];
    
    // dont need square root since every operation gets it 
    // (sqrt(10) > sqrt(8) === 10 > 8)
    let dis = Math.pow(x1, 2) + Math.pow(y1, 2);
    arr[i] = [[x1, y1], dis];
  }
  
  arr.sort((a, b) => a[1] - b[1]);
  
  let arr2 = [];
  for(let i = 0; i < k; i++) {
    arr2.push(arr[i][0]);
  }
  
  return arr2;
};

// time: O(n + m) + O(n log n) -> O(n log n)
// space O(n) -> two arrays



// var kClosest = function(points, k) {
//     // Sort the array with a custom lambda comparator function
//     points.sort((a, b) => squaredDistance(a) - squaredDistance(b))
    
//     // Return the first k elements of the sorted array
//     return points.slice(0, k)
// };

// // Calculate and return the squared Euclidean distance
// const squaredDistance = ([x, y]) => x ** 2 + y ** 2