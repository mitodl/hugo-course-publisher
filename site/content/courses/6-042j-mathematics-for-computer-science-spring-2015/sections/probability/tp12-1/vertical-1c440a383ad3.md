---
title: 4.2 Conditional Probability
course_id: 6-042j-mathematics-for-computer-science-spring-2015
type: course
layout: course_section
---
*   [<Bayes' Theorem: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-1f097d8a0a33" %}})
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
*   [\\>Monty Hall Problem: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-038350815734" %}})

Two Boys
--------

  

A couple has two children, one of which is a boy. What is the probability that they have two boys? Please answer in the form of a decimal with two significant digits.

_Assume the probability of having a boy is 50%._

Exercise 1

&nbsp;Numerical Response&nbsp;

Define the following events: \\\[A:=\\text{Both children are boys}\\\]\\\[B:=\\text{One child is a boy}.\\\]We want \\(\\Pr\[A|B\]\\). By Bayes theorem, we get that \\(\\Pr\[A|B\]=\\dfrac{\\Pr\[B|A\]\\cdot\\Pr\[A\]}{Pr\[B\]}\\).

Clearly, \\(\\Pr\[B|A\]\\)=1. \\(\\Pr\[A\]=\\frac{1}{2}\\cdot\\frac{1}{2}=\\frac{1}{4}\\) and \\(\\Pr\[\\bar{B}\]=\\frac{1}{2}\\cdot\\frac{1}{2}=\\frac{1}{4} \\Rightarrow \\Pr\[B\]=1-\\frac{1}{4}=\\frac{3}{4}\\). Hence, \\(\\Pr\[A|B\]=\\frac{1}{3}\\)

A simpler argument works by enumerating all outcomes where at least one child is a boy, representing each outcome as an ordered pair of first the younger child's age and then the older child's age. The possibilities are BG, BB, and GB. Just 1 out of these 3 outcomes has two boys, so the conditional probability is 1/3.

CheckShow Answer

*   [BackBayes' Theorem: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-1f097d8a0a33" %}})
*   [ContinueMonty Hall Problem: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-1/vertical-038350815734" %}})