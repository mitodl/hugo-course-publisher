---
title: 3.1 Sums & Products
course_id: 6-042j-mathematics-for-computer-science-spring-2015
---
*   [<Summation]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-2/vertical-a64ff304ccd5" %}})
*   [3.1.1Arithmetic Sums: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-2/_index.md" %}})
*   [3.1.2Perturbation by Young Gauss]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-2/vertical-56598c481e1a" %}})
*   [3.1.3Geometric Sums: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-2/vertical-46a80f3884d6" %}})
*   [3.1.4Annuities]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-2/vertical-7019fdda010c" %}})
*   [3.1.5Book Stacking: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-2/vertical-d3f74a0ca5a8" %}})
*   [3.1.6Harmonic Numbers]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-2/vertical-c496866a2419" %}})
*   [3.1.7Integral Method: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-2/vertical-65e8069d3ac4" %}})
*   [3.1.8Integral Method Demystified]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-2/vertical-efaab47d6b5a" %}})
*   [3.1.9Stirling's Formula: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-2/vertical-356e14210c43" %}})
*   [3.1.10Applying Stirling's Formula]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-2/vertical-109177f07958" %}})
*   [3.1.11Convergence of Geometric Series]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-2/convergence-of-geometric-series" %}})
*   [3.1.12Summation]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-2/vertical-a64ff304ccd5" %}})
*   [3.1.13Sum's Upper Lower Bounds]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-2/vertical-9f131aae203e" %}})
*   [\\>Asymptotics]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/_index.md" %}})

Sum's Upper Lower Bounds
------------------------

  

Let \\(S\\ =\\ \\sum\\limits\_{n=1}^{57} \\frac{1}{\\sqrt\[3\]{n+7}}\\). The Integral Method provides the lower and upper bounds on \\(S\\). By how much does the upper bound differ from the lower bound?

Exercise 1

&nbsp;Numerical Response&nbsp;

\\(\\frac{1}{\\sqrt\[3\]{n+7}}\\) is strictly decreasing over \\(n = 1, 2, 3,..., 57 \\). The lower bound is \\(I+f(57) = I + \\frac{1}{\\sqrt\[3\]{57+7}} = I + \\frac{1}{4}\\). The upper bound is \\(I+f(1) = I + \\frac{1}{\\sqrt\[3\]{1+7}} = I + \\frac{1}{2}\\). So the bounds differ by \\((I + \\frac{1}{2}) - (I + \\frac{1}{4}) = \\frac{1}{4}\\). The value of \\(I\\) is not important to the question, but it equals the difference between \\((3/2)((n+7)^{2/3})\\) evaluated at 57 and at 1, namely, \\((3/2)\[64^{2/3} - 8^{2/3}\] = (3/2)\[4^2 - 2^2\] = 18\\).

CheckShow Answer

*   [BackSummation]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-2/vertical-a64ff304ccd5" %}})
*   [ContinueAsymptotics]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/tp8-3/_index.md" %}})