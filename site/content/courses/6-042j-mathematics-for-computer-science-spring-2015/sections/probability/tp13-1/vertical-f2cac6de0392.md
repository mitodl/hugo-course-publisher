---
title: 4.5 Expectation
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 0478e0a1b67b68a3d605fa5a1211c5c2_vertical-f2cac6de0392
    weight: 2630
    parent: 025c498f3f5e1c53924f7e40eb06a220_tp13-1
---
*   [<Mean Time to Failure: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-e8dee31ddd76)
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
*   [\>Linearity of Expectation: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-49ea207a6233)

Three Machines Failing
----------------------

  

I have three machines that each fail with probability 1/3. Assuming the machines operate (mutually) independently, what is the expected number of times I can run the three machines until all three of them fail in the same go?

Exercise 1

&nbsp;Numerical Response&nbsp;

Let \\(M\_1, M\_2, M\_3\\) be the events that machines 1, 2, and 3 fail.  
Since these events are mutually independent, \\(\\Pr\[M\_1\\cap M\_2\\cap M\_3\]=\\Pr\[M\_1\]\\Pr\[M\_2\]\\Pr\[M\_3\]=\\frac{1}{27}\\).  
Then the mean time to failure is \\(\\frac{1}{1/27}=27\\).

CheckShow Answer

*   [BackMean Time to Failure: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-e8dee31ddd76)
*   [ContinueLinearity of Expectation: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-1/vertical-49ea207a6233)