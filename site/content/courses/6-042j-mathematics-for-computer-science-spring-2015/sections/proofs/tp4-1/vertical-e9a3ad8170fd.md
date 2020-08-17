---
title: 1.8  Induction
course_id: 6-042j-mathematics-for-computer-science-spring-2015
type: course
layout: course_section
---
*   [<Bogus Induction: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-9984d57d43e5" %}})
*   [1.8.1Induction: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/_index.md" %}})
*   [1.8.2Bogus Induction: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-9984d57d43e5" %}})
*   [1.8.3Same Colored Horses]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-e9a3ad8170fd" %}})
*   [1.8.4Strong Induction: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-828ce2b900d3" %}})
*   [1.8.5Unstacking Game Score]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-cc43092b621f" %}})
*   [1.8.6WOP vs Induction: Video \[optional\]]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-98aa517cd42e" %}})
*   [1.8.7Strong vs Ordinary Induction vs WOP \[optional\]]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-b16ab258826d" %}})
*   [1.8.8Induction by n+3]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-32c871c0cb9b" %}})
*   [1.8.9Induction Rules]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-7137716a91a6" %}})
*   [1.8.10Postage by Induction]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-a8ffdfcb631b" %}})
*   [1.8.11A Bogus Induction]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-87911985518e" %}})
*   [\\>Strong Induction: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-828ce2b900d3" %}})

Same Colored Horses
-------------------

  

In the bogus induction proof that all horses are of the same color, where does the induction break down and why?

Exercise 1

&nbsp;\\(P(1) \\), because the base case should be \\(P(0) \\)\\(P(1) \\to P(2) \\), because there are no middle horses when \\(n=2 \\)\\(P(2) \\to P(3) \\), because there is only one middle horse\\(P(n) \\to P(n+1) \\text{ for } n \\ge 3 \\), because the order of the horses is important \\(P(1) \\to P(2) \\), because there are no middle horses when \\(n=2 \\)&nbsp;

CheckShow Answer

*   [BackBogus Induction: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-9984d57d43e5" %}})
*   [ContinueStrong Induction: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-828ce2b900d3" %}})