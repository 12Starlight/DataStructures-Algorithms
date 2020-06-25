/* 
Constant:
  The input does not change the outcome

f(n) = 5 
--------
n | f(n)
1 | 5  
2 | 5  
3 | 5  
4 | 5  


Linear:
  The input representing an unit, increases the output size by a constant amount

f(n) = n
--------
n | f(n)
1 | 1
2 | 2
3 | 3
4 | 4


f(n) = 3n
--------
n | f(n)
1 | 3 -> Increases by three, and does not adjust the overall behavior
2 | 6
3 | 9
4 | 12


WolframAlpha.com
  Watched the changes that a line takes using different types of functions
    -> Constant, Linear, Log etc.


Log:
  2^5 = 2 * 2 * 2 * 2 * 2 = 32 -> Exponentiation 
  
  If this is equal to 32, then:
    -> log_2 32 = 5, log_2 16 = 4

      * 2 to the what power will give you 16?
       -> log_2 16 -> How many times would you have to divide 2 to get 1?
        * 16/2 = 8/2 = 4/2 = 2/2 =1
        * Answer: 4

  It is really just the opposite of an exponential function 

  log_10 1000 = 3

  Most of the course will be covered using log_2


f(n) = log_2 (n) 
(choose values of n that would be powers of 2 to make it clean, could choose
any number though)
--------
n   | f(n)
1   | 0
2   | 1
4   | 2
8   | 3
16  | 4
32  | 5
64  | 6
128 | 7


Key thing to take away is the behavior of these functions which show up in order
  * Linear Log - Biggest/Steepest
  * Linear
  * Log
  * Constant - Smallest/Flat
  

*/