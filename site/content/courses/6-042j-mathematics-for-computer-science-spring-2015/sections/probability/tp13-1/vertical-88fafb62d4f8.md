---
title: 4.5 Expectation
course_id: 6-042j-mathematics-for-computer-science-spring-2015
---
*   [<Binomial Board Breaking]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-49116fd8c065" %}})
*   [4.5.1Expectation: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/_index.md" %}})
*   [4.5.2Uneven Dice]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-d324b518e79a" %}})
*   [4.5.3Expected Number Of Heads: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-07d1783f0da3" %}})
*   [4.5.4Expected Number of Heads]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-932dca21218a" %}})
*   [4.5.5Total Expectation: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-6913b2097610" %}})
*   [4.5.6Another Dice and Coin Game]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-3506cf32b49b" %}})
*   [4.5.7Mean Time to Failure: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-e8dee31ddd76" %}})
*   [4.5.8Three Machines Failing]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-f2cac6de0392" %}})
*   [4.5.9Linearity of Expectation: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-49ea207a6233" %}})
*   [4.5.10Fair and Biased Coins]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-4f20b89f006a" %}})
*   [4.5.11Binomial Board Breaking]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-49116fd8c065" %}})
*   [4.5.12Great Expectations]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-88fafb62d4f8" %}})
*   [4.5.13Expectation of a Uniform Distribution]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-0a1dc9049ff4" %}})
*   [\\>Expectation of a Uniform Distribution]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-0a1dc9049ff4" %}})

Great Expectations
------------------

  

1.  What is the expected sum of the numbers that come up when you roll a fair 6-sided die and a fair 12-sided die?  
    _\[Assume the faces have values 1-6 and 1-12, respectively.\]_
    
    Exercise 1
    
    &nbsp;Numerical Response&nbsp;
    
    The expectation of a sum is the sum of the individual expectations, so
    
    \\(\\frac{1+2+...+6}{6} + \\frac{1+2+...+12}{12} = \\frac{7}{2} + \\frac{13}{2}=10\\).
    
  
3.  Suppose you have two computers: Computer 1 generates a random number in the set \\(\\{1,2,\\ldots,99\\}\\) with all numbers equally likely. Similarly, Computer 2 generates a random number in \\(\\{1,2,\\ldots,999\\}\\) with all numbers equally likely.
    
    You roll a fair die, and if a 5 comes up, you generate a random number using Computer 1, otherwise you generate a random number using Computer 2. What is the expected value of the number you generate?
    
    Exercise 2
    
    &nbsp;Numerical Response&nbsp;
    
    Let \\(R\\) denote the value on the die, let \\(G\\) denote the generated number, let \\(C\_1\\) denote the number Computer 1 generates and \\(C\_2\\) the one Computer 2 generates.  
    By the law of Total Expectation, \\\[E\[G\] = E\[G\\;|\\;R=5\]\\Pr\[R=5\] + E\[G\\;|\\;R\\neq 5\]\\Pr\[R\\neq 5\]\\\] \\(E\[G\\;|\\;R=5\] = E\[C\_1\]=50\\), since each number is equally likely. Similarly, \\(E\[G\\;|\\;R\\neq 5\]= E\[C\_2\]=500\\). Hence, \\(E\[G\] = \\frac{1}{6}\\cdot 50+\\frac{5}{6}\\cdot 500 = \\frac{2550}{6} = \\fbox{425}.\\)
    
  
5.  Assuming that Computers 1 & 2 act independently, what is the expected value of the product of the numbers they generate?  
    
    Exercise 3
    
    &nbsp;Numerical Response&nbsp;
    
    The Product Rule can be used because the two random variables are independent, so \\\[E\[C\_1\\cdot C\_2\]=E\[C\_1\]\\cdot E\[C\_2\]=50\\cdot 500 = 25000.\\\]
    
    CheckShow Answer
    

*   [BackBinomial Board Breaking]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-49116fd8c065" %}})
*   [ContinueExpectation of a Uniform Distribution]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-0a1dc9049ff4" %}})