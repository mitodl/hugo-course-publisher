---
title: 2.1  GCDs
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 81921d91f774f6e950743785a5034462
    weight: 1000
    parent: 405693053755e5d6fb1b1e2592fa311e
---
*   [<Pulverizer: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp5-1/pulverizer-video" %}})
*   [2.1.1GCDs & Linear Combinations: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp5-1/_index.md" %}})
*   [2.1.2Euclidean Algorithm: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp5-1/euclidean-algorithm-video" %}})
*   [2.1.3Run Euclid Run]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp5-1/vertical-b30047e37cc7" %}})
*   [2.1.4Pulverizer: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp5-1/pulverizer-video" %}})
*   [2.1.5GCDs I]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp5-1/vertical-d1904394a7b7" %}})
*   [2.1.6Revisiting Die Hard: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp5-1/revisiting-die-hard-video" %}})
*   [2.1.7Prime Factorization: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp5-1/prime-factorization-video" %}})
*   [2.1.8Unique Primes]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp5-1/vertical-abe126e3ad2c" %}})
*   [2.1.9Divisors]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp5-1/vertical-70eb5a2913c0" %}})
*   [2.1.10GCDs II]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp5-1/vertical-912ad2b397a4" %}})
*   [\\>Revisiting Die Hard: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp5-1/revisiting-die-hard-video" %}})

GCDs I
------

  
**Consider the two integers:**

\\(a = 21212121\\)  
\\(b = 12121212\\)

1.  What is the GCD of \\(a\\) and \\(b\\)?
    
    _Hint: Looks scary, but it's not._
    
    Exercise 1
    
    &nbsp;Numerical Response&nbsp;
    
    We run the algorithm:
    
    \\\[GCD(21212121,12121212)\\\\ = GCD(12121212,9090909)\\\\ = GCD(9090909,3030303)\\\\ = GCD(3030303,0).\\\]
    
2.  How many steps of the Euclidean algorithm are needed to compute this GCD?
    
    _A step of the Euclidean algorithm is defined as an application of the equation:_
    
    \\(GCD(x,y) = GCD(y, rem(x, y)).\\)
    
    The algorithm begins with \\((a,b)\\) and ends with \\((gcd(a,b),0)\\).
    
    In the execution of the algorithm in Part 1 we needed 3 applications of the equation.
    
    Exercise 2
    
    &nbsp;Numerical Response&nbsp;
    
    CheckShow Answer
    

*   [BackPulverizer: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp5-1/pulverizer-video" %}})
*   [ContinueRevisiting Die Hard: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp5-1/revisiting-die-hard-video" %}})