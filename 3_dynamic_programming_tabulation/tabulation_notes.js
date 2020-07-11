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

/*
The length of the table is roughly 'n' elements long, so our algorithm will have
an O(n) runtime. The space by our algorithm is also O(n) due to the size of the
table. 

*/


/*
Aside: Refactoring for O(1) space
  We can cut down on the space used by our function. At any point of our loop we 
  really only need the previous two subproblems, so there is little utility to 
  storing the full array. This refactor is easy to do by using two variables:

*/

// Tabulated Fib: Refactored
const refactoredTabFib = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let secondLast = 0;
  let last = 1;

  for (let i = 2; i <= n; i++) {
    let temp = last;
    last += secondLast;
    secondLast = temp;
  }

  return last;
}

console.log(refactoredTabFib(7)); // 13


/*
The Tabulation Formula:
  Bear in mind that Tabulation or Memoization can only be applied to problems 
  that can be divided into many subproblems of similar structure.

  1.) Create the table array based off of the size of the input
    -> this is not always straightforwar, if you have multiple args

  2.) Initialize some values in the table that 'answer' the trivially small
  subproblem
    -> usually this means initializing the first entry of the table

  3.) Iterate through the array and fill in remaining entries
    -> calculating the next entry should require using other entries of the 
    table

  4.) Your final answer is the last entry in the table (usually)

*/