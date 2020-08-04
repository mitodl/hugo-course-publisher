---
title: 2.4  RSA Encryption
course_id: 6-042j-mathematics-for-computer-science-spring-2015
type: course
layout: course_section
---
*   [<Relative Primality]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-2/vertical-d2f6dc0d86f4" %}})
*   [2.4.1RSA Public Key Encryption: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-2/_index.md" %}})
*   [2.4.2RSA Encryption]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-2/vertical-3299faa6fc3d" %}})
*   [2.4.3Reducing Factoring To SAT: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-2/vertical-10e2576c9510" %}})
*   [2.4.4Relative Primality]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-2/vertical-d2f6dc0d86f4" %}})
*   [2.4.5RSA computations]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-2/vertical-dea30f1864f2" %}})
*   [\\> Digraphs: Walks & Paths]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/_index.md" %}})

RSA computations
----------------

  

The feasibility and security of the RSA public-key encryption system using keys based on 300-digit primes \\(p, q\\) depends on the fact that certain computations listed below are "easy" and certain others are "hard."

1.  Which of the following computations have to be "easy" in order for RSA to be feasible using keys based on 300 digit primes \\(p,q\\)?  
    _Note that there are some easy computations in this list that are not relevant to RSA._
    
    Exercise 1
    
    &nbsp;testing if a 300-digit number is prime&nbsp;
    
    &nbsp;finding \\(q\\) given \\(p\\) and the product \\(n ::= pq\\)&nbsp;
    
    &nbsp;finding \\(n ::= pq\\) given \\(p,q\\)&nbsp;
    
    &nbsp;finding 300-digit primes \\(p,q\\) given \\(n ::= pq\\)&nbsp;
    
    &nbsp;finding \\(\\Phi(pq)\\) given \\(p,q\\)&nbsp;
    
    &nbsp;generating 300 random digits&nbsp;
    
    &nbsp;finding a 300-digit prime number&nbsp;
    
    &nbsp;factoring a 600-digit number&nbsp;
    
    &nbsp;testing whether a 300-digit number is relatively prime to a given 600-digit number&nbsp;
    
    &nbsp;finding a 300-digit number that is relatively prime to a given 300-digit number&nbsp;
    
    &nbsp;finding an inverse (if there is one) modulo a 600-digit number of a 300-digit number&nbsp;
    
    &nbsp;raising a 600-digit number to a 600-digit power&nbsp;
    
    &nbsp;finding the remainder on division by a 600 digit number \\(n\\) of a 600 digit number raised to a 600 digit power&nbsp;
    
    2: EASY but IRRELEVANT  
    4,8: HARD  
    12: 36000-digit arithmetic is feasible, say using Mathematica, but IRRELEVANT
    
2.  Which of the following computations have to be "hard" in order for RSA to be secure using keys based on 300-digit primes \\(p,q\\)?  
    _Note that there are some hard computations in this list that are not relevant to RSA._
    
    Exercise 2
    
    &nbsp;testing if a 300-digit number is prime&nbsp;
    
    &nbsp;finding \\(q\\) given \\(p\\) and the product \\(n ::= pq\\)&nbsp;
    
    &nbsp;finding \\(n ::= pq\\) given \\(p,q\\)&nbsp;
    
    &nbsp;finding 300-digit primes \\(p,q\\) given \\(n ::= pq\\)&nbsp;
    
    &nbsp;finding \\(\\Phi(pq)\\) given \\(p,q\\)&nbsp;
    
    &nbsp;generating 300 random digits&nbsp;
    
    &nbsp;finding a 300-digit prime number&nbsp;
    
    &nbsp;factoring a 600-digit number&nbsp;
    
    &nbsp;testing whether a 300-digit number is relatively prime to a given 600-digit number&nbsp;
    
    &nbsp;finding a 300-digit number that is relatively prime to a given 300-digit number&nbsp;
    
    &nbsp;finding an inverse (if there is one) modulo a 600-digit number of a 300-digit number&nbsp;
    
    &nbsp;raising a 600-digit number to a 600-digit power&nbsp;
    
    &nbsp;finding the remainder on division by a 600-digit number \\(n\\) of a 600-digit number raised to a 600-digit power&nbsp;
    
    See above explanation.
    
    CheckShow Answer
    

*   [BackRelative Primality]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-2/vertical-d2f6dc0d86f4" %}})
*   [Continue Digraphs: Walks & Paths]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/_index.md" %}})