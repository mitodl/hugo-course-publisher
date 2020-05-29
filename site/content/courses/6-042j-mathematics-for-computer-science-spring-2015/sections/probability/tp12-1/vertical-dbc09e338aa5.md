---
title: 4.2 Conditional Probability
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: ccae3a2e38c1d5a37241415d3c1557f1
    weight: 2390
    parent: 79ebde2b537e9e26dc39d5d2e1c8f1d9
---
*   [<Conditional Probability]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-b447cf681095" %}})
*   [4.2.1Conditional Probability Definitions: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/_index.md" %}})
*   [4.2.2Dicey Sum]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-c84a5906e76d" %}})
*   [4.2.3Law of Total Probability: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-4689ff047559" %}})
*   [4.2.4Cavities and Candy]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-ca9fdfa21bb0" %}})
*   [4.2.5Bayes' Theorem: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-1f097d8a0a33" %}})
*   [4.2.6Two Boys]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-1c440a383ad3" %}})
*   [4.2.7Monty Hall Problem: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-038350815734" %}})
*   [4.2.8Conditional Probability]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-b447cf681095" %}})
*   [4.2.9Dicey Game]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-dbc09e338aa5" %}})
*   [4.2.10Watch Out For Crocodiles]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-b7574f507526" %}})
*   [\\>Watch Out For Crocodiles]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-b7574f507526" %}})

Dicey Game
----------

  

For certain game, David has to roll two dice. If the sum of them is 7, he wins. If the two dice have the same number (a pair), he gets another chance. Otherwise, he loses. He can roll the dice **at most 3 times**, after which he loses even if he gets a pair.

What is the probability that he wins, given that he obtained a pair the first time? Please answer with a fraction of the form x/y.

Exercise 1

&nbsp;Numerical Response&nbsp;

Let \\(W\\) be the event that David wins by getting a 7, and let \\(P\\) the event of getting a pair, and let \\(L\\) be the event of losing. The sample space is \\(S = \\{W, L, PW, PL, PPW, PPL\\}\\). Let \\(A\\) be the event of winning and let \\(B\\) be the event in which David starts with a pair. We see that \\(A = \\{W, PW, PPW\\}\\) and \\(B= \\{PW, PL, PPW, PPL\\}\\). We now compute the probability of each possible outcome: \\\[\\Pr\[W\]=\\frac{1}{6},\\; Pr\[L\]=\\frac{2}{3},\\; Pr\[PW\]=\\frac{1}{6}\\cdot\\frac{1}{6}=\\frac{1}{36},\\\] \\\[ \\Pr\[PL\]=\\frac{1}{6}\\cdot\\frac{2}{3},\\;\\Pr\[PPW\]=\\frac{1}{36}\\cdot\\frac{1}{6},\\; \\Pr\[PPL\]=\\frac{1}{36}\\cdot\\frac{5}{6}.\\\] Then \\(\\Pr\[ A \\cap B \] = \\frac{1}{36} + \\frac{1}{216} = \\frac{7}{216}.\\)\\(\\Pr\[B\] = \\frac{1}{36} + \\frac{1}{9} + \\frac{1}{216} + \\frac{5}{216} = \\frac{1}{6}.\\)\\(\\Pr\[ A\\;|\\; B\] = \\frac{7}{36}.\\) Alternatively, we can observe that the condition is equivalent to removing one of David's tries.

CheckShow Answer

*   [BackConditional Probability]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-b447cf681095" %}})
*   [ContinueWatch Out For Crocodiles]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-b7574f507526" %}})