---
title: 4.5 Expectation
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: vertical-0a1dc9049ff4
    weight: 2680
---
*   [<Great Expectations](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-88fafb62d4f8)
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
*   [\>Deviation: Markov & Chebyshev Bounds](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2)

Expectation of a Uniform Distribution
-------------------------------------

Let \\(X\\) be a random variable with uniform distribution over the integers from \\(-n\\) to \\(n\\). Let \\(Y := X^2\\).

Which of the following are true?

Exercise 1

&nbsp;\\(E\[X\] = 0\\)&nbsp;

&nbsp;\\(E\[Y\] = 0\\)&nbsp;

&nbsp;\\(E\[Y\] > E\[X\]\\)&nbsp;

&nbsp;\\(E\[X+Y\] = E\[X\]+E\[Y\]\\)&nbsp;

&nbsp; \\(E\[XY\] = E\[X\]E\[Y\]\\)&nbsp;

&nbsp;\\(X\\) and \\(Y\\) are independent variables&nbsp;

&nbsp;\\(E\[Y^2\] = E\[Y\]\\)&nbsp;

1.  Since \\(PDF\_X(x)\\) is symmetric around 0, we know the mean has to be 0.
2.  All values of \\(Y\\) are nonnegative and most of them are actually positive with non-zero probability. There is no way for the mean to be 0. It has to be some positive value.
3.  Obvious, since \\(E\[X\]=0\\) and \\(E\[Y\]>0\\).
4.  True by linearity of expectation, no matter what \\(X\\) and \\(Y\\) are.
5.  This is tricky. The equation does not hold in general for non-independent \\(X\\) and \\(Y\\). However, in this particular case, it happens to hold. To see this, note that the right hand side is 0, since \\(E\[X\]=0\\). At the same time, the random variable \\(XY=X^3\\). Its PDF is symmetric around 0, so its mean must be 0 as well.
6.  \\(X\\) and \\(Y\\) are obviously not independent.
7.  \\(E\[Y\]=\\sum\_{i=0}^n 2i^2\\frac{1}{2n+1} < \\sum\_{i=0}^n 2i^4\\frac{1}{2n+1} = E\[Y^2\]\\).

CheckShow Answer

*   [BackGreat Expectations](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-88fafb62d4f8)
*   [ContinueDeviation: Markov & Chebyshev Bounds](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2)