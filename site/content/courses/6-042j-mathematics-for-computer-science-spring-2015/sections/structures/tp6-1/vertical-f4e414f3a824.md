---
title: 2.3  Euler's Theorem
course_id: 6-042j-mathematics-for-computer-science-spring-2015
type: course
layout: course_section
---
*   [<Fermat's Little Theorem]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-1/vertical-0be4c94c5864" %}})
*   [2.3.1Modular Exponentiation Euler's Function: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-1/_index.md" %}})
*   [2.3.2Euler's Totient Function]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-1/vertical-62a25d1dd25f" %}})
*   [2.3.3The Ring Z: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-1/vertical-96037fd2d933" %}})
*   [2.3.4The Ring]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-1/vertical-cad174bba3a3" %}})
*   [2.3.5Z mod n]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-1/vertical-ad604933e05b" %}})
*   [2.3.6Fermat's Little Theorem]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-1/vertical-0be4c94c5864" %}})
*   [2.3.7Euler's Theorem]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-1/vertical-f4e414f3a824" %}})
*   [\\> RSA Encryption]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-2/_index.md" %}})

Euler's Theorem
---------------

  

1.  What is the value of \\(\\Phi(175) \\), where \\(\\Phi \\) is Euler's Totient function?
    
    Exercise 1
    
    &nbsp;Text Response&nbsp; Answer:120
    
    Noting that \\(175 = 5^2 \\cdot 7\\). It follows that \\(\\Phi(175)=(5^2 - 5^1)(7-1) = 20 \\cdot 6 = 120\\).
    
2.  What is the remainder of \\(22^{12001}\\) divided by \\(175\\)?
    
    Exercise 2
    
    &nbsp;Text Response&nbsp; Answer:22
    
    \\(22^{12001} = 22^{(120 \\cdot 100) + 1} = 22^{120^{100}} \\cdot 22 \\equiv 1^{100} \\cdot 22 \\equiv 22 \\text{ mod } 175\\).
    
    CheckShow Answer
    

*   [BackFermat's Little Theorem]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-1/vertical-0be4c94c5864" %}})
*   [Continue RSA Encryption]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-2/_index.md" %}})