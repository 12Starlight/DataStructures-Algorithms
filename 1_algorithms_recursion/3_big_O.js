/*
Simplifying Math Terms:
  We want our Big-O notation to describe the performance of our algorithm with
  respect to the input size and nothing else. Because of this, we should 
  simplify our Big-O functions using the following rules:
    -> Simplify Products: If the function is a product of many factors, we drop
      the factors that do NOT depend on the size of the input.
    -> Simplify Sums: If the function is a sum of many terms, we keep the term 
      with the LARGEST growth rate and drop the other terms.

  We will look at these rules in action, but first we will define a few things t
    -> n is the size of the input
    -> T(f) refers to the unsimplified function
    -> O(f) refers to the Big-O simplified function


Simplifying a Product:
  If the function consists of a product of many factors, we drop the factors that
  do not depend on the size of the input, n. The factors that we drop are called
  constant factors because their size remains consistant as we increase the size
  of the input. The reasoning behind this simplification is that we make the input
  large enough, the non-constant factors will overshadow the constant ones.

Examples:

Unsimplified           Big-O Simplified
---------------------------------------
T( 5 * n^{2} )      | O( n^{2} )         
T( 1000 * n )       | O( n )
T( 42 n log(n) )    | O( n * log(n) )
T( 12 )             | O( 1 )


Simplifying a Sum:
  If the function consists of a sum of many terms, we only need to show the term
  that grows the fastest, relative to the size of the input. The reasoning behind
  this simplification is that if we make the input large enough, the fastest 
  growing term will overshadow the other, smaller terms. To understand which 
  term to keep, you will need to recall the relative size of our common math
  terms from the previous section.

Examples:

Unsimplified                   Big-O Simplified
-----------------------------------------------
T( n^{3} + n^{2} + n )      | O( n^{3} )
T( log(n) + 2^{n} )         | O( n )
T( n + log(n) )             | O( n )
T( n! + 10^{n} )            | O( n! )


Putting it all together:
  These two rules are all we will need to Big-O simplify any functions. We just
  apply the product rule to simplify all terms, then apply the sum rule to 
  select the single most dominant term.

Examples:

Unsimplified                   Big-O Simplified
-----------------------------------------------
T( 5n^{2} + 99n )           | O( n^{2} )
T( 2n + nlog(n) )           | O( n * log(n) )
T( 2^{n} + 5n^{1000} )      | O( 2^{n} )


Exercise:

Unsimplified                         Big-O Simplified
----------------------------------------------------
T( n^{2} + 10 * 2^{n} + 500 )      | O( 2^{n} )
T( log(n) + n + nlog(n) )          | O( nlog(n) )
T( n! + 24^{n} + 2log(n) )         | O( n! )
T( n* 3^{n} + n^{2} )              | O( 3^{n} )


*/