---
title: 4.3 Independence & Causality
course_id: 6-042j-mathematics-for-computer-science-spring-2015
type: course
layout: course_section
---
*   [<Labeled Balls]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/vertical-324cac33b048" %}})
*   [4.3.1Independence: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/_index.md" %}})
*   [4.3.2Independent Dice Rolls]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/vertical-8ff8e74ce854" %}})
*   [4.3.3Mutual Independence: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/vertical-9c80216b7495" %}})
*   [4.3.4Mutually Independent Dice Rolls]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/vertical-725617c4e7c2" %}})
*   [4.3.5Independent vs Disjoint]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/vertical-6700220de664" %}})
*   [4.3.6Labeled Balls]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/vertical-324cac33b048" %}})
*   [4.3.7Paradox]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/paradox" %}})
*   [\\>Random Variables, Density Functions]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/_index.md" %}})

Paradox
-------

  

Suppose event A is evidence that event H occurred, and event B is also evidence that H occurred. Is (A or B) necessarily evidence that H occurred? A precise way of thinking about evidence is that E is evidence for H if \\(\\Pr\[H|E\]>\\Pr\[H\]\\).

Exercise 1

&nbsp; Yes &nbsp;

&nbsp; No &nbsp;

Consider the following counterexample: Suppose we roll a standard fair 6-sided die. Define the following events: \\\[H:=\\text{Die lands 3 or 4}\\\]\\\[A:=\\text{Die lands 4 or less}\\\]\\\[B:=\\text{Die lands 3 or greater}\\\] Clearly A is evidence for H, and B is evidence for H, but (A or B) is not evidence for H.

CheckShow Answer

*   [BackLabeled Balls]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/vertical-324cac33b048" %}})
*   [ContinueRandom Variables, Density Functions]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-3/_index.md" %}})