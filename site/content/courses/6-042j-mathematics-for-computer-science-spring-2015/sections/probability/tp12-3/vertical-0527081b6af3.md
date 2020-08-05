---
title: '4.4 Random Variables, Density Functions'
course_id: 6-042j-mathematics-for-computer-science-spring-2015
type: course
layout: course_section
---
*   [<A Random Number]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-fd04358ad7c2" %}})
*   [4.4.1Bigger Number Game: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/_index.md" %}})
*   [4.4.2Random Variables: Independence: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-af2ad400f984" %}})
*   [4.4.3Odd Heads and Matches]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-12926a05d1ba" %}})
*   [4.4.4Random Variables: Uniform & Binomial: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-c596d4103fc3" %}})
*   [4.4.5Late For A Date]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-5a2c58463701" %}})
*   [4.4.6A Random Number]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-fd04358ad7c2" %}})
*   [4.4.7PDF to CDF]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-0527081b6af3" %}})
*   [4.4.8Dice And Coin Game]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-f27f5990f502" %}})
*   [\\>Dice And Coin Game]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-f27f5990f502" %}})

PDF To CDF
----------

  

Let \\(X\\) be a uniformly distributed random variable on the interval \[1,12\]. What is the value of the Cumulative Distribution Function (CDF) at 8? Please enter your answer as a decimal with two significant figures.

Exercise 1

&nbsp;Numerical Response&nbsp;

Since \\(X\\) has a uniform distribution, \\(PDF\_X(x)=\\frac{1}{12}\\) for \\(x\\in \[1, 12\]\\) and 0 otherwise. \\(CDF\_X(x)=\\Pr\[X\\leq x\]=\\sum\_{k=1}^xPDF\_X(k)\\). Plugging in \\(x=8\\), we get \\(CDF\_X(8)=\\sum\_{k=1}^8\\frac{1}{12}=\\frac{8}{12}=\\frac{2}{3}\\).

CheckShow Answer

*   [BackA Random Number]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-fd04358ad7c2" %}})
*   [ContinueDice And Coin Game]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-f27f5990f502" %}})