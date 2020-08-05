---
title: '9.3 eHarmony: Maximizing the Probability of Love '
course_id: 15-071-the-analytics-edge-spring-2017
type: course
layout: course_section
---
*   [<Video 2: Using Integer Optimization]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/eharmony-maximizing-the-probability-of-love/video-2-using-integer-optimization" %}})
*   [9.3.1Video 1: The Goal of eHarmony]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/eharmony-maximizing-the-probability-of-love/_index.md" %}})
*   [9.3.2Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/eharmony-maximizing-the-probability-of-love/quick-question-698" %}})
*   [9.3.3Video 2: Using Integer Optimization]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/eharmony-maximizing-the-probability-of-love/video-2-using-integer-optimization" %}})
*   [9.3.4Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/eharmony-maximizing-the-probability-of-love/quick-question-703" %}})
*   [9.3.5Video 3: Predicting Compatibility Scores]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/eharmony-maximizing-the-probability-of-love/video-3-predicting-compatibility-scores" %}})
*   [9.3.6Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/eharmony-maximizing-the-probability-of-love/quick-question-711/_index.md" %}})
*   [9.3.7Video 4: The Analytics Edge]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/eharmony-maximizing-the-probability-of-love/video-4-the-analytics-edge" %}})
*   [\\>Video 3: Predicting Compatibility Scores]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/eharmony-maximizing-the-probability-of-love/video-3-predicting-compatibility-scores" %}})

Quick Question
--------------

In the previous video, we saw a small example with 3 men and 3 women. We defined a "match" as an assignment of each man to exactly one woman, and each woman to exactly one man. The optimal match in the previous video was to assign man 1 to woman 3, man 2 to woman 1, and man 3 to woman 2.

How many different feasible matches are there in the example with 3 men and 3 woman? (HINT: Another feasible match is to assign man 1 to woman 1, man 2 to woman 3, and man 3 to woman 2.)

Exercise 1

&nbsp;Numerical Response&nbsp;

How many different feasible matches are there with 5 men and 5 women? (HINT: First assign man 1 to one of the women. How many choices are there? Then assign man 2 to a woman - how many choices are there now? Repeat this until every man is matches to every woman.)

Exercise 2

&nbsp;10&nbsp;

&nbsp;20&nbsp;

&nbsp;50&nbsp;

&nbsp;100&nbsp;

&nbsp;120&nbsp;

&nbsp;150&nbsp;

Explanation

In the first case, there are 6 possible matches. The first man can be assigned to any of the 3 women (3 choices). Then the second man can be assigned to any of the remaining 2 women (2 choices). The third man is automatically assigned to the remaining woman. So there are a total of 3\*2 = 6 choices.

In the second case, there are 120 possible matches. The first man can be assigned to any of the 5 women (5 choices), then the second man can be assigned to any of the remaining women (4 choices), etc. This gives a total of 5\*4\*3\*2 = 120 different matches.

You can easily see how the number of possible matches gets very large on online dating sites!

CheckShow Answer

*   [BackVideo 2: Using Integer Optimization]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/eharmony-maximizing-the-probability-of-love/video-2-using-integer-optimization" %}})
*   [ContinueVideo 3: Predicting Compatibility Scores]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/eharmony-maximizing-the-probability-of-love/video-3-predicting-compatibility-scores" %}})