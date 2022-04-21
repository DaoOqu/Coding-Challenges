// Coding challenge 04/20/2022

// generate a function that computes the series starting from 0 and ending until the given number.

// ex:
// (6) "0+1+2+3+4+5+6 = 21"

const SequenceSum = (function() {
  
  function SequenceSum() {}
  
  SequenceSum.showSequence = function(count) {
    let sum = 0;
    let input = '';
    
    if (count < 0) return `${count}<0`
    if (count === 0) return "0=0"
    
    for (let i = 0; i <= count; i++) {
      if (i === count) {
        input += String(i);
      }else {
        input += String(i) + '+';
      }
      sum += i;
    }
    return input + ' = ' + sum;
  };
  return SequenceSum;
})();


SequenceSum.showSequence(6) // "0+1+2+3+4+5+6 = 21"