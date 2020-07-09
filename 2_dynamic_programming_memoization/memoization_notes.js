/*
Dynamic Programming:
  A design pattern used to solve a large problem by dividing it into smaller
  subproblems that are more manageable. This creates efficency and allows us to
  avoid duplicate calculations. This is done by storing each 'solved' subproblem
  in some sort of data structure.  

Example:
  Using pennies, nickels, dimes, and quarters, what is the smallest combination
  of coins that total 27 cents?

Implentation:
  -> Memoization
  -> Tabulation


Memoization:
  Everytime we call a function with a particular argument, we expect to get the
  same result each time. Memoization allows us to store the result of a function
  in an object in order to be recalled later on. Two features make this work:
    -> the function is recursive
    -> the additional data structure used is typically an object (known as a memo)

*/

const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(6));  // 720, requires 6 calls
console.log(factorial(6));  // 720, requires 6 calls
console.log(factorial(5));  // 120, requires 5 calls
console.log(factorial(7));  // 5040, requires 7 calls

// Memoized
let memo = {};

const memoFactorial = (n) => {
  // if we have calculated factorial(n) previously, fetch the stored value in memo
  if (n in memo) return memo[n];
  if (n === 1) return 1;

  // otherwise, we have not calculated factorial(n) previously, so calculate it now,
  // but store the result in case we need it again in the future
  memo[n] = n * memoFactorial(n - 1);
  return memo[n];
}

console.log(memoFactorial(6));  // 720, requires 6 calls
console.log(memoFactorial(6));  // 720, requires 1 call 
console.log(memoFactorial(5));  // 120, requires 1 call
console.log(memoFactorial(7));  // 5040, requires 2 calls

console.log(memo); // {'2': 2, '3': 6, '4': 24, '5': 120, '6': 720, '7': 5040}


const fib = (n) => {
  if (n === 1 || n == 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));    // 8
// console.log(fib(50));   // very slow

// Memoized
const memoFib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 1 || n === 2 ) return 1;

  memo[n] = memoFib(n - 1, memo) + memoFib(n - 2, memo);
  return memo[n];
}

console.log(memoFib(6));    // 8
console.log(memoFib(50));   // 12586269025


/*
The Memoization Formula
  1.) Write an unoptimized, brute force recursion and make sure it works.
  2.) Add the memo object as an additional arg to the function. The keys will
  represent unique arguments to the function, and their values will represent
  the results for those arguments.
  3.) Add a base case condition to the function that returns the stored value,
  if the function arg is in the memo.
  4.) Before you return the result of the recursive case, store it in the memo
  as a value and make the function's arg it's key.

*/