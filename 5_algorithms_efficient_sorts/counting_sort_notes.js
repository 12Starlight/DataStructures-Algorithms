/*
Counting Sort: Another non-comparison, integer sorting algorithm
  Just like Radix Sort, its time complexity is superior to every other 
  comparison-based sorting algorithm we ahve encountered thus far, but it can
  only be used in the special case where awe are sorting integer data. 
  Additionally, we must know the largest integer value in the input array (which
  we will refer to as k) *prior* to beginning our sort. (Or... we must be 
  willing to take the time to search for it first.) 

Why Integer Data?
  Similar to Radix Sort, it works by exploitinig some specific properties of the
  integer data type. However, the property we are exploiting about integers is
  simpler, and is linked to our friend the array data structure. We are simply
  going to take advantage of the fact that an arrays indices are integers, and
  that they are pesorted for us. We will use an array data structure as a 
  storage device for us to count the number of occurences of each integer in our
  input array. (Thus, the name 'Counting Sort'.)

*/