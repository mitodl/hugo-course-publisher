---
title: 4.7 Sampling & Confidence
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: c42f1d67b437b6299e67518f9cf1c668
    weight: 2850
    parent: a3bc4574329a2834df030de577ce1f81
---
*   [<Birthday Matching: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-82840a0ba306)
*   [4.7.1Law Of Large Numbers: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1)
*   [4.7.2Not So Strong](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-84aa6f70d1c0)
*   [4.7.3Independent Sampling Theorem: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-872c5ec0974e)
*   [4.7.4Sampling Coin Tosses](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-b7cee8c0e19c)
*   [4.7.5Birthday Matching: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-82840a0ba306)
*   [4.7.6Birthdays On Naboo](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-20063bed5f4a)
*   [4.7.7Sampling & Confidence: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-83cee7032f8c)
*   [4.7.8Confidence](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-b6f0d030cb36)
*   [4.7.9Random Sampling](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-0a9b074af4b4)
*   [4.7.10Above Average Number of Fingers](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-2f9ccec3fdf7)
*   [\>Sampling & Confidence: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-83cee7032f8c)

Birthdays On Naboo
------------------

  

200 Nabooan children were born last year and we wish to know how many pairs of them share a birthday.

1.  Assuming that there are 199 days in a Nabooan year, what is the expected number of pairs of matching birthdays?
    
    Exercise 1
    
    &nbsp;Numerical Response&nbsp;
    
    Let \\(M\_{ij}\\) be an indicator that students \\(i\\) and \\(j\\) have the same birthday. Then \\(P=\\sum\\limits\_{1\\leq i < j\\leq 100} M\_{ij}\\) is the number of matching pairs. By linearity of expectation, \\(E\[P\]=\\sum\\limits\_{1\\leq i < j\\leq n}E\[M\_{ij}\]=\\binom{200}{2}\\cdot\\frac{1}{199}=100\\).
    
  
3.  What is the variance? Please answer as a fraction of the form x/y.
    
    Exercise 2
    
    &nbsp;Numerical Response&nbsp;
    
    Since the \\(M\_{ij}\\)'s are pairwise independent, we get that \\(Var\[P\]=\\sum\\limits\_{1\\leq i < j\\leq 100} Var\[M\_{ij}\]=\\binom{100}{2}\\cdot\\frac{1}{199}\\left(1-\\frac{1}{199}\\right)=\\frac{19800}{199}\\).
    
  
5.  Using Chebyshev's inequality, give a lower bound of the probability of having between 80 and 120 pairs of matching birthdays. Please answer as a fraction in the form of 1 - x/y.
    
    Exercise 3
    
    &nbsp;Numerical Response&nbsp;
    
    Using Chebyshev, \\(\\Pr\[|P-E\[P\]| > 20\]\\leq\\frac{Var\[P\]}{20^2}=\\frac{99}{398}\\). Hence, the answer is \\(1-\\frac{99}{398}\\approx 0.25\\).
    
    CheckShow Answer
    

*   [BackBirthday Matching: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-82840a0ba306)
*   [ContinueSampling & Confidence: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-83cee7032f8c)