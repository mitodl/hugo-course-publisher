---
title: 1.9  State Machines - Invariants
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 44f9694edcc7c2cd211fed7a017efdc6_vertical-5bf3bfde6f69
    weight: 190
---
*   [<Derived Variables: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-ef00ae29a8ca)
*   [1.9.1State Machines Invariants: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2)
*   [1.9.2State Machine Invariants](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-ee3144f200f1)
*   [1.9.3Derived Variables: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-ef00ae29a8ca)
*   [1.9.4Derived Variables and Termination](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-5bf3bfde6f69)
*   [1.9.5Integer Multiplication](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-85cff195fae3)
*   [1.9.6Chocolate Bars](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-ffd6266c03ec)
*   [\>Integer Multiplication](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-85cff195fae3)

Derived Variables and Termination
---------------------------------

  

1.  For state machines, a _derived variable_ is a \_\_\_\_\_, of real variables, that assigns a "value" to each state.
    
    Exercise 1
    
    &nbsp;derivativesumfunctionrule function&nbsp;
    
2.  Which of the following is a derived variable for the diagonal robot on the grid example?
    
    Exercise 2
    
    &nbsp;x+y (mod 2)xythere are no derived variables x+y (mod 2)&nbsp;
    
3.  A derived variable is a _constant_ iff it is both \_\_\_\_\_increasing and \_\_\_\_\_ decreasing.
    
    Exercise 3
    
    &nbsp;strictly, strictlystrictly, weaklyweakly, weaklyweakly, strictly weakly, weakly&nbsp;
    
4.  Termination of a state machine is guaranteed if it has a derived variable on \\(\\mathbb{N} \\) that is \_\_\_\_\_ decreasing in any \_\_\_\_\_.
    
    Exercise 4
    
    &nbsp;weakly, well ordered setstrictly, well ordered setweakly, finite setstrictly, finite set strictly, well ordered set&nbsp;
    
    CheckShow Answer
    

*   [BackDerived Variables: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-ef00ae29a8ca)
*   [ContinueInteger Multiplication](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-85cff195fae3)