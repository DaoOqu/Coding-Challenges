// Coding challenge 04/21/2022

// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

function consecutive(arr) {
  var highest = arr[0];
  var lowest = arr[0];
  var numbersBetween = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    } else if (arr[i] < lowest) {
      lowest = arr[i];
    }
  }

  for (var j = lowest; j <= highest; j++) {
    if (arr.indexOf(j) == -1) {
      numbersBetween.push(j);
    }
  }

  return numbersBetween.length;
}

//or

function consecutive(arr){
  let l = arr.length;
  return l ? Math.max(...arr) - Math.min(...arr) - l + 1 : 0;
}

consecutive([4,8,6]) //2
consecutive([1,2,3,4]) //0)
consecutive([]) //0
consecutive([1]) //0