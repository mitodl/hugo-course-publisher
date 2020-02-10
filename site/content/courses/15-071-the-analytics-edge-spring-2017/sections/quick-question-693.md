---
title: '9.2 Sports Scheduling: An Introduction to Integer Optimization '
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: quick-question-693
    weight: 3120
---
*   [<Video 4: Logical Constraints]({{% ref "video-4-logical-constraints" %}})
*   [9.2.1Video 1: Introduction]({{% ref "sports-scheduling-an-introduction-to-integer-optimization" %}})
*   [9.2.2Quick Question]({{% ref "quick-question-665" %}})
*   [9.2.3Video 2: The Optimization Problem]({{% ref "video-2-the-optimization-problem" %}})
*   [9.2.4Quick Question]({{% ref "quick-question-673" %}})
*   [9.2.5Video 3: Solving the Problem]({{% ref "video-3-solving-the-problem-2" %}})
*   [9.2.6Quick Question]({{% ref "quick-question-685" %}})
*   [9.2.7Video 4: Logical Constraints]({{% ref "video-4-logical-constraints" %}})
*   [9.2.8Quick Question]({{% ref "quick-question-693" %}})
*   [9.2.9Video 5: The Edge]({{% ref "video-5-the-edge" %}})
*   [\\>Video 5: The Edge]({{% ref "video-5-the-edge" %}})

Quick Question
--------------

Suppose we want to add a constraint that teams A and B must play in week 4 (we want the last game to be a divisional one). Given the current model, which of the following constraints would model this correctly? Select all that apply.

Exercise 1

&nbsp;\\(x\_{AB4} = 0\\)&nbsp;

&nbsp;\\(x\_{AB4} = 1\\)&nbsp;

&nbsp;\\(x\_{AB1} + x\_{AB2} + x\_{AB3} = 1\\)&nbsp;

&nbsp;\\(x\_{AB2} = 1\\)&nbsp;

&nbsp;\\(x\_{AB1} + x\_{AB2} = 1\\)&nbsp;

Explanation

The second and third constraints would both model this correctly. We can either force the decision variable for week 4 to 1, or we can make sure that only one game is played in the earlier weeks.

CheckShow Answer

*   [BackVideo 4: Logical Constraints]({{% ref "video-4-logical-constraints" %}})
*   [ContinueVideo 5: The Edge]({{% ref "video-5-the-edge" %}})