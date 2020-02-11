---
title: 1.9  State Machines - Invariants
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: c9c18fad0944755462d1010531375954_vertical-ee3144f200f1
    weight: 170
    parent: 470546ac81246c938505a0f7571765aa_tp4-2
---
*   [< State Machines - Invariants](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2)
*   [1.9.1State Machines Invariants: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2)
*   [1.9.2State Machine Invariants](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-ee3144f200f1)
*   [1.9.3Derived Variables: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-ef00ae29a8ca)
*   [1.9.4Derived Variables and Termination](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-5bf3bfde6f69)
*   [1.9.5Integer Multiplication](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-85cff195fae3)
*   [1.9.6Chocolate Bars](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-ffd6266c03ec)
*   [\>Derived Variables: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-ef00ae29a8ca)

State Machine Invariants
------------------------

  

1.  What are the states in the _Die Hard_ example?
    
    Exercise 1
    
    &nbsp;the total amount of water in the two jugsthe amount of water in jugs: \\((b, l) \\), where \\(b \\) is the amount in the big jug, \\(l \\) is the amount in the small jugthe difference in the amount of water in the two jubsnone of the above the amount of water in jugs: \\((b, l) \\), where \\(b \\) is the amount in the big jug, \\(l \\) is the amount in the small jug&nbsp;
    
2.  The preserved invariant for the state machine in the _Die Hard Once For All_ example is:
    
    Exercise 2
    
    &nbsp;The total amount of water must increase or decrease by exactly three gallons.The total amount of water must be preserved.The number of gallons in each jug is never divisible by the difference of the jugs.The number of gallons in each jug is always divisible by three.The number of gallons in each jug can be any integer value. The number of gallons in each jug is always divisible by three.&nbsp;
    
3.  Which of the following are valid states for the robot's location in the _Diagonal Robot_ example?
    
    Exercise 3
    
    &nbsp;(-11, 3)&nbsp;
    
    &nbsp;(3, 7)&nbsp;
    
    &nbsp;(5, 4)&nbsp;
    
    &nbsp;(2, 1)&nbsp;
    
4.  Which of the following is true about Floyd's Invariant Principle?
    
    Exercise 4
    
    &nbsp;It is induction reformulated for state machines.&nbsp;
    
    &nbsp;For a preserved invariant \\(P(\\text{state}) \\), if \\(P(\\text{start state}) \\), then \\(P(r) \\), for all reachable states \\(r \\) .&nbsp;
    
    &nbsp;Preserved invariants are the same as invariants.&nbsp;
    
    &nbsp;Any preserved invariant of a state machine is a property of the states, including the final state, if any.&nbsp;
    
    CheckShow Answer
    

*   [Back State Machines - Invariants](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2)
*   [ContinueDerived Variables: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-ef00ae29a8ca)