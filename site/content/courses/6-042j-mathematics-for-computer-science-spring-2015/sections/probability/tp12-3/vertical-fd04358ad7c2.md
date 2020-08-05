---
title: '4.4 Random Variables, Density Functions'
course_id: 6-042j-mathematics-for-computer-science-spring-2015
type: course
layout: course_section
---
*   [<Late For A Date]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-5a2c58463701" %}})
*   [4.4.1Bigger Number Game: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/_index.md" %}})
*   [4.4.2Random Variables: Independence: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-af2ad400f984" %}})
*   [4.4.3Odd Heads and Matches]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-12926a05d1ba" %}})
*   [4.4.4Random Variables: Uniform & Binomial: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-c596d4103fc3" %}})
*   [4.4.5Late For A Date]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-5a2c58463701" %}})
*   [4.4.6A Random Number]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-fd04358ad7c2" %}})
*   [4.4.7PDF to CDF]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-0527081b6af3" %}})
*   [4.4.8Dice And Coin Game]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-f27f5990f502" %}})
*   [\\>PDF to CDF]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-0527081b6af3" %}})

A Random Number
---------------

  

Here is a process to construct a random number:

1.  Flip a biased coin that comes up heads with probability \\(\\frac{3}{5}\\).
2.  *   If you get heads, you roll a fair die and return the result.
    *   Otherwise, you flip a fair coin 3 times and return twice the number of heads.

Let \\(N\\) be the number that you return.

Let \\(F\\) be the indicator random variable for the first coin flip (1 if heads and 0 if tails).

Please answer in the form of a decimal with three significant figures.

1.  What is \\(\\Pr\[N=0\]\\)?
    
    Exercise 1
    
    &nbsp;Numerical Response&nbsp;
    
    The only way to get 0 is if you first flip tails and then flip 0 heads. Therefore,
    
    \\(\\Pr\[N=0\] = \\Pr\[F=0 \\text{ AND } 0 \\text{ heads}\] = \\Pr\[F=0\]\\Pr\[0 \\text{ heads}\] = \\frac{2}{5}\\cdot\\frac{1}{8}=\\frac{1}{20}\\).
    
  
3.  What is \\(\\Pr\[N=3\]\\)?
    
    Exercise 2
    
    &nbsp;Numerical Response&nbsp;
    
    The only way to get 3 is if you first flip heads and then roll a 3. Therefore,
    
    \\(\\Pr\[N=3\] = \\Pr\[F=1 \\text{ AND roll } 3\] = \\Pr\[F=1\] \\Pr\[\\text{roll } 3\] = \\frac{3}{5}\\cdot \\frac{1}{6} = \\frac{1}{10}\\).
    
  
5.  What is \\(\\Pr\[N=6\]\\)?
    
    Exercise 3
    
    &nbsp;Numerical Response&nbsp;
    
    You can get 6 either by flipping heads and rolling a 6 or by flipping tails and then flipping 3 heads. Therefore,
    
    \\(\\Pr\[N=6\] = \\Pr\[F=1 \\text{ AND roll } 6\] + \\Pr\[F=0 \\text{ AND } 3 \\text{ heads}\] = \\frac{3}{5}\\cdot \\frac{1}{6} + \\frac{2}{5}\\cdot \\frac{1}{8} = \\frac{3}{20}\\).
    
  
7.  What is \\(\\Pr\[N=7\]\\)?
    
    Exercise 4
    
    &nbsp;Numerical Response&nbsp;
    
    There is no way to end up with the number 7.
    
  
9.  What is \\(\\Pr\[N=6\\;|\\;F=0\]\\)?
    
    Exercise 5
    
    &nbsp;Numerical Response&nbsp;
    
    Given that \\(F=0\\), we know that the first coin flip was tails. So, we are in the case where the fair coin is flipped 3 times. In that case, we get 6 only by flipping 3 heads. The probability of this happening is \\(\\frac{1}{8}\\).
    
  
11.  What is \\(\\Pr\[F=0\\;|\\;N=6\]\\)?
    
    Exercise 6
    
    &nbsp;Numerical Response&nbsp;
    
    We use the definition of conditional probability to compute:
    
    \\(\\Pr\[F=0\\;|\\;N=6\] = \\dfrac{\\Pr\[F=0 \\text{ AND } N=6\]}{\\Pr\[N=6\]} = \\dfrac{\\frac{2}{5}\\cdot \\frac{1}{8}}{\\frac{3}{20}} = \\frac{1}{3}\\),
    
    (where, for the denominator, we used the answer to a previous question). Hence, if somebody else has run the process and ended up with 6, we know there is 1 in 3 chance that he had to flip the fair coin.
    
  
13.  What is \\(\\Pr\[N+F=5\]\\)?
    
    Exercise 7
    
    &nbsp;Numerical Response&nbsp;
    
    If \\(F=0\\), then we are flipping the fair coin and doubling the number of heads, so \\(N\\) is even, and therefore, \\(N+F\\) cannot be odd. Hence, the only way for \\(N+F\\) to be odd is if \\(F=1\\). Then \\(N+F=5\\) if and only if \\(N=4\\), which happens exactly when we roll a 4. Overall,
    
    \\(\\Pr\[N+F=5\] = \\Pr\[F=1 \\text{ AND } N=4\] = \\Pr\[F=1\] \\Pr\[\\text{roll } 4\] = \\frac{3}{5}\\cdot \\frac{1}{6} = \\frac{1}{10}\\).
    
  
15.  What is \\(\\Pr\[N+F=6\]\\)?
    
    Exercise 8
    
    &nbsp;Numerical Response&nbsp;
    
    This can happen either because \\(F=1\\) and \\(N=5\\) or because \\(F=0\\) and \\(N=6\\).
    
    \\(\\Pr\[N+F=6\] = \\Pr\[F=1 \\text{ AND } N=5\] + \\Pr\[F=0 \\text{ AND } N=6\] = \\frac{3}{5}\\cdot \\frac{1}{6} + \\frac{2}{5}\\cdot \\frac{1}{8} = \\frac{3}{20}\\).
    
    CheckShow Answer
    

*   [BackLate For A Date]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-5a2c58463701" %}})
*   [ContinuePDF to CDF]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/vertical-0527081b6af3" %}})