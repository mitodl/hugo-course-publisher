---
title: '4.6 Deviation: Markov & Chebyshev Bounds'
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: a33815eecc3ab193b1758ac9d7fc6d18_vertical-00ed1bc2728f
    weight: 250
    parent: f195ee849b9aee3ccf61f90bea10cebb_tp13-2
---
*   [<Flipping Coins](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-871f95303dd6)
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
*   [\>Implications of Expectation](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-4699d069607e)

Practice with Bounds
--------------------

  

Suppose 120 students take the 6.042 final exam and the mean of their grades is 90. However, you have no other information about the students and the exam, for example, you should not assume that the final is worth 100 points.

1.  State the best possible upper bound on **the number of students** who scored at least 180.
    
    Exercise 1
    
    &nbsp;Numerical Response&nbsp;
    
    Let \\(R\\) be the score of a student chosen at random. According to Markov's Theorem: \\\[\\Pr\[R \\geq 180\] \\leq \\frac{E\[R\]}{180} = \\frac{90}{180} = \\frac{1}{2}.\\\] So at most \\(\\frac{1}{2}\\cdot 120 = 60\\) students scored greater than or equal to 180.
    
  
3.  Now suppose somebody tells you that the lowest score on the exam is 30. Compute the new best possible upper bound on **the number of students** who scored at least 180.
    
    Exercise 2
    
    &nbsp;Numerical Response&nbsp;
    
    Let \\(R\\) be as in the above question. We can apply Markov's Theorem to the variable \\(R-30\\): \\\[\\Pr\[R \\geq 180\] = Pr\[R-30 \\geq 150\] \\leq \\frac{E\[R-30\]}{150} = \\frac{60}{150} = \\frac{2}{5}.\\\] So at most \\(\\frac{2}{5}\\cdot 120 = 48\\) students scored greater than or equal to 180.
    
    CheckShow Answer
    

*   [BackFlipping Coins](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-871f95303dd6)
*   [ContinueImplications of Expectation](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/vertical-4699d069607e)