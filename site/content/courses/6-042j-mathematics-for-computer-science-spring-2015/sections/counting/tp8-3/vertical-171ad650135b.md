---
title: 3.2 Asymptotics
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 2b8275cbf5d7304c377580b64cb09fc8
    weight: 2040
    parent: 7fcb07616e2948a6ad10caa832263c78
---
*   [<Practice with Big O]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-4c14279fa60f" %}})
*   [3.2.1Asymptotic Notation: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3" %}})
*   [3.2.2Asymptotics as Relations]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-3800c4b1c397" %}})
*   [3.2.3Asymptotic Properties: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-e35ce9684389" %}})
*   [3.2.4Little oh Big Oh]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-5c04897d10e6" %}})
*   [3.2.5Theta]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/theta" %}})
*   [3.2.6Asymptotic Blunders: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-f4d8cd185706" %}})
*   [3.2.7Asymptotics the Right Way]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-9df50ab7aa43" %}})
*   [3.2.8Practice with Big O]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-4c14279fa60f" %}})
*   [3.2.9Practice with Order of Growth]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-171ad650135b" %}})
*   [\\>Counting with Bijections]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp9-1" %}})

Practice with Order of Growth
-----------------------------

  

For each pair of \\(f(n) \\) and \\(g(n) \\) below, determine which of the listed relations apply.

1.  \\(f(n) = log\_{3} n \\) and \\(g(n) = log\_{7} n \\)
    
    Exercise 1
    
    &nbsp;\\(f(n) \\sim g(n) \\)&nbsp;
    
    &nbsp;\\(f(n) = o(g(n)) \\)&nbsp;
    
    &nbsp;\\(f(n) = O(g(n)) \\)&nbsp;
    
    &nbsp;\\(f(n) = \\Theta(g(n)) \\)&nbsp;
    
    &nbsp;None of the above&nbsp;
    
    \\(\\lim\_{n \\rightarrow \\infty} |\\frac{f(n)}{g(n)}| = \\lim\_{n \\rightarrow \\infty} \\frac{ln(n) / ln(3)}{ln(n) / ln(7)} = \\frac{ln(7)}{ln(3)} \\)
    
2.  \\(f(n) = 0 \\) and \\(g(n) = 33 \\)
    
    Exercise 2
    
    &nbsp;\\(f(n) \\sim g(n) \\)&nbsp;
    
    &nbsp;\\(f(n) = o(g(n)) \\)&nbsp;
    
    &nbsp;\\(f(n) = O(g(n)) \\)&nbsp;
    
    &nbsp;\\(f(n) = \\Theta(g(n)) \\)&nbsp;
    
    &nbsp;None of the above&nbsp;
    
    \\(\\lim\_{n \\rightarrow \\infty} |\\frac{f(n)}{g(n)}| = \\lim\_{n \\rightarrow \\infty} \\frac{0}{33} = 0 \\)
    
3.  \\(f(n) = 1 + cos(\\frac{\\pi n}{2}) \\) and \\(g(n) = 1 + sin(\\frac{\\pi n}{2}) \\)
    
    Exercise 3
    
    &nbsp;\\(f(n) \\sim g(n) \\)&nbsp;
    
    &nbsp;\\(f(n) = o(g(n)) \\)&nbsp;
    
    &nbsp;\\(f(n) = O(g(n)) \\)&nbsp;
    
    &nbsp;\\(f(n) = \\Theta(g(n)) \\)&nbsp;
    
    &nbsp;None of the above&nbsp;
    
    \\(\\frac{f(n)}{g(n)} = 0 \\) for \\(n \\equiv 1 (\\text{mod } 4) \\), and \\(\\frac{g(n)}{f(n)} = 0 \\) for \\(n \\equiv 0 (\\text{mod } 4) \\), so the 2 functions and their quotient never converge to some limit.
    
4.  \\(f(n) = 1.01^{n} \\) and \\(g(n) = n^{100} \\)
    
    Exercise 4
    
    &nbsp;\\(f(n) \\sim g(n) \\)&nbsp;
    
    &nbsp;\\(f(n) = o(g(n)) \\)&nbsp;
    
    &nbsp;\\(f(n) = O(g(n)) \\)&nbsp;
    
    &nbsp;\\(f(n) = \\Theta(g(n)) \\)&nbsp;
    
    &nbsp;None of the above&nbsp;
    
    \\(\\lim\_{n \\rightarrow \\infty} |\\frac{f(n)}{g(n)}| = \\lim\_{n \\rightarrow \\infty} \\frac{1.01^{n}}{n^{100}} = \\lim\_{n \\rightarrow \\infty} \\frac{1.01^{n} ln(1.01)}{100 \\cdot n^{99}} = ... = \\lim\_{n \\rightarrow \\infty} \\frac{1.01^{n} ln(1.01)^{100}}{100!} = \\infty \\)
    
    CheckShow Answer
    

*   [BackPractice with Big O]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-4c14279fa60f" %}})
*   [ContinueCounting with Bijections]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp9-1" %}})