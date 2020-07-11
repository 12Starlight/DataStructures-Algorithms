/*
Tabulation: Dynamic Programming:
  To solve large problems by breaking them down into many subproblems. This is 
  done by:
    -> the function is iterative and NOT recursive
    -> the additional data structure used is typically an array (we refer to this
      as a table!)
      -> Note: most memoization problems can be solved with tabulation

Tabulation is all about creating a table (array) and filling it out with 
elements. This is done by filling entries from left to right. This means that the 
first entry of our table (first element of the array) will correspond to the 
smallest subproblem. Naturally, the final entry of our table (last element of the
array) will represent the largest problem, which is also our final answer. 

*/

// Tabulation: Fib
// We want fib(n) to return the n-th number of the Fibonacci squence
const tabulatedFib = (n) => {
  // create a blank array of length 'n'
  let table = new Array(n);

  // seed teh first two values
  table[0] = 0;
  table[1] = 1;

  // complete the table by moving from left to right,
  // following the fibonacci pattern
  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}

console.log(tabulatedFib(7)); // 13