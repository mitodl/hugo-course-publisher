---
title: '9.2 Sports Scheduling: An Introduction to Integer Optimization '
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: quick-question-685
    weight: 3100
---
*   [<Video 3: Solving the Problem]({{< ref "video-3-solving-the-problem-2" >}})
*   [9.2.1Video 1: Introduction]({{< ref "sports-scheduling-an-introduction-to-integer-optimization" >}})
*   [9.2.2Quick Question]({{< ref "quick-question-665" >}})
*   [9.2.3Video 2: The Optimization Problem]({{< ref "video-2-the-optimization-problem" >}})
*   [9.2.4Quick Question]({{< ref "quick-question-673" >}})
*   [9.2.5Video 3: Solving the Problem]({{< ref "video-3-solving-the-problem-2" >}})
*   [9.2.6Quick Question]({{< ref "quick-question-685" >}})
*   [9.2.7Video 4: Logical Constraints]({{< ref "video-4-logical-constraints" >}})
*   [9.2.8Quick Question]({{< ref "quick-question-693" >}})
*   [9.2.9Video 5: The Edge]({{< ref "video-5-the-edge" >}})
*   [\\>Video 4: Logical Constraints]({{< ref "video-4-logical-constraints" >}})

Quick Question
--------------

Suppose we had two more teams in our tournament (for a total of 6 teams). Each division would have 3 teams. So each team plays **two** teams twice (the teams in their division), and each team plays three teams once (the teams in the other division). This means that the tournament will last for 7 weeks. How many decision variables would we have?

Exercise 1

&nbsp;Numerical Response&nbsp;

Explanation

We would have 105 decision variables because we have 7 weeks, and 15 different pairs of teams.

How many constraints would we have? Don't include the constraints that force the variables to be binary when counting the constraints here. (HINT: We would have 6 division constraints, since each pair in each division needs to play twice.)

Exercise 2

&nbsp;Numerical Response&nbsp;

Explanation

We would have 6 division constraints, 9 non-division constraints (each of the three teams in one division has to play each of the three teams in the other division), and 42 constraints to make sure each team only plays one team each week (6 teams times 7 weeks).

CheckShow Answer

*   [BackVideo 3: Solving the Problem]({{< ref "video-3-solving-the-problem-2" >}})
*   [ContinueVideo 4: Logical Constraints]({{< ref "video-4-logical-constraints" >}})