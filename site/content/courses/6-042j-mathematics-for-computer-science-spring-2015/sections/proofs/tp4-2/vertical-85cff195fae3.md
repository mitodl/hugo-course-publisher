---
title: 1.9  State Machines - Invariants
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: bd55b53dc54b1a4a4c52a30e9c3119d3_vertical-85cff195fae3
    weight: 200
---
*   [<Derived Variables and Termination](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-5bf3bfde6f69)
*   [1.9.1State Machines Invariants: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2)
*   [1.9.2State Machine Invariants](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-ee3144f200f1)
*   [1.9.3Derived Variables: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-ef00ae29a8ca)
*   [1.9.4Derived Variables and Termination](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-5bf3bfde6f69)
*   [1.9.5Integer Multiplication](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-85cff195fae3)
*   [1.9.6Chocolate Bars](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-ffd6266c03ec)
*   [\>Chocolate Bars](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-ffd6266c03ec)

Integer Multiplication
----------------------

  

Suppose that the following procedure is used to multiply two non-negative integers _a_ and _b_.

*   \\(x ::= a\\)
*   \\(y ::= b\\)
*   \\(p ::= 0\\)

Repeat the following commands:

*   if \\(x = 0\\), then output \\(p\\) and terminate; else
*   if \\(x\\) is even, then set \\(x \\leftarrow x/2\\) and \\(y \\leftarrow 2y\\); else
*   if \\(x\\) is odd, then set \\(x \\leftarrow x - 1\\) and \\(p \\leftarrow p + y\\).

  

1.  Which of the following predicates are _preserved invariants_ for this algorithm?
    
    Exercise 1
    
    &nbsp;\\(xy = p\\)&nbsp;
    
    &nbsp;\\(xy = ab\\)&nbsp;
    
    &nbsp;\\(xy + p = ab\\)&nbsp;
    
    &nbsp;\\(xyp = ab\\)&nbsp;
    
    Predicates (1), (2), and (4) are preserved by the second command of the algorithm, but not necessarily by the third command. Predicate (3) is preserved by both commands. In the second command, the product \\(xy\\) remains the same and so does \\(p\\), so the sum keeps its old value. In the third command, the product \\(xy\\) decreases by \\(y\\) and \\(p\\) increases by \\(y\\), so the sum again keeps its old value.
    
  
3.  Which of the following derived quantities get smaller at every transition?
    
    Exercise 2
    
    &nbsp;\\(x\\)&nbsp;
    
    &nbsp;\\(xy\\)&nbsp;
    
    &nbsp;\\(p - y\\)&nbsp;
    
    &nbsp;\\(x + p\\)&nbsp;
    
    In every transition, \\(x\\) is either halved or reduced by 1, so it is strictly decreasing. In contrast, \\(xy\\) either remains the same or reduces by \\(y\\), so it is weakly decreasing. \\(p-y\\) and \\(x+p\\) may each decrease or increase.
    
    CheckShow Answer
    

*   [BackDerived Variables and Termination](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-5bf3bfde6f69)
*   [ContinueChocolate Bars](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/vertical-ffd6266c03ec)