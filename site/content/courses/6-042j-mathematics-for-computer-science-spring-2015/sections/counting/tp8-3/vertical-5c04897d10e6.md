---
title: 3.2 Asymptotics
course_id: 6-042j-mathematics-for-computer-science-spring-2015
type: course
layout: course_section
---
*   [<Asymptotic Properties: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-e35ce9684389" %}})
*   [3.2.1Asymptotic Notation: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/_index.md" %}})
*   [3.2.2Asymptotics as Relations]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-3800c4b1c397" %}})
*   [3.2.3Asymptotic Properties: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-e35ce9684389" %}})
*   [3.2.4Little oh Big Oh]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-5c04897d10e6" %}})
*   [3.2.5Theta]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/theta" %}})
*   [3.2.6Asymptotic Blunders: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-f4d8cd185706" %}})
*   [3.2.7Asymptotics the Right Way]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-9df50ab7aa43" %}})
*   [3.2.8Practice with Big O]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-4c14279fa60f" %}})
*   [3.2.9Practice with Order of Growth]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-171ad650135b" %}})
*   [\\>Theta]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/theta" %}})

Little oh Big Oh
----------------

  

1.  Which of the following is true about the little oh and Big Oh?
    
    Exercise 1
    
    &nbsp;If \\(f = o(g) \\), then \\(f = O(g) \\).&nbsp;
    
    &nbsp;If \\(f = o(g) \\), then \\(g \\neq O(f) \\).&nbsp;
    
    &nbsp;When \\(f \\sim g \\) and \\(f \\neq o(g) \\), \\(f = O(g) \\).&nbsp;
    
    &nbsp;When \\(f \\nsim g \\) and \\(f = o(g) \\), \\(f = O(g) \\).&nbsp;
    
    &nbsp;If \\(f = O(g) \\), then \\(f = o(g) \\).&nbsp;
    
2.  Which of the following is NOT correct about the little oh?
    
    Exercise 2
    
    &nbsp;\\(x^{a} = o(x^{b}) \\) for all integers \\(a \\) and \\(b \\)&nbsp;
    
    &nbsp;\\(b \\cdot x^{a} = o(x^{b}) \\) for all nonnegative constants \\(b > a\\)&nbsp;
    
    &nbsp;\\(ln(x)=o(x^{\\varepsilon}) \\) for all \\(\\varepsilon > 0 \\)&nbsp;
    
    &nbsp;\\(x^{c} = o(a^{x}) \\) for any \\(a, c \\in \\mathbb{R} \\) with \\(a > 1 \\)&nbsp;
    
    &nbsp;\\(log(x)=o(x^{\\epsilon}) \\) for all \\(\\epsilon > 0 \\)&nbsp;
    
3.  Let \\(f(n) = O(g(n)) \\). Why do we say \\(\\limsup\\limits\_{x \\rightarrow \\infty} \\frac{f(x)}{g(x)} \\) < \\(\\infty \\) instead of \\(lim\_{x \\rightarrow \\infty} \\frac{f(x)}{g(x)} \\) < \\(\\infty \\)?
    
    Exercise 3
    
    &nbsp;It accommodates cases in which a limit of \\(f(x)/g(x) \\) does not exist.&nbsp;
    
    &nbsp;The limit superior, \\(limsup \\), is a more strict limit compared to the ordinary limit, \\(lim \\).&nbsp;
    
    &nbsp;\\(O(g(x)) \\) gives an upper bound instead of a lower bound on the growth of \\(f(n) \\).&nbsp;
    
    &nbsp;\\(f(x) \\) can oscillate wildly as long as it never gets bigger than \\(c \\cdot g(x) \\) for \\(x > n \\) and \\(c > 0 \\).&nbsp;
    
    CheckShow Answer
    

*   [BackAsymptotic Properties: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/vertical-e35ce9684389" %}})
*   [ContinueTheta]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/theta" %}})