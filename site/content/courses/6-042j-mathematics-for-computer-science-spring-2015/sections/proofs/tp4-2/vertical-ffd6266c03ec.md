---
title: 1.9  State Machines - Invariants
course_id: 6-042j-mathematics-for-computer-science-spring-2015
type: course
layout: course_section
---
*   [<Integer Multiplication]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-2/vertical-85cff195fae3" %}})
*   [1.9.1State Machines Invariants: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-2/_index.md" %}})
*   [1.9.2State Machine Invariants]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-2/vertical-ee3144f200f1" %}})
*   [1.9.3Derived Variables: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-2/vertical-ef00ae29a8ca" %}})
*   [1.9.4Derived Variables and Termination]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-2/vertical-5bf3bfde6f69" %}})
*   [1.9.5Integer Multiplication]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-2/vertical-85cff195fae3" %}})
*   [1.9.6Chocolate Bars]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-2/vertical-ffd6266c03ec" %}})
*   [\\>Recursive Definition]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/_index.md" %}})

Chocolate Bars
--------------

We are given a chocolate bar with \\(m \\times n\\) squares of chocolate, and our task is to divide it into \\(mn\\) individual squares. We are only allowed to split a chocolate bar using a vertical or a horizontal cut.

For example, suppose that the chocolate bar is \\(3 \\times 2\\). A horizontal cut between the first and second rows of squares splits it into two bars, a \\(1 \\times 2\\) bar and a \\(2 \\times 2\\) bar. One cut of the \\(1 \\times 2\\) splits it into individual squares, and three more cuts splits the \\(2 \\times 2\\) bar into squares. So a total of 5 cuts splits the whole \\(3 \\times 2\\) bar into squares.

At each step of the division process, let \\(s\\) be the number of splits already performed, and \\(p\\) the number of pieces of chocolate obtained.  

* * *

1.  Which of the following predicates are _preserved invariants_ for this process ?
    
    Exercise 1
    
    &nbsp;\\(s = p - 1\\)&nbsp;
    
    &nbsp; \\(s \\neq p\\)&nbsp;
    
    &nbsp;\\(s = mn - p\\)&nbsp;
    
    With each split, both \\(s\\) and \\(p\\) increase by 1; therefore, the first two predicates are preserved invariants. In contrast, the left side in the third predicate increases while the right side decreases.
    
2.  Which of the following quantities get smaller at each transition?
    
    Exercise 2
    
    &nbsp;\\(mn - p\\)&nbsp;
    
    &nbsp; \\(s\\)&nbsp;
    
    &nbsp;\\(p - s\\)&nbsp;
    
    Given a set of \\(m\\) and \\(n\\) (i.e., the size of the chocolate bar), \\(mn\\) does not change. With each split, both \\(s\\) and \\(p\\) increase by 1, \\(mn-p\\) decreases by 1, and \\(p-s\\) remains constant.
    
3.  What is the number of pieces of chocolate at the end of the division process?
    
    Exercise 3
    
    &nbsp;\\(p = mn - 1\\)&nbsp;
    
    &nbsp; \\(p = s - 1\\)&nbsp;
    
    &nbsp;\\(p = mn\\)&nbsp;
    
    At the end of the process every square is separated, so \\(p=mn\\).
    
4.  What is the number of splits performed to reach the end of the division process?
    
    Exercise 4
    
    &nbsp;\\(s = mn - 1\\)&nbsp;
    
    &nbsp; \\(s = mn\\)&nbsp;
    
    &nbsp;\\(s = mn + 1\\)&nbsp;
    
    In Part 1, we found \\(s=p-1\\) a preserved invariant. This invariancy is also true at the beginning before the first split: \\(s=0\\) and \\(p=1\\). By the Invariant Theorem, the predicate \\(s=p-1\\) is true throughout the division process, thus, it is true at the end. From Part 3, we know that at the end \\(p=mn\\); substituting it into the invariant, we get \\(s=mn-1\\).
    
    CheckShow Answer
    

*   [BackInteger Multiplication]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-2/vertical-85cff195fae3" %}})
*   [ContinueRecursive Definition]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/_index.md" %}})