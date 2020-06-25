/*
Small Growth  | Constant      f(n) = 1
              | Logarithmic   f(n) = log(n)
              | Linear        f(n) = n
              | Log Linear    f(n) = n * log(n)
              | Polynomial    f(n) = n^{2} -> n^{3}, n^{4}, ...
              | Exponential   f(n) = 2^{n} -> 3^{n}, 4^{n}, ...
Large Growth  V Factorial     f(n) = n!


Plynomial:
  f(n) = n^{2} -> Quadradic
  f(n) = n^{3} -> Cube
  f(n) = n^{4} -> Bigger Growth Rate

  f(n) = n^{c} c = constant 


n | n^{2} | n^{3} 
These do not take the same number of increasing of steps, the line gets steeper
and steeper as you go across 
-----------------
1 | 1     | 1
2 | 4     | 8
3 | 9     | 27
4 | 16    | 64


Exponential:  
  -> A contant c, to the nth power
  -> Do have a larger growth rate, than polynomial

  f(n) = 2^{n} -> Exponential
  f(n) = 3^{n} -> 
  f(n) = 4^{n} -> Exponential

  f(n) = c^{n} c = constant

n | 2^{n} | 3^{n}  
-----------------
1 | 2     | 3
2 | 4     | 9
3 | 8     | 27
4 | 16    | 81

So, in short n^{100} is a better choice, than 2^{n} in terms of growth in the 
long run.


Factorial:
  4! = 4 * 3 * 2 * 1
  3! = 3 * 2 * 1

  n! = n * (n-1) * (n-2) ...

n   | n!
---------
1   | 1    
2   | 2    
3   | 6     
4   | 24
10  | 3,628,800 -> Huge growth   



*/