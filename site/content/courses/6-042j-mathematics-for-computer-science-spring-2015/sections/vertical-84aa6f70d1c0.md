---
title: 4.7 Sampling & Confidence
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: vertical-84aa6f70d1c0
    weight: 2810
---
*   [<Sampling & Confidence](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1)
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
*   [\>Independent Sampling Theorem: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-872c5ec0974e)

Not So Strong
-------------

  

For each positive integer \\(i\\), let the random variable \\(X\_i\\) be defined as:

\\(\\begin{align}\\Pr\[X\_i= \\pm i\\cdot 2^i\] = f(i)\\\\\\Pr\[X\_i=0\]= 1-2f(i)\\end{align}\\)

where \\(0\\leq f(i) \\leq \\frac{1}{2}\\).

Let \\(S\_n:=X\_1+X\_2+\\ldots + X\_n\\).

What is \\(E\[S\_n\]\\)?

Exercise 1

&nbsp;Numerical Response&nbsp;

\\(E\[X\_i\]=-i2^i\\cdot f(i) + 0\\cdot(1-2f(i)) + i2^i\\cdot f(i) = 0\\). By linearity of expectation \\(E\[S\_n\]= 0 \\)

CheckShow Answer

*   [BackSampling & Confidence](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1)
*   [ContinueIndependent Sampling Theorem: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-872c5ec0974e)