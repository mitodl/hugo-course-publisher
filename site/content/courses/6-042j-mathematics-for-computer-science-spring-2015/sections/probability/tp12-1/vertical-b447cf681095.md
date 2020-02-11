---
title: 4.2 Conditional Probability
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: d23517012859382416b7168f07711cf9_vertical-b447cf681095
    weight: 190
---
*   [<Monty Hall Problem: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-1/vertical-038350815734)
*   [4.2.1Conditional Probability Definitions: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-1)
*   [4.2.2Dicey Sum](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-1/vertical-c84a5906e76d)
*   [4.2.3Law of Total Probability: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-1/vertical-4689ff047559)
*   [4.2.4Cavities and Candy](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-1/vertical-ca9fdfa21bb0)
*   [4.2.5Bayes' Theorem: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-1/vertical-1f097d8a0a33)
*   [4.2.6Two Boys](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-1/vertical-1c440a383ad3)
*   [4.2.7Monty Hall Problem: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-1/vertical-038350815734)
*   [4.2.8Conditional Probability](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-1/vertical-b447cf681095)
*   [4.2.9Dicey Game](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-1/vertical-dbc09e338aa5)
*   [4.2.10Watch Out For Crocodiles](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-1/vertical-b7574f507526)
*   [\>Dicey Game](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-1/vertical-dbc09e338aa5)

Conditional Probability
-----------------------

  

Let

\\\[A:= \\text{the event that Albert is giving the lecture}\\\] \\\[L:= \\text{the event that Louis Reasoner goes to lecture}\\\]

where \\\[\\Pr\[A\] = 0.8\\\] \\\[\\Pr\[L\] = 0.4\\\]

Also, the probability that Louis goes to lecture, given that Albert is giving the lecture, is 0.3.

What is the probability that Albert is giving the lecture, given that Louis Reasoner goes to lecture?

Exercise 1

&nbsp;Numerical Response&nbsp;

Straightforward use of the _a posteriori_ probability formula. By definition, \\(\\Pr\[A\\;|\\;L\]\\cdot\\Pr\[L\] = \\Pr\[A \\cap L\] = \\Pr\[L \\;|\\; A\]\\cdot\\Pr\[A\]\\). Solving for \\(\\Pr\[A\\; |\\; L\]\\) gives \\(\\Pr\[A\\; |\\; L\] = \\frac{Pr\[L\\; |\\; A\]\\cdot\\Pr\[A\]}{Pr\[L\]} = \\frac{0.3 \\cdot 0.8}{0.4} = 0.6.\\)

CheckShow Answer

*   [BackMonty Hall Problem: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-1/vertical-038350815734)
*   [ContinueDicey Game](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-1/vertical-dbc09e338aa5)