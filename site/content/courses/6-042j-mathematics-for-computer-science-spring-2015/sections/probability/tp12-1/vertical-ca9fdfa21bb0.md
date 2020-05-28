---
title: 4.2 Conditional Probability
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 4aaa09671de179c1ae157f1105ab91b2
    weight: 2340
    parent: 79ebde2b537e9e26dc39d5d2e1c8f1d9
---
*   [<Law of Total Probability: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-4689ff047559" %}})
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
*   [\\>Bayes' Theorem: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-1f097d8a0a33" %}})

Cavities And Candy
------------------

  

Say the probability I have a cavity is \\(\\frac{1}{4}\\) and the probability I do not have a cavity is \\(\\frac{3}{4}\\). If I have a cavity, then I eat candy with probability \\(\\frac{4}{5}\\). If I do not have a cavity, then I eat candy with probability \\(\\frac{1}{3}\\). Please answer in the form of a decimal with two significant digits.

What is the probability that I will eat candy?

Exercise 1

&nbsp;Numerical Response&nbsp;

By the Law of total Probability, \\(\\Pr\[\\text{eat candy}\]=\\Pr\[\\text{eat candy}\\;|\\;\\text{have cavity}\]\\cdot \\Pr\[\\text{have cavity}\]\\)\\( + \\Pr\[\\text{eat candy}\\;|\\;\\text{do not have cavity}\]\\cdot \\Pr\[\\text{have cavity}\]\\) \\(= \\frac{4}{5}\\cdot\\frac{1}{4}+\\frac{1}{3}\\cdot\\frac{3}{4} = \\frac{9}{20}\\)

CheckShow Answer

*   [BackLaw of Total Probability: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-4689ff047559" %}})
*   [ContinueBayes' Theorem: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-1f097d8a0a33" %}})