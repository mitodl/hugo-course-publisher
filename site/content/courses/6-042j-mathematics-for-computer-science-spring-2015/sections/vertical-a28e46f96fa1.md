---
title: 1.4 Logic & Propositions
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: vertical-a28e46f96fa1
    weight: 360
---
*   [<Soundness and Validity](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp2-2/vertical-ed6030bda119)
*   [1.4.1Propositional Operators: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp2-2)
*   [1.4.2Propositional Operators](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp2-2/vertical-e6ef70d76365)
*   [1.4.3Digital Logic: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp2-2/digital-logic-video)
*   [1.4.4Truth Tables: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp2-2/truth-tables-video)
*   [1.4.5Equivalence and Truth Table](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp2-2/vertical-b8b2711c0ce8)
*   [1.4.6Implies: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp2-2/implies-video)
*   [1.4.7Propositional Logic: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp2-2/propositional-logic-video)
*   [1.4.8Soundness and Validity](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp2-2/vertical-ed6030bda119)
*   [1.4.9Logical Connectives](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp2-2/vertical-a28e46f96fa1)
*   [\>Quantifiers & Predicate Logic](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp3-1)

Logical Connectives
-------------------

  

For each of the following formulas, choose the \\(\\textrm{AND}\\), \\(\\textrm{OR}\\), and \\(\\textrm{NOT}\\) formula equivalent to it.

1.  \\(P \\textrm{ IMPLIES } Q\\)  
      
    
    Exercise 1
    
    &nbsp;P AND NOT(Q)NOT(P AND Q)P OR NOT(Q)NOT(P) AND QNOT(P) OR Q NOT(P) OR Q&nbsp;
    
    An implication is true exactly when the if-part, in this case \\(P\\), is FALSE, or the then-part, in this case \\(Q\\), is TRUE.
    
2.  \\(P \\textrm{ IFF } Q\\)  
      
    
    Exercise 2
    
    &nbsp;(P OR Q) AND (NOT(P) OR NOT(Q))(P AND Q) OR (NOT(P) AND NOT(Q))NOT(P AND Q) AND (NOT(P) OR NOT(Q))NOT(P AND Q) OR NOT(P) OR NOT(Q) (P AND Q) OR (NOT(P) AND NOT(Q))&nbsp;
    
    If \\(P\\) is TRUE, the answer formula simplifies to \\(Q\\), so the formula is TRUE only if \\(Q\\) is also TRUE, that is, only if \\(Q\\) has the same truth value as \\(P\\). Likewise, if \\(P\\) is FALSE, the answer simplifies to \\(\\text{NOT}(Q)\\), so again it is TRUE only if \\(Q\\) has the same truth value of \\(P\\), namely FALSE.
    
3.  \\(P \\text{ XOR } Q\\)  
      
    
    Exercise 3
    
    &nbsp;(P IMPLIES NOT(Q)) AND (NOT(P) IMPLIES Q)(P AND NOT(Q)) OR (NOT(P) AND Q)(P OR NOT(Q)) AND (NOT(P) OR Q)(P AND Q) OR (NOT(P) AND NOT(Q))NOT(P AND Q) (P AND NOT(Q)) OR (NOT(P) AND Q)&nbsp;
    
    \\((P \\text{ IMPLIES } \\text{NOT}(Q)) \\text{ AND } (\\text{NOT}(P) \\text{ IMPLIES } Q)\\) is equivalent to \\(P \\text{ XOR } Q\\), but it is not an \\(\\text{AND}\\), \\(\\text{OR}\\), and \\(\\text{NOT}\\) formula.
    
4.  \\(P \\text{ NOR } Q\\)  
      
    
    Exercise 4
    
    &nbsp;P AND NOT(Q)NOT(P AND Q)NOT(P) AND NOT(Q)(P OR Q) AND (NOT(P) OR Q)(P OR Q) AND (P OR NOT(Q)) NOT(P) AND NOT(Q)&nbsp;
    
    \\( (P \\text{ NOR } Q)\\) is \\(\\text{NOT}(P \\text{ OR } Q)\\). The truth table for \\(\\text{NOR}\\) will produce a TRUE output only when both \\(P\\) and \\(Q\\) are FALSE. Thus, \\(\\text{NOT}(P) \\text{ AND } \\text{NOT}(Q)\\) is a correct answer.
    
    CheckShow Answer
    

*   [BackSoundness and Validity](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp2-2/vertical-ed6030bda119)
*   [ContinueQuantifiers & Predicate Logic](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp3-1)