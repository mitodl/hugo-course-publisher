---
title: 1.1 Intro to Proofs
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: vertical-acfe05b95a4e
    weight: 120
---
*   [<Definitions To Know For Proofs](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-1/vertical-96ac16077819)
*   [1.1.1Welcome to 6.042: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-1)
*   [1.1.2Intro To Proofs: Part 1: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-1/intro-to-proofs-part-1-video)
*   [1.1.3Intro to Proofs: Part 2: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-1/intro-to-proofs-part-2-video)
*   [1.1.4Definitions To Know For Proofs](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-1/vertical-96ac16077819)
*   [1.1.5Modus Ponens](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-1/vertical-acfe05b95a4e)
*   [\>Proof Methods](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2)

Modus Ponens
------------

  

Let \\(P\\) be a proposition, \\(Q\\) be another proposition.

1.  What is a proposition of the form \\(\\text{IF } P, \\text{ THEN } Q \\) called?
    
    Exercise 1
    
    &nbsp;implication, 'if and only ifconclusionconsequentNone of the above implication&nbsp;
    
    \\(\\text{IF } P, \\text{ THEN } Q \\) is the general form of an **implication** and is often written as \\(P \\text{ IMPLIES } Q\\). Thus, given specific \\(P\\) and \\(Q\\), \\(P \\text{ IMPLIES } Q\\) is itself a proposition and can be either true or false.
    
2.  A fundamental inference rule says:
    
    _\\(\\dfrac{P,\\;\\; P \\text{ IMPLIES } Q}{Q}\\)._
    
    1.  What is this inference rule called?
        
        Exercise 2
        
        &nbsp;The Fundamental Inference RuleModus PonensThe Fundamental Rule of LogicNone of the above Modus Ponens&nbsp;
        
    2.  What is the statement above the line called?
        
        Exercise 3
        
        &nbsp;numeratorantecedentall of the aboveNone of the above antecedent&nbsp;
        
    3.  What is the statement below the line called?
        
        Exercise 4
        
        &nbsp;conclusionconsequentall of the aboveNone of the above all of the above&nbsp;
        
    
    Review Chapter 1.4.1.
    
3.  Proving a proposition's contrapositive is as good as (and sometimes easier than) proving the proposition itself. Which of the following is logically equivalent to the contrapositive of \\(P \\text{ IMPLIES } Q\\)?
    
    Exercise 5
    
    &nbsp;NOT(P IMPLIES Q)NOT(P) IMPLIES NOT(Q)NOT(Q) IMPLIES NOT(P)None of the above NOT(Q) IMPLIES NOT(P)&nbsp;
    
    Draw a Venn diagram with \\(P\\) inside of \\(Q\\).
    
4.  At the end of a proof, it is customary to write down either the delimiter \_\_\_\_\_ or the symbol \_\_\_\_\_.
    
    Exercise 6
    
    &nbsp;Done, \\(\\Diamond \\)QED, \\(\\Diamond \\)END, \\(\\Box \\)QED, \\(\\Box \\) QED, \\(\\Box \\)&nbsp;
    
    A proof should begin with "Proof by ..." and end with "QED" or \\(\\Box \\).
    
    CheckShow Answer
    

*   [BackDefinitions To Know For Proofs](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-1/vertical-96ac16077819)
*   [ContinueProof Methods](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2)