---
title: 2.7 Partial Orders and Equivalence
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: vertical-f4ebf555fc18
    weight: 1380
---
*   [<Partial Orders and Equivalence](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence)
*   [2.7.1Partial Orders: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence)
*   [2.7.2Population Partial Order](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence/vertical-f4ebf555fc18)
*   [2.7.3Representing Partial Orders As Subset Relations: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence/vertical-a604c5db7bb5)
*   [2.7.4Equivalence Relations: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence/vertical-c6c01eb0d061)
*   [2.7.5Relational Properties](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence/vertical-6ea0ba8a2d05)
*   [2.7.6Properties Of Relations](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence/vertical-d7f7704d23b4)
*   [2.7.7Equivalence Relations & Partial Orders](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence/vertical-d757201744eb)
*   [\>Representing Partial Orders As Subset Relations: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence/vertical-a604c5db7bb5)

Population Partial Order
------------------------

  

In a population of 10 people, let \\(R \\) be the "older than" relation and \\(T \\) be the "taller than" relation.

1.  Which of the following properties guarantee that \\(R \\) will be a linear order?
    
    Exercise 1
    
    &nbsp;There is a unique oldest personThere are at most two people with the same ageNo two people are the same ageThere is an age that no one hasSome person appears twice in the list No two people are the same age&nbsp;
    
  
3.  Assume both \\(R \\) and \\(T \\) are linear orders. Which properties are **guaranteed** to be true for the product relation \\(R \\times T \\)?
    
    Exercise 2
    
    &nbsp; symmetric &nbsp;
    
    &nbsp; antisymmetric &nbsp;
    
    &nbsp; asymmetric &nbsp;
    
    &nbsp; reflexive &nbsp;
    
    &nbsp; transitive &nbsp;
    
    &nbsp; acyclic &nbsp;
    
    &nbsp; linear &nbsp;
    
    Not **symmetric** because two distinct people cannot both be older and taller than each other.
    
    Not **reflexive** because a person cannot be older/taller than himself.
    
    Not **linear** because if person \\(A \\) is older than person \\(B \\) but \\(B \\) is taller than \\(A \\), then \\(A\\) and \\(B\\) are incomparable.
    
    CheckShow Answer
    
  

*   [BackPartial Orders and Equivalence](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence)
*   [ContinueRepresenting Partial Orders As Subset Relations: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence/vertical-a604c5db7bb5)