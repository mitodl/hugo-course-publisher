---
title: 1.8  Induction
course_id: 6-042j-mathematics-for-computer-science-spring-2015
---
*   [<Strong Induction: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-828ce2b900d3" %}})
*   [1.8.1Induction: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/_index.md" %}})
*   [1.8.2Bogus Induction: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-9984d57d43e5" %}})
*   [1.8.3Same Colored Horses]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-e9a3ad8170fd" %}})
*   [1.8.4Strong Induction: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-828ce2b900d3" %}})
*   [1.8.5Unstacking Game Score]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-cc43092b621f" %}})
*   [1.8.6WOP vs Induction: Video \\\[optional\\\]]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-98aa517cd42e" %}})
*   [1.8.7Strong vs Ordinary Induction vs WOP \\\[optional\\\]]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-b16ab258826d" %}})
*   [1.8.8Induction by n+3]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-32c871c0cb9b" %}})
*   [1.8.9Induction Rules]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-7137716a91a6" %}})
*   [1.8.10Postage by Induction]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-a8ffdfcb631b" %}})
*   [1.8.11A Bogus Induction]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-87911985518e" %}})
*   [\\>WOP vs Induction: Video \\\[optional\\\]]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-98aa517cd42e" %}})

Unstacking Game Score
---------------------

  

Suppose that there is a game that entails unstacking a tower of \\(n \\) blocks. A move entails splitting a stack of \\(k \\) blocks into two stacks of \\(a \\) and \\(k-a \\) blocks. Also define the score for a move to be the product of the number of blocks in the created substacks (e.g. \\(k(a-k)\\)). The overall score for the game is the sum of the scores accumulated over all the moves. Which of the following is true about the overall score?

Exercise 1

&nbsp;The score-maximizing strategy is to always split a stack in half.&nbsp;

&nbsp;The overall score is the same however you unstack the blocks.&nbsp;

&nbsp;The overall score for a \\(n \\)-stack game is \\(\\frac{n(n-1)}{2} \\).&nbsp;

&nbsp;The base case is a 2-block stack, which takes one split to unstack.&nbsp;

CheckShow Answer

*   [BackStrong Induction: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-828ce2b900d3" %}})
*   [ContinueWOP vs Induction: Video \\\[optional\\\]]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/vertical-98aa517cd42e" %}})