---
title: '9.2 Sports Scheduling: An Introduction to Integer Optimization '
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: d7c69cd70f13ee077976805c01b4a9e2_quick-question-665
    weight: 3060
    parent: >-
      fbf2b7049246466ef24736bff248b7c3_sports-scheduling-an-introduction-to-integer-optimization
---
*   [<Sports Scheduling: An Introduction to Integer Optimization]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/sports-scheduling-an-introduction-to-integer-optimization" %}})
*   [9.2.1Video 1: Introduction]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/sports-scheduling-an-introduction-to-integer-optimization" %}})
*   [9.2.2Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/sports-scheduling-an-introduction-to-integer-optimization/quick-question-665" %}})
*   [9.2.3Video 2: The Optimization Problem]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/sports-scheduling-an-introduction-to-integer-optimization/video-2-the-optimization-problem" %}})
*   [9.2.4Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/sports-scheduling-an-introduction-to-integer-optimization/quick-question-673" %}})
*   [9.2.5Video 3: Solving the Problem]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/sports-scheduling-an-introduction-to-integer-optimization/video-3-solving-the-problem-2" %}})
*   [9.2.6Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/sports-scheduling-an-introduction-to-integer-optimization/quick-question-685" %}})
*   [9.2.7Video 4: Logical Constraints]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/sports-scheduling-an-introduction-to-integer-optimization/video-4-logical-constraints" %}})
*   [9.2.8Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/sports-scheduling-an-introduction-to-integer-optimization/quick-question-693" %}})
*   [9.2.9Video 5: The Edge]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/sports-scheduling-an-introduction-to-integer-optimization/video-5-the-edge" %}})
*   [\\>Video 2: The Optimization Problem]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/sports-scheduling-an-introduction-to-integer-optimization/video-2-the-optimization-problem" %}})

Quick Question
--------------

Suppose that you are trying to schedule 3 games between 6 teams (A, B, C, D, E, and F) that will occur simultaneously. Which of the following are feasible schedules? Select all that apply.

Exercise 1

&nbsp;A plays B, C plays D, and E plays F&nbsp;

&nbsp;A plays C, B plays D, and C plays F&nbsp;

&nbsp;A plays F, B plays E, and C plays D&nbsp;

&nbsp;A plays B, B plays C, and C plays D&nbsp;

&nbsp;A plays D, B plays E, and C plays F&nbsp;

Explanation

Each of the teams has to play exactly one of the other teams for the games to occur simultaneously. In the second option, C is playing twice, which is impossible. In the fourth option, B and C are both playing twice.

How many different feasible schedules are there?

Exercise 2

&nbsp;5&nbsp;

&nbsp;10&nbsp;

&nbsp;15&nbsp;

&nbsp;20&nbsp;

&nbsp;25&nbsp;

Explanation

There are 15 different feasible schedules. We can count them by observing that A can play any of the 5 teams. Once this is fixed, we have 4 teams left. There are 3 ways to make two pairs out of 4 teams. So in total, there are 5\*3 = 15 different schedules. Here is a list of all of them:

A plays B, C plays D, E plays F

A plays B, C plays E, D plays F

A plays B, C plays F, D plays E

A plays C, B plays D, E plays F

A plays C, B plays E, D plays F

A plays C, B plays F, D plays E

A plays D, B plays C, E plays F

A plays D, B plays E, C plays F

A plays D, B plays F, C plays E

A plays E, B plays C, D plays F

A plays E, B plays D, C plays F

A plays E, B plays F, C plays D

A plays F, B plays C, D plays E

A plays F, B plays D, C plays E

A plays F, B plays E, C plays D

CheckShow Answer

*   [BackSports Scheduling: An Introduction to Integer Optimization]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/sports-scheduling-an-introduction-to-integer-optimization" %}})
*   [ContinueVideo 2: The Optimization Problem]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/sports-scheduling-an-introduction-to-integer-optimization/video-2-the-optimization-problem" %}})