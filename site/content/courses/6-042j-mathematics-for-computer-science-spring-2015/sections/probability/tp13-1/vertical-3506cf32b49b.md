---
title: 4.5 Expectation
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 0f03efb4df2a6db60c1ed631add97393
    weight: 2610
    parent: 025c498f3f5e1c53924f7e40eb06a220
---
*   [<Total Expectation: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-6913b2097610" %}})
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
*   [\\>Mean Time to Failure: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-e8dee31ddd76" %}})

Another Dice And Coin Game
--------------------------

  

Suppose I flip a fair, two-sided coin. If it comes up heads, then I roll a fair six-sided die until I get an odd number and record the value. Otherwise, I roll until I get an even number and record the value.  
Using the law of total expectation, find the expected value of the experiment. Please answer as a decimal with two significant figures.

Exercise 1

&nbsp;Numerical Response&nbsp;

Let \\(C\\) be an indicator variable for the event that the coin comes up heads and let \\(R\\) be the value on the die. Using the Law of Total Expectation, we get \\(E\[R\]=E\[R|C\]\\Pr\[C\]+E\[R|\\overline{C}\]\\Pr\[\\overline{C}\]\\). Firstly, \\(\\Pr\[C\]=\\Pr\[\\overline{C}\]=\\frac{1}{2}\\). Secondly, \\(E\[R|C\] = 1\\cdot\\frac{1}{3}+3\\cdot\\frac{1}{3}+5\\cdot\\frac{1}{3}=3\\) and \\(E\[R|\\overline{C}\] = 2\\cdot\\frac{1}{3}+4\\cdot\\frac{1}{3}+6\\cdot\\frac{1}{3}=4\\). Hence, the answer is \\(\\frac{7}{2}\\).

CheckShow Answer

*   [BackTotal Expectation: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-6913b2097610" %}})
*   [ContinueMean Time to Failure: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp13-1/vertical-e8dee31ddd76" %}})