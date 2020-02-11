---
title: 3.1 Sums & Products
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 5d280af97292c65b978cb823914e77ed_vertical-efaab47d6b5a
    weight: 170
---
*   [<Integral Method: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-65e8069d3ac4)
*   [3.1.1Arithmetic Sums: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2)
*   [3.1.2Perturbation by Young Gauss](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-56598c481e1a)
*   [3.1.3Geometric Sums: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-46a80f3884d6)
*   [3.1.4Annuities](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-7019fdda010c)
*   [3.1.5Book Stacking: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-d3f74a0ca5a8)
*   [3.1.6Harmonic Numbers](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-c496866a2419)
*   [3.1.7Integral Method: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-65e8069d3ac4)
*   [3.1.8Integral Method Demystified](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-efaab47d6b5a)
*   [3.1.9Stirling's Formula: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-356e14210c43)
*   [3.1.10Applying Stirling's Formula](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-109177f07958)
*   [3.1.11Convergence of Geometric Series](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/convergence-of-geometric-series)
*   [3.1.12Summation](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-a64ff304ccd5)
*   [3.1.13Sum's Upper Lower Bounds](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-9f131aae203e)
*   [\>Stirling's Formula: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-356e14210c43)

Integral Method Demystified
---------------------------

  

Let \\(f: \\mathbb{R}^{+} \\rightarrow \\mathbb{R}^{+} \\), \\(S ::= \\sum\\limits\_{i=1}^{n} f(i) \\), \\(I ::= \\int\\limits\_{1}^{n} f(x) dx \\).

1.  What is the upper bound for \\(S \\) when \\(f \\) is weakly increasing?
    
    Exercise 1
    
    &nbsp;\\(I \\)\\(I + f(1) \\)\\(I + f(n) \\)\\(ln(n) \\)\\(I + (1/2)f(n) \\) \\(I + f(n) \\)&nbsp;
    
2.  What is the upper bound for \\(S \\) when \\(f \\) is weakly decreasing?
    
    Exercise 2
    
    &nbsp;\\(I \\)\\(I + f(1) \\)\\(I + f(n) \\)\\(ln(n) \\)\\(I + (1/2)f(n) \\) \\(I + f(1) \\)&nbsp;
    
3.  What is the lower bound for \\(S \\) when \\(f \\) is weakly increasing?
    
    Exercise 3
    
    &nbsp;\\(I \\)\\(I + f(1) \\)\\(I + f(n) \\)\\(ln(n) \\)\\(I + (1/2)f(n) \\) \\(I + f(1) \\)&nbsp;
    
4.  What is the lower bound for \\(S \\) when \\(f \\) is weakly decreasing?
    
    Exercise 4
    
    &nbsp;\\(I \\)\\(I + f(1) \\)\\(I + f(n) \\)\\(ln(n) \\)\\(I + (1/2)f(n) \\) \\(I + f(n) \\)&nbsp;
    
5.  Do the upper bounds and lower bounds for \\(f \\) change if it is strictly increasing/decreasing instead of weakly increasing/decreasing?
    
    Exercise 5
    
    &nbsp;yesnoit depends no&nbsp;
    
    From weakly increasing/decreasing to strictly increasing/decreasing, simply change the inequality sign from \\(\\le \\) to <.
    
6.  What is the upper bound for \\(H\_n \\)?
    
    Exercise 6
    
    &nbsp;\\(1 + ln(n) \\)\\(ln(n+1) \\)\\(ln(n) \\) \\(1 + ln(n) \\)&nbsp;
    
7.  What is the lower bound for \\(H\_n \\)?
    
    Exercise 7
    
    &nbsp;\\(1 + ln(n) \\)\\(ln(n+1) \\)\\(ln(n) \\) \\(ln(n+1) \\)&nbsp;
    
8.  What is the asymptotic bound for \\(H\_n \\)?
    
    Exercise 8
    
    &nbsp;\\(1 + ln(n) \\)\\(ln(n+1) \\)\\(ln(n) \\) \\(ln(n) \\)&nbsp;
    
    The integral method is for finding the upper and lower bounds of a sum, but it is also helpful in obtaining the asymptotic bound / asymptotic equivalence / asymptotic equality of the sum. Once we have the upper and lower bounds, we take the limit on these bounds as \\(n \\rightarrow \\infty \\).
    
    CheckShow Answer
    

*   [BackIntegral Method: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-65e8069d3ac4)
*   [ContinueStirling's Formula: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-356e14210c43)