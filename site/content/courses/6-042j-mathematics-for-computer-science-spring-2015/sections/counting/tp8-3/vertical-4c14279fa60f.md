---
title: 3.2 Asymptotics
course_id: 6-042j-mathematics-for-computer-science-spring-2015
type: course
layout: course_section
---
*   [<Asymptotics the Right Way]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-9df50ab7aa43" %}})
*   [3.2.1Asymptotic Notation: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/_index.md" %}})
*   [3.2.2Asymptotics as Relations]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-3800c4b1c397" %}})
*   [3.2.3Asymptotic Properties: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-e35ce9684389" %}})
*   [3.2.4Little oh Big Oh]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-5c04897d10e6" %}})
*   [3.2.5Theta]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/theta" %}})
*   [3.2.6Asymptotic Blunders: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-f4d8cd185706" %}})
*   [3.2.7Asymptotics the Right Way]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-9df50ab7aa43" %}})
*   [3.2.8Practice with Big O]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-4c14279fa60f" %}})
*   [3.2.9Practice with Order of Growth]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-171ad650135b" %}})
*   [\\>Practice with Order of Growth]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-171ad650135b" %}})

Practice with Big O
-------------------

  

Find the least nonnegative integer, \\(n\\), such that \\(f(x\\)) is \\(O(x^{n})\\) when \\(f\\) is defined by each of the expressions below.

_If there is none, enter "none"._

1.  \\(f(x) = 2x^{3} + x^{2}\\log x\\)
    
    Exercise 1
    
    &nbsp;Text Response&nbsp; Answer:3
    
    \\(2x^{3}\\) grows as fast as \\(x^{3}\\), and \\(x^2\\log x\\) grows strictly slower than \\(x^{3}\\).
    
  
3.  \\(f(x) =2x^{2} + x^{3}\\log x\\)
    
    Exercise 2
    
    &nbsp;Text Response&nbsp; Answer:4
    
    \\(2x^{2}\\) grows as fast as \\(x^{2}\\), and \\(x^{3}\\log x\\) grows strictly faster than \\(x^{3}\\) but strictly slower than \\(x^{4}\\).
    
  
5.  \\(f(x) =(1.1)^{x}\\)
    
    Exercise 3
    
    &nbsp;Text Response&nbsp; Answer:none
    
    \\((1.1)^{x}\\) grows strictly faster than any polynomial.
    
  
7.  \\(f(x) = (0.1)^{x}\\)
    
    Exercise 4
    
    &nbsp;Text Response&nbsp; Answer:0
    
    As \\(x\\) goes to infinity, \\((0.1)^{x}\\) goes to 0. So it grows strictly slower than any constant (same as a polynomial of degree 0).
    
  
9.  \\(f(x) = \\dfrac{x^{4} + x^{2} + 1}{x^{3} + 1}\\)
    
    Exercise 5
    
    &nbsp;Text Response&nbsp; Answer:1
    
    This fraction grows as fast as \\(x^{4}/x^{3}=x\\).
    
  
11.  \\(f(x) = \\dfrac{x^{4} + 5 \\log x}{x^{4} + 1}\\)
    
    Exercise 6
    
    &nbsp;Text Response&nbsp; Answer:0
    
    This fraction grows as fast as \\(x^{4}/x^{4}=1\\).
    
  
13.  \\(f(x) = 2^{3 \\log\_{2}x^{2}}\\)
    
    Exercise 7
    
    &nbsp;Text Response&nbsp; Answer:6
    
    \\(2 ^{3 \\log\_{2}x^{2}} = 2^{\\log\_{2} (x^{2})^{3}} = 2^{\\log\_{2}x^{2 \\cdot 3}} = 2^{\\log\_{2}x^{6}} = x^{6}\\)
    
    CheckShow Answer
    

*   [BackAsymptotics the Right Way]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-9df50ab7aa43" %}})
*   [ContinuePractice with Order of Growth]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-171ad650135b" %}})