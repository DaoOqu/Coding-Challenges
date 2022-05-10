// Coding challenge 05/09/2022

// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

 
// ex:
// Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// Output: 3



// are all inputs validated?
// Assume gas.length == cost.length = n
// only one unique answer
// return -1 if no answer


// gameplan: 
// start by iterating at 0th index and subtracting gas - cost at the ith index -> track it to compare against 0
// "move" to the next index if > 0
// if not, reset variables that track the difference between gas and cost but keep iterating
// track starting index with individual counter

// ultimately, tracking the total sum of the differences at each index allows us to realize if a solution exists
// return starting index variable


var canCompleteCircuit = function(gas, cost) {
  let startCounter = 0;
  let gasTank = 0;
  let sumOfGasValues = 0;

  
  for(let i = 0; i < gas.length; i++) {
      const diff = gas[i] - cost[i]; // leftover gas, if any
      gasTank += diff; // track seperately because it can get reset
      
      if(gasTank < 0) { // conditional to see if theres enough gas to travel
          startCounter = i + 1; // if not move to the next starting index
          gasTank = 0; // reset all values
      }
      sumOfGasValues += diff // tells us if soltion exists
  }
  return sumOfGasValues >= 0 ? startCounter : -1
};