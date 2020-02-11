---
title: 4.5 Expectation
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: e211deccac9515d49ceb30e7a41528a9_vertical-49116fd8c065
    weight: 250
    parent: 025c498f3f5e1c53924f7e40eb06a220_tp13-1
---
*   [<Fair and Biased Coins](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-4f20b89f006a)
*   [4.5.1Expectation: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1)
*   [4.5.2Uneven Dice](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-d324b518e79a)
*   [4.5.3Expected Number Of Heads: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-07d1783f0da3)
*   [4.5.4Expected Number of Heads](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-932dca21218a)
*   [4.5.5Total Expectation: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-6913b2097610)
*   [4.5.6Another Dice and Coin Game](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-3506cf32b49b)
*   [4.5.7Mean Time to Failure: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-e8dee31ddd76)
*   [4.5.8Three Machines Failing](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-f2cac6de0392)
*   [4.5.9Linearity of Expectation: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-49ea207a6233)
*   [4.5.10Fair and Biased Coins](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-4f20b89f006a)
*   [4.5.11Binomial Board Breaking](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-49116fd8c065)
*   [4.5.12Great Expectations](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-88fafb62d4f8)
*   [4.5.13Expectation of a Uniform Distribution](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-0a1dc9049ff4)
*   [\>Great Expectations](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-88fafb62d4f8)

Binomial Board Breaking
-----------------------

  

Bruce Lee is practicing his skills for an unreleased movie by breaking 5 boards with his fists.  
Assume he breaks a board with probability 0.8 (he is practicing his left fist; that's why the probability is not 1) and that he breaks each board independently.

1.  What is the probability that Bruce breaks exactly 2 out of the 5 boards that are placed before him? Please answer in the form of a decimal with four significant digits.
    
    Exercise 1
    
    &nbsp;Numerical Response&nbsp;
    
    This is the standard Binomial probability: There are \\(\\binom{5}{2}\\) ways for 2 of the 5 boards to be broken. Each one of these ways happens with probability \\(0.8^2\\cdot 0.2^3\\). Overall, the probability is: \\\[\\binom{5}{2}\\cdot 0.8^2\\cdot 0.2^3 = \\frac{5!}{3!\\cdot 2!}\\cdot\\left(\\frac{8}{10}\\right)^2\\cdot\\left(\\frac{2}{10}\\right)^3\\\]
    
  
3.  What is the probability that Bruce breaks at most 3 out of the 5 boards that are placed before him? Please answer in the form of a decimal with five significant digits.
    
    Exercise 2
    
    &nbsp;Numerical Response&nbsp;
    
    This is 1 minus the probability that 4 or 5 boards will be broken. There is 1 way for all 5 boards to be broken, and this happens with probability \\(0.8^5\\). Similarly, there are \\(\\binom{5}{4}\\) ways for 4 boards to be broken, and each happens with probability \\(0.8^4\\cdot 0.2\\). So, the overall probability is: \\\[1-\\binom{5}{4}\\cdot 0.8^4\\cdot 0.2-0.8^5\\\]
    
  
5.  What is the expected number of boards Bruce will break?
    
    Exercise 3
    
    &nbsp;Numerical Response&nbsp;
    
    The expectation of a \\((p,n)\\)- binomial distribution is \\(np\\). Here, \\(p = 0.8\\) and \\(n = 5\\).
    
    CheckShow Answer
    

*   [BackFair and Biased Coins](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-4f20b89f006a)
*   [ContinueGreat Expectations](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-88fafb62d4f8)