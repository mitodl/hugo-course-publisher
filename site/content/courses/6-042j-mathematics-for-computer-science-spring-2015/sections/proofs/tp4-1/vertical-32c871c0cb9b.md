---
title: 1.8  Induction
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 253ab197eaf3519a13efcb16953f03b0_vertical-32c871c0cb9b
    weight: 220
    parent: 5179d7c0c3f7a60a33d7c24d9d219172_tp4-1
---
*   [<Strong vs Ordinary Induction vs WOP \[optional\]](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-1/vertical-b16ab258826d)
*   [1.8.1Induction: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-1)
*   [1.8.2Bogus Induction: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-1/vertical-9984d57d43e5)
*   [1.8.3Same Colored Horses](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-1/vertical-e9a3ad8170fd)
*   [1.8.4Strong Induction: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-1/vertical-828ce2b900d3)
*   [1.8.5Unstacking Game Score](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-1/vertical-cc43092b621f)
*   [1.8.6WOP vs Induction: Video \[optional\]](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-1/vertical-98aa517cd42e)
*   [1.8.7Strong vs Ordinary Induction vs WOP \[optional\]](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-1/vertical-b16ab258826d)
*   [1.8.8Induction by n+3](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-1/vertical-32c871c0cb9b)
*   [1.8.9Induction Rules](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-1/vertical-7137716a91a6)
*   [1.8.10Postage by Induction](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-1/vertical-a8ffdfcb631b)
*   [1.8.11A Bogus Induction](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-1/vertical-87911985518e)
*   [\>Induction Rules](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-1/vertical-7137716a91a6)

Induction by n+3
----------------

  

Alice wants to prove by induction that predicate \\(P\\) holds for certain nonnegative integers. She has proven that for all nonnegative integers \\(n = 0,1,2,3\\ldots \\)  
  

\\(P(n) \\text{ IMPLIES } P(n+3)\\).

1.  Suppose Alice also proves that \\(P(5)\\) holds. Which of the following propositions can she infer? The universe of discourse for \\(n\\) is the nonnegative integers.
    
    Exercise 1
    
    &nbsp;\\(P(n)\\) holds for all \\(n \\geq 5 \\)&nbsp;
    
    &nbsp;\\(P(3n)\\) holds for all \\(n \\geq 5 \\)&nbsp;
    
    &nbsp;\\(P(n)\\) holds for \\(n = 8, 11, 14, \\ldots \\)&nbsp;
    
    &nbsp;\\(P(n)\\) does not hold for \\(n \\leq 4 \\)&nbsp;
    
    &nbsp;\\(\\forall n.\\; P(3n + 5) \\)&nbsp;
    
    &nbsp;\\(\\forall n > 2.\\; P(3n - 1) \\)&nbsp;
    
    &nbsp;\\(P(0) \\text{ IMPLIES } \\forall n.\\; P(3n + 2) \\)&nbsp;
    
    &nbsp;\\(P(0)\\text{ IMPLIES }\\forall n. P(3n) \\)&nbsp;
    
    \\(P\\) will be true on 5 and all numbers that are greater by a multiple of 3. That is, 5, 8, 11, 14, etc. This is exactly what answer (5) says. Answers (3) and (6) talk of the same sequence except number 5, so they are still propositions that Alice can infer, although not the strongest possible. Answer (8) is also a valid conclusion: if Alice knows \\(P\\) is true on 0, she knows it will also be true on 3, 6, 9, etc.; so, it will be true on all multiples of 3 (note that the truth of \\(P\\) on 5 is not relevant here).
    
2.  Which of the following could Alice prove in order to conclude that \\(P(n)\\) holds for all \\(n \\geq 5\\)?
    
    Exercise 2
    
    &nbsp; \\(P(0)\\)&nbsp;
    
    &nbsp;\\(P(5)\\)&nbsp;
    
    &nbsp; \\(P(5) \\text{ and } P(6)\\)&nbsp;
    
    &nbsp;\\(P(0), P(1), \\text{ and } P(2)\\)&nbsp;
    
    &nbsp;\\(P(5), P(6), \\text{ and } P(7)\\)&nbsp;
    
    &nbsp;\\(P(2), P(4), \\text{ and } P(5)\\)&nbsp;
    
    &nbsp;\\(P(2), P(4), \\text{ and } P(6)\\)&nbsp;
    
    &nbsp;\\(P(3), P(5), \\text{ and } P(7)\\)&nbsp;
    
    Once Alice proves \\(P(5), P(6), \\text{ and } P(7)\\), she can conclude that \\(P(n)\\) holds for all \\(n \\ge 5\\). \\(P(5), P(6), \\text{ and } P(7)\\) can also follow from proving \\(P\\) of any three nonnegative intergers, up to 7, that leave remainders on division by 3 as 0, 1, and 2.
    
    CheckShow Answer
    

*   [BackStrong vs Ordinary Induction vs WOP \[optional\]](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-1/vertical-b16ab258826d)
*   [ContinueInduction Rules](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-1/vertical-7137716a91a6)