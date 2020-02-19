---
title: 2.7 Partial Orders and Equivalence
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 7d305e12f34a46452b9d554128327161_vertical-d757201744eb
    weight: 1430
    parent: e3bcfae1ff3e4391a255e7aa0a942756_partial-orders-and-equivalence
---
*   [<Properties Of Relations](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence/vertical-d7f7704d23b4)
*   [2.7.1Partial Orders: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence)
*   [2.7.2Population Partial Order](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence/vertical-f4ebf555fc18)
*   [2.7.3Representing Partial Orders As Subset Relations: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence/vertical-a604c5db7bb5)
*   [2.7.4Equivalence Relations: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence/vertical-c6c01eb0d061)
*   [2.7.5Relational Properties](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence/vertical-6ea0ba8a2d05)
*   [2.7.6Properties Of Relations](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence/vertical-d7f7704d23b4)
*   [2.7.7Equivalence Relations & Partial Orders](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence/vertical-d757201744eb)
*   [\> Degrees & Isomorphism](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-2)

Equivalence Relations & Partial Orders
--------------------------------------

  

For each of the following relations, indicate whether it is an **equivalence relation**, a **partial but not a total order**, a **total order**, or **none of the above**.

1.  \\(\\{(p,q) \\;|\\; p \\text{ and } q \\text{ are people of the same age}\\}\\)
    
      
    
    Exercise 1
    
    &nbsp;equivalence relationpartial but not a total ordertotal ordernone of the above equivalence relation&nbsp;
    
  
3.  \\(\\{(a,b) \\;|\\; a \\text{ is the age of someone who is not younger than anyone of age } b\\}\\)
    
      
    
    Exercise 2
    
    &nbsp;equivalence relationpartial but not a total ordertotal ordernone of the above total order&nbsp;
    
    Ages can be translated into days or similar numerical units, which reveals that we have just given a somewhat awkward description of the relation greater-or-equal on these numbers.
    
  
5.  \\(\\{(p,q) | p \\text{ is a person whose age is an integer multiple of person \\(q\\)'s age}\\}\\)
    
      
    
    Exercise 3
    
    &nbsp;equivalence relationpartial but not a total ordertotal ordernone of the above none of the above&nbsp;
    
    Two different people can be the same age, so the relation is not antisymmetric, ruling out **partial order** and **total order**. It is not symmetric, since a 4-year-old is related to a 2-year-old, but not conversely, ruling out **equivalence relation**. Note that as a relation on their _ages_, this would be the same as the divisibility relation on nonnegative integers, for which **partial but not a total order** would have been correct. Yes, this was a bit of a trick question.
    
    CheckShow Answer
    

*   [BackProperties Of Relations](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence/vertical-d7f7704d23b4)
*   [Continue Degrees & Isomorphism](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-2)