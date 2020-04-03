---
title: 4.7 Sampling & Confidence
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: eb8fdc92ee3c0282d8b9bfe72361c38b
    weight: 2830
    parent: a3bc4574329a2834df030de577ce1f81
---
*   [<Independent Sampling Theorem: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-872c5ec0974e)
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
*   [\>Birthday Matching: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-82840a0ba306)

Sampling Coin Tosses
--------------------

  

We toss \\(n\\) fair coins and count the number of heads. Let \\(X\_i\\) be an indicator variable for the \\(i^{th}\\) coin. Let \\(A\_n=\\dfrac{\\sum\_{i=1}^nX\_i}{n}\\).

Please format fractional answers as x/y.

1.  What is \\(E\[A\_n\]\\)?
    
    Exercise 1
    
    &nbsp;Numerical Response&nbsp;
    
    By linearity of expectation, \\(E\[A\_n\]=\\frac{1}{n}\\cdot\\sum\_{i=1}^nE\[X\_i\]=\\frac{1}{2}\\).
    
  
3.  What is the smallest \\(n\\) can be to guarantee \\(\\Pr\[|A\_n-E\[A\_n\]|>\\frac{1}{10}\]\\leq \\frac{1}{25}\\)?
    
    Exercise 2
    
    &nbsp;Numerical Response&nbsp;
    
    Using Chebyshev's Theorem, with \\(\\delta=\\frac{1}{10}\\) and \\(\\sigma^2 = \\frac{1}{4n}\\), we get \\(\\Pr\[|A\_n-E\[A\_n\]|>\\frac{1}{10}\]\\leq \\frac{25}{n}\\), so if \\(n\\geq 625\\) the bound holds.
    
  
5.  What is the smallest \\(\\delta\\) if \\(\\Pr\[|A\_{100}-E\[A\_{100}\]|>\\delta\]\\leq \\frac{1}{4}\\)
    
    Exercise 3
    
    &nbsp;Numerical Response&nbsp;
    
    We are given that \\(n=100\\), and from Chebyshev's theorem we get: \\\[\\frac{1}{4}=\\frac{\\frac{1}{4n}}{\\delta^2}.\\\] Solving for \\(\\delta\\), we get \\(\\delta = \\frac{1}{10}\\).
    
    CheckShow Answer
    

*   [BackIndependent Sampling Theorem: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-872c5ec0974e)
*   [ContinueBirthday Matching: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-82840a0ba306)