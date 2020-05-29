---
title: '4.6 Deviation: Markov & Chebyshev Bounds'
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 86839a82d96482dd29969a282d4d6776
    weight: 2770
    parent: f195ee849b9aee3ccf61f90bea10cebb
---
*   [<Practice with Variance]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-2/vertical-1b1a945bfd78" %}})
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
*   [\\>Practice with Bounds]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-2/vertical-00ed1bc2728f" %}})

Flipping Coins
--------------

  

Suppose you flip a fair coin 100 times. The coin flips are all mutually independent.

1.  What is the expected number of heads?
    
    Exercise 1
    
    &nbsp;Numerical Response&nbsp;
    
    Let \\(X\\) denote the number of heads. Let \\(X\_i\\) be the indicator variable that is 1 when the \\(i^{th}\\) coin flip is heads. Then \\\[ X = X\_1+X\_2+\\ldots +X\_{100}.\\\] Hence, by linearity of expectation, \\\[E\[X\] = E\[X\_1+X\_2+\\ldots+X\_{100}\] = E\[X\_1\]+\\ldots+E\[X\_{100}\]\\\] and we need to find the expectation of each individual indicator. We compute: \\\[E\[X\_i\]= 1 \\cdot \\Pr\[\\text{flip head}\] + 0 \\cdot \\Pr\[\\text{flip tail}\] = \\frac{1}{2}.\\\] Putting everything together, we conclude that \\(E\[X\] = 100 \\cdot \\frac{1}{2} = 50\\).
    
  
3.  What is an upper bound on the probability that the number of heads is at least 70 according to Markov's Theorem? Please answer as a fraction in the form x/y.
    
    Exercise 2
    
    &nbsp;Numerical Response&nbsp;
    
    The expected number of heads is 50. So the probability that the number of heads is at least 70 is at most \\(\\frac{50}{70} = \\frac{5}{7}\\).
    
  
5.  What is the variance of the number of heads?
    
    Exercise 3
    
    &nbsp;Numerical Response&nbsp;
    
    Let \\(X\\) and \\(X\_i\\) be as in Question 1. Then, by the independence of the \\(X\_i\\), we know \\\[Var\[X\] = Var\[X\_1 +\\ldots+ X\_{100}\] = Var\[X\_1\]+ \\ldots + Var\[X\_{100}\]\\\] and we need to find the variance of each indicator. We compute: \\\[Var\[X\_i\] = E\[X^2\] - E\[X\]^2 =\\frac{1}{2} - \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}.\\\] Putting everything together, we have \\( Var\[X\] = 100\\cdot \\frac{1}{4} = 25 \\).
    
  
7.  What is an upper bound on the probability that the number of heads is less than 30 or greater than 70 according to Chebyshev's Theorem? Please answer as a fraction in the form x/y.
    
    Exercise 4
    
    &nbsp;Numerical Response&nbsp;
    
    The mean is 50. So, the variable is less than 30 and more than 70 iff it deviates from its mean by \\(20=|30-50|=|70-50|\\) or more. How big is this deviation in comparison to the _standard deviation_? Since the variance of the number of heads is 25, its standard deviation is 5. So, deviation by 20 is 4 times the standard one.
    
    Now, Chebyshev's Theorem says that the probability of the number of heads deviating from its mean by 4 times the standard deviation is \\(\\leq \\frac{1}{4^2} = \\frac{1}{16}\\).
    
    CheckShow Answer
    

*   [BackPractice with Variance]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-2/vertical-1b1a945bfd78" %}})
*   [ContinuePractice with Bounds]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-2/vertical-00ed1bc2728f" %}})