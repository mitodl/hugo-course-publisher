---
title: 4.5 Expectation
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: vertical-4f20b89f006a
    weight: 2650
---
*   [<Linearity of Expectation: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-49ea207a6233)
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
*   [\>Binomial Board Breaking](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-49116fd8c065)

Fair And Biased Coins
---------------------

  

Say I flip 200 coins, 100 of which are fair, and 100 of which land on heads with probability \\(\\frac{1}{4}\\).  
What is the expected number of heads?

Exercise 1

&nbsp;Numerical Response&nbsp;

Let \\(R\_i\\) be an indicator variable for the \\(i^{th}\\) fair coin, where \\(R\_i = \\begin{cases} 1 & i^{th}\\text{ flip is heads} \\\\ 0 & i^{th}\\text{ flip is tails} \\end{cases}\\).  
Similarly, define \\(S\_j\\) as the indicator variable for the \\(j^{th}\\) biased coin.  
Then, the number of heads is given by \\(H=R\_1+R\_2+\\ldots +R\_{100}+S\_1+S\_2+\\ldots+S\_{100}\\).  
By linearity of expectation, \\\[E\[H\]=E\[R\_1+R\_2+\\ldots +R\_{100}+S\_1+S\_2+\\ldots+S\_{100}\]\\\] \\\[=E\[R\_1\]+E\[R\_2\]+\\ldots +E\[R\_{100}\]+E\[S\_1\]+E\[S\_2\]+\\ldots+E\[S\_{100}\]\\\] \\\[=100\\cdot\\frac{1}{2}+100\\cdot\\frac{1}{4}=50+25=75.\\\]

CheckShow Answer

*   [BackLinearity of Expectation: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-49ea207a6233)
*   [ContinueBinomial Board Breaking](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-49116fd8c065)