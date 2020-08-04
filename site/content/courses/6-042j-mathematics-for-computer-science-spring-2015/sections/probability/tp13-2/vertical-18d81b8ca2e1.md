---
title: '4.6 Deviation: Markov & Chebyshev Bounds'
course_id: 6-042j-mathematics-for-computer-science-spring-2015
type: course
layout: course_section
---
*   [<Deviation: Markov & Chebyshev Bounds]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-2/_index.md" %}})
*   [4.6.1Deviation From The Mean: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-2/_index.md" %}})
*   [4.6.2Don't Expect the Expectation]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-2/vertical-18d81b8ca2e1" %}})
*   [4.6.3Markov Bounds: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-2/vertical-8307292b80cb" %}})
*   [4.6.4Markov Bound]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-2/vertical-ecd276750fa8" %}})
*   [4.6.5Chebyshev Bounds: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-2/vertical-49f940bfd8d6" %}})
*   [4.6.6Inside the TA's Brain]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-2/vertical-82fa33baa07e" %}})
*   [4.6.7Variance: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-2/vertical-0646c16ad916" %}})
*   [4.6.8Practice with Variance]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-2/vertical-1b1a945bfd78" %}})
*   [4.6.9Flipping Coins]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-2/vertical-871f95303dd6" %}})
*   [4.6.10Practice with Bounds]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-2/vertical-00ed1bc2728f" %}})
*   [4.6.11Implications of Expectation]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-2/vertical-4699d069607e" %}})
*   [\\>Markov Bounds: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-2/vertical-8307292b80cb" %}})

Don't Expect The Expectation
----------------------------

  

Toss 51 fair coins.

1.  What is the expected number of heads? Please answer in the form of a decimal.
    
    Exercise 1
    
    &nbsp;Numerical Response&nbsp;
    
    Let \\(X\\) be the number of heads. Then \\(X\\) has a binomial distribution, where \\(E\[X\]=np=51\\cdot\\frac{1}{2}=25.5\\)
    
  
3.  What is the probability of getting exactly 25 heads? Please answer in the form of a decimal with 4 significant digits.
    
    Exercise 2
    
    &nbsp;Numerical Response&nbsp;
    
    Let \\(X\\) be as above. Then \\(\\Pr\[X=25\]=PDF\_X(25)=\\binom{51}{25}\\cdot\\frac{1}{2^{51}}\\)
    
    CheckShow Answer
    

*   [BackDeviation: Markov & Chebyshev Bounds]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-2/_index.md" %}})
*   [ContinueMarkov Bounds: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-2/vertical-8307292b80cb" %}})