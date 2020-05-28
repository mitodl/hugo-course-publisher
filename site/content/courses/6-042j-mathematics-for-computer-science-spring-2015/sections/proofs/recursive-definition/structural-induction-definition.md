---
title: 1.10 Recursive Definition
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 85a5d448503dca4eab98376d8f3a64dc
    weight: 800
    parent: dc6ecd4f10b94f9f9744a385e4bab210
---
*   [<Structural Induction: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/structural-induction-video" %}})
*   [1.10.1Recursive Data: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/_index.md" %}})
*   [1.10.2Matching Parentheses]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/matching-parentheses" %}})
*   [1.10.3Functions of F18]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/functions-of-f18" %}})
*   [1.10.4Structural Induction: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/structural-induction-video" %}})
*   [1.10.5Structural Induction: Definition]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/structural-induction-definition" %}})
*   [1.10.6Counting Cases]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/counting-cases" %}})
*   [1.10.7Recursive Functions: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/recursive-functions-video" %}})
*   [\\>Counting Cases]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/counting-cases" %}})

Structural Induction: Definition
--------------------------------

  

To prove \\(P(x)\\) holds for all Q#1 in recursively defined set \\(R\\), prove:

*   \\(P(\\)Q#2\\()\\) for each base case \\(b\\) in Q#3
    
*   \\(P(\\)Q#4\\()\\) for each constructor, \\(c\\), assuming induction hypothesis \\(P(\\)Q#5\\()\\)
    

1.  Which variable should replace the placeholder Q#1?
    
    Exercise 1
    
    &nbsp;\\(b\\)\\(b(x)\\)\\(c\\)\\(c(x)\\)\\(R\\)\\(x\\) \\(x\\)&nbsp;
    
2.  Which variable should replace the placeholder Q#2?
    
    Exercise 2
    
    &nbsp;\\(b\\)\\(b(x)\\)\\(c\\)\\(c(x)\\)\\(R\\)\\(x\\) \\(b\\)&nbsp;
    
3.  Which variable should replace the placeholder Q#3?
    
    Exercise 3
    
    &nbsp;\\(b\\)\\(b(x)\\)\\(c\\)\\(c(x)\\)\\(R\\)\\(x\\) \\(R\\)&nbsp;
    
4.  Which variable should replace the placeholder Q#4?
    
    Exercise 4
    
    &nbsp;\\(b\\)\\(b(x)\\)\\(c\\)\\(c(x)\\)\\(R\\)\\(x\\) \\(c(x)\\)&nbsp;
    
5.  Which variable should replace the placeholder Q#5?
    
    Exercise 5
    
    &nbsp;\\(b\\)\\(b(x)\\)\\(c\\)\\(c(x)\\)\\(R\\)\\(x\\) \\(x\\)&nbsp;
    
    CheckShow Answer
    

*   [BackStructural Induction: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/structural-induction-video" %}})
*   [ContinueCounting Cases]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/counting-cases" %}})