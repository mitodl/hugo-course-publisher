---
title: '4.6 Deviation: Markov & Chebyshev Bounds'
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 8cfdfe8051ab2e4df313541e627aafbc_vertical-82fa33baa07e
    weight: 210
    parent: f195ee849b9aee3ccf61f90bea10cebb_tp13-2
---
*   [<Chebyshev Bounds: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-49f940bfd8d6)
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
*   [\>Variance: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-0646c16ad916)

Inside the TA's brain
---------------------

Recent studies have shown that some small area in our brains is sensitive to _nonsensical structures_: the 1,000,000 neurons of that area seem to be firing whenever the individual is presented with such structures. This area is now known as the Grader's Area.

In a now famous series of experiments (Pseudoneurologica, 28(1):123-129, 1999), several 6.042 TAs have been presented with students' solutions to exam problems. On reading a solution, the _expected number_ of neurons to fire in the Grader's Area was estimated to be 550,000. Assume that this estimate is indeed correct.

Moreover, a TA realizes that a solution is _bad_ if the number of neurons in his/her Grader's Area that fire is greater than the number of neurons that do not by 200,000.

1.  What is the least number of neurons in the Grader's Area that must fire in order for the TA to realize that a solution is bad?
    
    Exercise 1
    
    &nbsp;Numerical Response&nbsp;
    
    In order for the neurons that fire to be at least 200,000 more than those that do not fire, they should be at least 100,000 more than half the total number of neurons. That is: 500,000 + 100,000 = 600,000.
    
  
3.  With the information given, provide the best bound on the probability that the TA realizes a solution is bad. Please answer as a fraction of the form x/y.
    
    Exercise 2
    
    &nbsp;Numerical Response&nbsp;
    
    Let \\(R\\) be the number of neurons that fire. Then \\(E\[R\]=550,000\\) and a bad solution is recognized iff \\(R\\geq 600,000\\). Therefore, the probability we want is \\(\\Pr\[R\\geq 600,000\]\\). We are not given the variance, so we cannot use Chebyshev. By Markov's Theorem, \\\[\\Pr\[R\\geq 600,000\] \\leq \\frac{E\[R\]}{600,000} = \\frac{550,000}{600,000} = \\frac{11}{12}.\\\]
    
  
5.  In a follow-up study the standard deviation of the number of neurons that fire on seeing a bad solution was found to be 25,000. Using this additional information, provide a better bound on the probability that the TA realizes a solution is bad. Please answer as a fraction of the form x/y.
    
    Exercise 3
    
    &nbsp;Numerical Response&nbsp;
    
    Let \\(R\\) be as above. Then the new study says that \\(Var\[R\]=(25,000)^2\\). According to Chebyshev, \\\[\\Pr\[|R - E\[R\]|\\geq x\] \\leq \\frac{Var\[R\]}{x^2} = \\\]
    
    We want to upper bound the probability that \\(R \\geq 600,000\\). Equivalently, this is the probability that \\(R - 550,000 \\geq 50,000\\). The way to use Chebyshev's Theorem is to plug in \\(x = 50,000\\). Then, we get \\\[Pr\[|R-550,000| \\geq 50,000\] \\leq \\frac{25,000^2}{50,000^2} = \\frac{1}{4}.\\\]
    
    Note that this is really an upper bound for the probability that
    
    \\(R \\geq 600,000\\) **or** \\(R \\leq 500,000\\).
    
    _There are "one-sided" versions of Chebyshev Bounds, which we omit, that give a slightly tighter bound for the probability of just \\(R \\geq 600,000\\)._
    
    CheckShow Answer
    

*   [BackChebyshev Bounds: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-49f940bfd8d6)
*   [ContinueVariance: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-0646c16ad916)