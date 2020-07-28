/*
Tips For Solving Whiteboard Problems:

Why Whiteboard Problems?
  Things the interviewer will be looking for:
    -> Can you think algorithmically? Can you think about efficiency?
    -> Are you a good communicator? Are you someone I want to think through a
    new feature with?
    -> Can you code? Can you code neatly and correctly?


Before You Start:
  Ask questions. Do not rush, it is a problem-solving demo, not a speed-coding
  test.
    -> What are we optimizing for? Time? Space?
    -> Are there any constraints on the input set?

  
  If you draw a blank:
    * Make a sample input and compute it. Do this two or three times aloud.
    * Find a naive solution, any solution, to get started. Then you can optimize.
    * Come up with a simpler version of the problem, solve it, then
    progressively add complexity.
    * Think aloud about the likely bounds on efficiency for your solution.
      -> This is an easy way to score points.
      -> "What's sure, is I will have to iterate through all the points, so it
      is at least linear time."
      -> "The problem is trivial when the set is sorted. So it can definitely be
      done in nLOGn time. Let us see, if we can do better than n Log n."


During The Problem:
  -> The nice thing aboiut white boards is you and the interviewer are facing
  the same direction.
  -> Convince yourself that you are solving the problem together. Say "we"
  instead of "I".
  -> Do not stop until they tell you to. 


  Style:
    1.) Be confident, even if you do not know the answer, try to engage the
    problem, do not give up. If you keep telling an interviewer you do not know
    how to do something, they will start to believe you.

    2.) Talk through the problem. They want to see the process going on in your
    head. If you do not talk, the interviewer does not learn how you break-down
    and analyze a problem.

    3.) The interviewer may give you hints. They will ask questions to keep you
    on track Do not be flustered or think you are failing, this is normal.

    4.) If they ask you 'does this work,' take a moment to think. Walk through
    the steps, out loud is fine. If you say yes, say it like you believe it.
    Interviewers do not like to think people are just praying they will get the
    answer right.

    5.) Listen to the interviewer. They are trying to help you. No one likes
    someone wo does not listen.


  Keep a mental list of general strategies you can turn to. Here are a few:
    1.) Bucketizing with a hash: If the input set is bounded, try organizing it
    into a hash.
      * Ex: Sort an array of 100,000 integers that are all in the range 1-100
      
    2.) Dynamic programming, or 'divide and conquer': Divide into smaller and
    smaller but equal subproblems.
      * Ex: See 'https://www.careercup.com/question?id=19286747' for Google
      interview question.

    3.) Look for useful mathematical properties.
      * Sometimes you have individual values when really what you care about is
      their sums.
      * Ex: For an array of integers 1-100 where all elements appear once except
      one that appears twice, find the repeat.

    4.) Amortized analysis: It is okay to do something memory - or space -
    intensive if you can prove that this cost comes with a greater payoff.
      * Ex: Implement a queue using two stacks.

    5.) Keep a stack or a queue on the side to track values as your algorithm
    goes through the problem.

    6.) Keep two pointers for the same iteration.
      * Ex: Reverse a string in plave (ie. using no more memory space than the
        length of the string).

    7.) Perform an operation twice.
      * Ex: Reverse the word order of a string, but not the letters within the 
      words.

    8.) Sort the input.
      * Ex: Finding anagrams.

    9.) Approach the problem from the other end.
      * Ex: See 'https://www.techinterview.org/post/526325766/pirates/' for a
      Fog Creek interview question.

    10.) Use Binary numbers instead of decimal numbers.
      * Ex: See the famous 
      'https://www.techinterview.org/post/526313890/bad-king/' problem

    11.) For efficiency, use Binary Search instead of incrementation. Esp, good
    for implementing math operators.
      * Ex: Implement division without using '/', in less than O(n) time.

*/

/*
Do Not Be Sly:
  If you do not understand the problem, ask for clarification. A well-formulated
  question is as impressive as a good answer. If you do not know something, do
  not make it up. Tell the interviewer you do not know and then try your best
  guess. Many interviewers will really like this. Same thing when you hit a 
  snag. Do not try to cover things up and make it look like you were on the
  right track. Explain to the interviewer you think the current hypothesis
  actually will not work.

*/

/*
How To Handle Questions You Have Seen Before:
  What if you get a whiteboard problem you already know the solution to?
  Obviously the ethical thing is to tell your interviewer you have seen the
  problem before and you will get points for that. Put on a sad face to show you
  were excited about solving a new problem.

  Furthermore, yo will not necessarily perform better on a question you have
  seen. You will probably solve it faster, but speed is overrated. On the other
  hand, it is much harder to show your interviewer how you thnk when you are 
  really just recalling a solution. Note that the easiest parts of a problem are
  also the hardest to remember. So, even if you confound your interviewer, they
  will be left wondering why you breezed through the hardest part of the problem
  while stubling on the rest. That is a failure to demonstrate how you think,
  which is the real purpose of a whiteboard problem.

*/