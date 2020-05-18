---
title: '8.2 Airline Revenue Management: An Introduction to Linear Optimization '
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: bcd5d3fe6076384751824e5ef3218335
    weight: 2760
    parent: 2900efa71aff756dfeba74c6d16f2d3d
---
*   [<Video 5: Visualizing the Problem]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-5-visualizing-the-problem" %}})
*   [8.2.1Video 1: Introduction]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/_index.md" %}})
*   [8.2.2Video 2: A Single Flight]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-2-a-single-flight" %}})
*   [8.2.3Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/quick-question-581" %}})
*   [8.2.4Video 3: The Problem Formulation]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-3-the-problem-formulation" %}})
*   [8.2.5Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/quick-question-590" %}})
*   [8.2.6Video 4: Solving the Problem]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-4-solving-the-problem/_index.md" %}})
*   [8.2.7Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/quick-question-598" %}})
*   [8.2.8Video 5: Visualizing the Problem]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-5-visualizing-the-problem" %}})
*   [8.2.9Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/quick-question-606" %}})
*   [8.2.10Video 6: Sensitivity Analysis]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-6-sensitivity-analysis" %}})
*   [8.2.11Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/quick-question-614" %}})
*   [8.2.12Video 7: Connecting Flights]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-7-connecting-flights/_index.md" %}})
*   [8.2.13Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/quick-question-620" %}})
*   [8.2.14Video 8: The Edge of Revenue Management]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-8-the-edge-of-revenue-management" %}})
*   [\\>Video 6: Sensitivity Analysis]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-6-sensitivity-analysis" %}})

Quick Question
--------------

Using the visualization we created in the previous video, answer the following questions:

Suppose that our demand for regular seats remains the same (100) but our demand for discount seats goes down to 100. Will our optimal solution change?

Exercise 1

&nbsp;Yes&nbsp;

&nbsp;No&nbsp;

&nbsp;I can't answer this question using the visualization.&nbsp;

Now suppose that our demand for regular seats remains the same (100) but our demand for discount seats goes down to 50. Will our optimal solution change?

Exercise 2

&nbsp;Yes&nbsp;

&nbsp;No&nbsp;

&nbsp;I can't answer this question using the visualization.&nbsp;

Explanation

In the first case, our optimal solution will not change because we are only offering 66 discount seats. So even if the demand goes down to 100, we are not meeting the demand. But in the second case, we can only offer 50 discount seats. So our airplane will not be full, and our optimal solution will change to 100 regular seats and 50 discount seats.

CheckShow Answer

*   [BackVideo 5: Visualizing the Problem]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-5-visualizing-the-problem" %}})
*   [ContinueVideo 6: Sensitivity Analysis]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-6-sensitivity-analysis" %}})