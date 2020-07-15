---
title: 1.10 Recursive Definition
course_id: 6-042j-mathematics-for-computer-science-spring-2015
---
*   [<Matching Parentheses]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/matching-parentheses" %}})
*   [1.10.1Recursive Data: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/_index.md" %}})
*   [1.10.2Matching Parentheses]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/matching-parentheses" %}})
*   [1.10.3Functions of F18]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/functions-of-f18" %}})
*   [1.10.4Structural Induction: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/structural-induction-video" %}})
*   [1.10.5Structural Induction: Definition]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/structural-induction-definition" %}})
*   [1.10.6Counting Cases]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/counting-cases" %}})
*   [1.10.7Recursive Functions: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/recursive-functions-video" %}})
*   [\\>Structural Induction: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/structural-induction-video" %}})

Building functions in F18
-------------------------

  

1.  Of the starter functions \\(Id\_R\\), constants, \\(sin(x)\\), which are needed to generate \\(cos(x)\\), taking advantage of the identity \\(cos(x) = sin(x + \\pi/2)\\)?
    
    Exercise 1
    
    &nbsp;\\(Id\_R\\) and \\(sin(x)\\)&nbsp;
    
    &nbsp;\\(sin(x)\\) only&nbsp;
    
    &nbsp;constants and \\(sin(x)\\)&nbsp;
    
    &nbsp;\\(Id\_R\\), constants, and \\(sin(x)\\)&nbsp;
    
    All 3 are needed; we use \\(Id\_R\\) to get \\(x\\), \\(\\pi/2\\) is a constant, and of course, we need \\(sin()\\).
    
2.  In the above process, which of the following rules are used?
    
    Exercise 2
    
    &nbsp;Addition&nbsp;
    
    &nbsp;Multiplication&nbsp;
    
    &nbsp;Exponentiation&nbsp;
    
    &nbsp;Inverse&nbsp;
    
    &nbsp;Composition&nbsp;
    
    Addition is needed to derive \\(x + \\pi/2\\) and composition is needed to compose \\(sin()\\) and \\(x + \\pi/2\\).
    
    CheckShow Answer
    

*   [BackMatching Parentheses]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/matching-parentheses" %}})
*   [ContinueStructural Induction: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/structural-induction-video" %}})