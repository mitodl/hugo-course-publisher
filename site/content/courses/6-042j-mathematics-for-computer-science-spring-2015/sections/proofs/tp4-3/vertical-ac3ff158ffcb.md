---
title: 1.11  Infinite Sets
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 3d1b60b99d2789b86c9d68b8d7c0db02_vertical-ac3ff158ffcb
    weight: 920
    parent: 7b14af4d984597ad410998ecc9fb9f71_tp4-3
---
*   [<Russell's Paradox: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-f1f52e8d7024)
*   [1.11.1Cardinality: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3)
*   [1.11.2Cantor, Schroeder-Bernstein](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-e7c2a3883170)
*   [1.11.3Countable Sets: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/countable-sets-video)
*   [1.11.4Cantor's Theorem: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-4eaa04fd577b)
*   [1.11.5Cantor's Diagonal Argument](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-733f8439bc8d)
*   [1.11.6Countable and Uncountable Sets](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-3077e4479731)
*   [1.11.7The Halting Problem: Video \[Optional\]](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-b654b1f1c6e1)
*   [1.11.8Halting Problem Basics \[Optional\]](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-1ef05b471b3d)
*   [1.11.9Russell's Paradox: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-f1f52e8d7024)
*   [1.11.10Russell's Paradox \[and ZFC optional\]](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-ac3ff158ffcb)
*   [1.11.11Set Theory Axioms: Video \[Optional\]](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/set-theory-axioms-video-optional)
*   [1.11.12Set Theory Axioms \[Optional\]](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/set-theory-axioms-optional-0)
*   [\>Set Theory Axioms: Video \[Optional\]](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/set-theory-axioms-video-optional)

Russell's Paradox \[and ZFC optional\]
--------------------------------------

  

1.  Russell's Paradox
    
    Exercise 1
    
    &nbsp;is "buggy" - the assumption that \\(W \\) is a set is not mathematically well-defined.&nbsp;
    
    &nbsp;is "buggy" - it assumes that \\(W \\) is a set, so it only holds when \\(W \\) is considered a set.&nbsp;
    
    &nbsp;is avoided by Zermelo-Frankel with Choice (ZFC).&nbsp;
    
    &nbsp;is confirmed by Zermelo-Frankel with Choice (ZFC).&nbsp;
    
    In Russell's Paradox, \\(W \\) is mathematically well-defined as a set. The question resides with "which well-defined collections are sets?" Russell's Paradox is not relevant when \\(W \\) is not a set; even Russell himself knew that it was unjustified to assume that \\(W \\) was a set! ZFC avoided Russell's Paradox by not allowing \\(W \\) to be a set.
    
2.  Zermelo-Frankel with Choice axioms (ZFC)
    
    Exercise 2
    
    &nbsp;form the set theory that most mathematicians use today, when they want to be that precise.&nbsp;
    
    &nbsp;are written in predicate logic.&nbsp;
    
    &nbsp;include the equality axiom and power set axiom.&nbsp;
    
    &nbsp;allow new sets to be built without constraints.&nbsp;
    
    &nbsp;fix Russell's Paradox with the foundation axiom: a set cannot be a member of itself, directly or indirectly.&nbsp;
    
    &nbsp;imply, by the foundation axiom, that a collection of all sets is a set.&nbsp;
    
    &nbsp;imply, by the foundation axiom, that \\(W \\) is not a set, since it equals the collection of all sets.&nbsp;
    
    CheckShow Answer
    

*   [BackRussell's Paradox: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-f1f52e8d7024)
*   [ContinueSet Theory Axioms: Video \[Optional\]](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/set-theory-axioms-video-optional)