---
title: 3.2 Asymptotics
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: df4075ebddf723b13e4e1e74f6a84766_vertical-9df50ab7aa43
    weight: 170
    parent: 7fcb07616e2948a6ad10caa832263c78_tp8-3
---
*   [<Asymptotic Blunders](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-3/vertical-f4d8cd185706)
*   [3.2.1Asymptotic Notation: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-3)
*   [3.2.2Asymptotics as Relations](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-3/vertical-3800c4b1c397)
*   [3.2.3Asymptotic Properties: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-3/vertical-e35ce9684389)
*   [3.2.4Little oh Big Oh](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-3/vertical-5c04897d10e6)
*   [3.2.5Theta](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-3/theta)
*   [3.2.6Asymptotic Blunders: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-3/vertical-f4d8cd185706)
*   [3.2.7Asymptotics the Right Way](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-3/vertical-9df50ab7aa43)
*   [3.2.8Practice with Big O](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-3/vertical-4c14279fa60f)
*   [3.2.9Practice with Order of Growth](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-3/vertical-171ad650135b)
*   [\>Practice with Big O](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-3/vertical-4c14279fa60f)

Asymptotics The Right Way
-------------------------

  

1.  On which side of the equal sign should the asymptotic notations \\(O() \\), \\(o() \\), and \\(\\Theta() \\) be used?
    
    Exercise 1
    
    &nbsp; left &nbsp;
    
    &nbsp; right &nbsp;
    
    &nbsp; either &nbsp;
    
2.  Why is the statement "\\(f \\) is at least \\(O(n^2) \\)" a blunder?
    
    Exercise 2
    
    &nbsp;\\(O(n^2) \\) is not a quantity.&nbsp;
    
    &nbsp;Big Oh gives an upper bound on the growth of a function.&nbsp;
    
    &nbsp;\\(O(n^2) \\) is a relation.&nbsp;
    
    &nbsp;If \\(f \\) is at least \\(n^2 \\), then \\(n^2 = O(f) \\).&nbsp;
    
3.  Why is the statement \\(\\sum\_{i=1}^{n} i = O(n) \\) a blunder?
    
    Exercise 3
    
    &nbsp;\\(\\sum\_{i=1}^{n} i = o(n) \\)&nbsp;
    
    &nbsp;The Big Oh relation on individual terms of a sum does not necessarily apply to the sum.&nbsp;
    
    &nbsp;\\(\\sum\_{i=1}^{n} i = \\Theta(n^{2}) \\)&nbsp;
    
    &nbsp;\\(O(1) \\) should not be treated as a number.&nbsp;
    
    CheckShow Answer
    

*   [BackAsymptotic Blunders: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-3/vertical-f4d8cd185706)
*   [ContinuePractice with Big O](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-3/vertical-4c14279fa60f)