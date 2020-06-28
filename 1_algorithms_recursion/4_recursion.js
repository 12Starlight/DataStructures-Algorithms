/*
Anatomy of a Recursive Function
  In recursive functions, we need to implement a way to stop the recursive loop
  and prevent it from looping forever. We took care of the infinite loop issue in
  our 'countDown' by using an if statement that prevents another recursive call.
  In general, we call such a statement the BASE CASE

  A recursive function consists of two fundamental parts:
    -> The BASE CASE where we halt the recursion by bot making a further call
    -> The RECURSIVE STEP where we continue the recursion by making another 
      subsequent call


Factorial: Write a method 'factorial(n)' which takes a number and returns the 
factorial of n. A factorial is the product of all whole numbers between 1 and n,
inclusive. For example, 'factorial(5)' is 5 * 4 * 3 * 2 * 1 = 120.

If we lay out the math used to calculate the factorial of some numbers, we will
notice a pattern:

factorial(5) = 5 * 4 * 3 * 2 * 1
factorial(4) = 4 * 3 * 2 * 1
factorial(3) = 3 * 2 * 1
factorial(2) = 2 * 1
factorial(1) = 1 (base case)


The same pattern, just programmatically:

factorial(5) = 5 * factorial(4)
factorial(4) = 4 * factorial(3)
factorial(3) = 3 * factorial(2)
factorial(2) = 2 * factorial(1)
factorial(1) = 1 (base case)

Or in general, if 'n' is some number:
  -> factorial(n) = n * factorial(n - 1)
  -> factorial(1) = 1

*/

// Implemented
const factorial = (n) => {
  if (n === 1) return 1; // factorial(0) = 1, so this could be used instead

  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120


/*
Solving a Problem Recursively:
  Because every recursive problem must have a base and recursive case, we can 
  follow these steps to help us write a recursive method:

  1.) Identify the base case in the problem and code it. The base case should
  explicitly handle the scenario(s) where the arguments are so trivially 'small'
  that we immediately know the result without further calculation. Be sure it 
  works by testing it. 

  2.) Solve the next level of the problem, using the result of the base case. 
  Test it.

  3.) Modify the code in step 2, generalizing it for every level of the problem.


*/