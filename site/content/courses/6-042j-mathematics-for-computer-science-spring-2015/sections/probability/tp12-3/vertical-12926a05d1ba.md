---
title: '4.4 Random Variables, Density Functions'
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 5d7758f26a3a9363385cf88d08150951_vertical-12926a05d1ba
    weight: 160
---
*   [<Random Variables: Independence: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-3/vertical-af2ad400f984)
*   [4.4.1Bigger Number Game: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-3)
*   [4.4.2Random Variables: Independence: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-3/vertical-af2ad400f984)
*   [4.4.3Odd Heads and Matches](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-3/vertical-12926a05d1ba)
*   [4.4.4Random Variables: Uniform & Binomial: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-3/vertical-c596d4103fc3)
*   [4.4.5Late For A Date](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-3/vertical-5a2c58463701)
*   [4.4.6A Random Number](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-3/vertical-fd04358ad7c2)
*   [4.4.7PDF to CDF](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-3/vertical-0527081b6af3)
*   [4.4.8Dice And Coin Game](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-3/vertical-f27f5990f502)
*   [\>Random Variables: Uniform & Binomial: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-3/vertical-c596d4103fc3)

Odd Heads And Matches
---------------------

  

We flip 3 coins. Let

\\\[C:=\\#\\text{heads}\\\] \\\[M:=\\begin{cases}1&\\text{if all flips match}\\\\0&\\text{otherwise}\\end{cases}\\\] \\\[O:= \\text{ odd #heads}\\\]

Let \\(I\_O\\) be the indicator variable for \\(O\\).

We want to show that \\(I\_O\\) and \\(M\\) are independent. Please enter all answers in the form of decimals with three significant digits.

1.  What is \\(\\Pr\[I\_O=1\]\\)?
    
    Exercise 1
    
    &nbsp;Numerical Response&nbsp;
    
    \\(\\Pr\[I\_O=1\]=\\Pr\[O\]=\\Pr\[C=1 \\text{OR} C=3\]=\\Pr\[C=1\]+\\Pr\[C=3\]=\\frac{3}{8}+\\frac{1}{8}=\\frac{1}{2}\\)
    
  
3.  What is \\(\\Pr\[I\_O=0\]\\)?
    
    Exercise 2
    
    &nbsp;Numerical Response&nbsp;
    
    \\(\\Pr\[I\_O=0\]=1-\\Pr\[I\_O=1\]=\\frac{1}{2}\\)
    
  
5.  What is \\(\\Pr\[M=1\]\\)?
    
    Exercise 3
    
    &nbsp;Numerical Response&nbsp;
    
    \\(M=1\\) if we get all heads or all tails. Hence, \\(\\Pr\[M=1\]=\\Pr\[HHH\]+\\Pr\[TTT\]=\\frac{1}{8}+\\frac{1}{8}=\\frac{1}{4}\\).
    
  
7.  What is \\(\\Pr\[M=1 \\text{ AND } I\_O=1\]\\)?
    
    Exercise 4
    
    &nbsp;Numerical Response&nbsp;
    
    The only outcome in this event is HHH (all heads).
    
  
9.  What is \\(\\Pr\[M=0 \\text{ AND } I\_O=1\]\\)?
    
    Exercise 5
    
    &nbsp;Numerical Response&nbsp;
    
    The event \\(\[M=0 \\text{ AND } I\_O=1\]\\) is equivalent to \\(C=1\\).
    
  
11.  What is \\(\\Pr\[M=1 \\text{ AND } I\_O=0\]\\)?
    
    Exercise 6
    
    &nbsp;Numerical Response&nbsp;
    
    The only outcome in this event is TTT (all tails).
    
  
13.  What is \\(\\Pr\[M=0 \\text{ AND } I\_O=0\]\\)?
    
    Exercise 7
    
    &nbsp;Numerical Response&nbsp;
    
    The event \\(\[M=0 \\text{ AND } I\_O=0\]\\) is equivalent to \\(C=2\\).
    
    CheckShow Answer
    

Now you should **verify** that \\(\\Pr\[M=k\_1 \\text{ AND } I\_O=k\_2\]=\\Pr\[M=k\_1\]\\Pr\[I\_O=k\_2\]\\) for all \\(k\_1,k\_2\\in \\{0,1\\}\\).

*   [BackRandom Variables: Independence: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-3/vertical-af2ad400f984)
*   [ContinueRandom Variables: Uniform & Binomial: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-3/vertical-c596d4103fc3)