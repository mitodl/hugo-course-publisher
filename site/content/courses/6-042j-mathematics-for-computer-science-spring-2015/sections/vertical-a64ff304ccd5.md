---
title: 3.1 Sums & Products
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: vertical-a64ff304ccd5
    weight: 1940
---
*   [<Convergence of Geometric Series](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/convergence-of-geometric-series)
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
*   [\>Sum's Upper Lower Bounds](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-9f131aae203e)

Summation
---------

  

There is a number \\(a\\) such that \\(\\sum\\limits\_{i=1}^\\infty i^p\\) converges to a finite value iff \\(p < a\\).

1.  What is the value of \\(a\\)?
    
    Exercise 1
    
    &nbsp;Text Response&nbsp; Answer:-1
    
  
3.  Which of the following would be good approaches as part of a proof that this value of \\(a\\) is correct?
    
    Exercise 2
    
    &nbsp;find a closed form for \\(\\int\_1^\\infty x^p\\: dx \\)&nbsp;
    
    &nbsp;find a closed form for \\(\\int\_1^\\infty i^x\\: dx \\)&nbsp;
    
    &nbsp;induction on \\(p\\)&nbsp;
    
    &nbsp;induction on \\(n\\) using the following sum: \\(\\sum\\limits\_{i=1}^n i^p \\)&nbsp;
    
    &nbsp;compare the series term-by-term with the Harmonic series&nbsp;
    
    Approach 1 is correct. For \\(p \\neq -1 \\), the indefinite integral is \\(\\frac{x^{p+1}}{p+1} \\).
    
    *   If \\(p < -1\\), then \\(p+1 < 0\\), so \\(\\lim\\limits\_{x\\to\\infty} x^{p+1} = 0\\), and the definite integral from 1 to \\(\\infty\\) evaluates to \\(\\frac{-1}{p+1}\\). Hence the sum is bounded from above, and since it is increasing, it has a finite limit, that is, it converges.
    *   If \\(p > -1\\), then \\(p+1 > 0\\), so \\(\\lim\\limits\_{x\\to\\infty}x^{p+1} = \\infty\\), and the definite integral diverges.
    *   If \\(p = -1\\), the indefinite integral is \\(\\log x\\), which also approaches \\(\\infty\\) as \\(x\\) approaches \\(\\infty\\), so the definite integral also diverges.
    
    Approach 4 is incorrect. This would need the ideas from the good approaches to handle the induction step anyway, at which point the induction would be moot.
    
    Approach 5 is correct. For \\(p = -1\\), the sum is the harmonic series, which as we know does not converge. Since the term \\(i^p\\) is increasing in \\(p\\) for \\(i > 1\\), the sum will be larger than the harmonic series, and hence also diverges for \\(p > -1\\).
    
    CheckShow Answer
    

*   [BackConvergence of Geometric Series](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/convergence-of-geometric-series)
*   [ContinueSum's Upper Lower Bounds](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-9f131aae203e)