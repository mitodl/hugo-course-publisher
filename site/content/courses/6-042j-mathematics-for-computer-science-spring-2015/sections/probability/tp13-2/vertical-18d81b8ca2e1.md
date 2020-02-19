---
title: '4.6 Deviation: Markov & Chebyshev Bounds'
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 32083d171084493e0e243de2006b045c_vertical-18d81b8ca2e1
    weight: 2700
    parent: f195ee849b9aee3ccf61f90bea10cebb_tp13-2
---
*   [<Deviation: Markov & Chebyshev Bounds](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2)
*   [4.6.1Deviation From The Mean: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2)
*   [4.6.2Don't Expect the Expectation](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-18d81b8ca2e1)
*   [4.6.3Markov Bounds: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-8307292b80cb)
*   [4.6.4Markov Bound](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-ecd276750fa8)
*   [4.6.5Chebyshev Bounds: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-49f940bfd8d6)
*   [4.6.6Inside the TA's Brain](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-82fa33baa07e)
*   [4.6.7Variance: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-0646c16ad916)
*   [4.6.8Practice with Variance](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-1b1a945bfd78)
*   [4.6.9Flipping Coins](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-871f95303dd6)
*   [4.6.10Practice with Bounds](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-00ed1bc2728f)
*   [4.6.11Implications of Expectation](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-4699d069607e)
*   [\>Markov Bounds: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-8307292b80cb)

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
    

*   [BackDeviation: Markov & Chebyshev Bounds](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2)
*   [ContinueMarkov Bounds: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-8307292b80cb)