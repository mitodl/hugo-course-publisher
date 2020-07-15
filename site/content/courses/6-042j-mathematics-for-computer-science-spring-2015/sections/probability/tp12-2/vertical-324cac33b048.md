---
title: 4.3 Independence & Causality
course_id: 6-042j-mathematics-for-computer-science-spring-2015
---
*   [<Independent vs Disjoint]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/vertical-6700220de664" %}})
*   [4.3.1Independence: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/_index.md" %}})
*   [4.3.2Independent Dice Rolls]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/vertical-8ff8e74ce854" %}})
*   [4.3.3Mutual Independence: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/vertical-9c80216b7495" %}})
*   [4.3.4Mutually Independent Dice Rolls]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/vertical-725617c4e7c2" %}})
*   [4.3.5Independent vs Disjoint]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/vertical-6700220de664" %}})
*   [4.3.6Labeled Balls]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/vertical-324cac33b048" %}})
*   [4.3.7Paradox]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/paradox" %}})
*   [\\>Paradox]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/paradox" %}})

Labeled Balls
-------------

  

I have four balls in an urn, each one distinctly labeled with either 110, 101, 011, or 000. I draw one at random.

Let \\(A\_1\\) denote the event that I draw a ball with a 1 in the \\(1^{st}\\) position. Let \\(A\_2\\) and \\(A\_3\\) be defined similarly.

Which of the following are true about \\(A\_1,A\_2,A\_3\\)?

Exercise 1

&nbsp; They are mutually independent &nbsp;

&nbsp; They are pairwise independent &nbsp;

&nbsp; They are pairwise disjoint &nbsp;

&nbsp; They all have equal probability &nbsp;

First note that they all have **equal probability**, because \\(\\begin{align}\\Pr\[A\_1\] &= \\Pr\[110\\cup 101\]= \\frac{1}{2}&\\\\ \\Pr\[A\_2\] &= \\Pr\[110\\cup 011\]= \\frac{1}{2}&\\\\ \\Pr\[A\_3\] &= \\Pr\[101\\cup 011\]= \\frac{1}{2}.&\\end{align}\\)

They are also **pairwise independent**, since \\(\\begin{align}\\Pr\[A\_1 \\cap A\_2\]&= \\Pr\[110\]=\\frac{1}{4}=\\frac{1}{2}\\cdot\\frac{1}{2}=\\Pr\[A\_1\]\\Pr\[A\_2\]&\\\\ \\Pr\[A\_1 \\cap A\_3\]&=\\Pr\[101\]=\\frac{1}{4}=\\frac{1}{2}\\cdot\\frac{1}{2}=\\Pr\[A\_1\]\\Pr\[A\_3\]&\\\\ \\Pr\[A\_2 \\cap A\_3\]&=\\Pr\[011\]=\\frac{1}{4}=\\frac{1}{2}\\cdot\\frac{1}{2}=\\Pr\[A\_2\]\\Pr\[A\_3\].&\\end{align}\\)

They are not mutually independent because \\(\\Pr\[A\_1\\cap A\_2\\cap A\_3\] = \\Pr\[\\emptyset\] = 0 \\neq \\frac{1}{2}\\cdot\\frac{1}{2}\\cdot\\frac{1}{2}=Pr\[A\_1\]Pr\[A\_2\]Pr\[A\_3\]\\).

They are not pairwise disjoint, since \\(A\_1\\cap A\_2=\\{110\\}.\\)

CheckShow Answer

*   [BackIndependent vs Disjoint]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/vertical-6700220de664" %}})
*   [ContinueParadox]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp12-2/paradox" %}})