---
title: '8.2 Airline Revenue Management: An Introduction to Linear Optimization '
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: 866b08a838d4f694786a619e9ebff44b_quick-question-620
    weight: 2800
    parent: >-
      2900efa71aff756dfeba74c6d16f2d3d_airline-revenue-management-an-introduction-to-linear-optimization
---
*   [<Video 7: Connecting Flights]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-7-connecting-flights" %}})
*   [8.2.1Video 1: Introduction]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization" %}})
*   [8.2.2Video 2: A Single Flight]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-2-a-single-flight" %}})
*   [8.2.3Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/quick-question-581" %}})
*   [8.2.4Video 3: The Problem Formulation]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-3-the-problem-formulation" %}})
*   [8.2.5Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/quick-question-590" %}})
*   [8.2.6Video 4: Solving the Problem]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-4-solving-the-problem" %}})
*   [8.2.7Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/quick-question-598" %}})
*   [8.2.8Video 5: Visualizing the Problem]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-5-visualizing-the-problem" %}})
*   [8.2.9Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/quick-question-606" %}})
*   [8.2.10Video 6: Sensitivity Analysis]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-6-sensitivity-analysis" %}})
*   [8.2.11Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/quick-question-614" %}})
*   [8.2.12Video 7: Connecting Flights]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-7-connecting-flights" %}})
*   [8.2.13Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/quick-question-620" %}})
*   [8.2.14Video 8: The Edge of Revenue Management]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-8-the-edge-of-revenue-management" %}})
*   [\\>Video 8: The Edge of Revenue Management]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-8-the-edge-of-revenue-management" %}})

Quick Question
--------------

In this quick question, we'll perform some sensitivity analysis on the connecting flights problem.

Previously, we said that American Airlines could market their fares to increase demand. It costs $200 in advertising to increase demand by one unit.

Is it worth it to market the discount fares from JFK to DFW?

Exercise 1

&nbsp;Yes. American Airlines should market the discount fares from JFK to DFW to increase demand by 50.&nbsp;

&nbsp;Yes. American Airlines should market the discount fares from JFK to DFW to increase demand by 10.&nbsp;

&nbsp;No. American Airlines should not market the discount fares from JFK to DFW because even though the revenue increases, it does not exceed the costs.&nbsp;

&nbsp;No. American Airlines should not market the discount fares from JFK to DFW because the revenue does not increase at all by increasing the demand for these tickets.&nbsp;

Explanation

You can answer this question without re-solving the model by noticing that we are not meeting the demand for discount fares from JFK to DFW at all. The demand could increase by 100, and we still would not offer more than 11 discount fares.

Alternatively, you could change the demand for discount fares, and re-solve the model. The solution does not change, regardless of how much you increase the demand.

Is it worth it to market the regular fares from JFK to LAX?

Exercise 2

&nbsp;Yes. American Airlines should market the regular fares from JFK to LAX to increase demand by 50.&nbsp;

&nbsp;Yes. American Airlines should market the regular fares from JFK to LAX to increase demand by 10.&nbsp;

&nbsp;No. American Airlines should not market the regular fares from JFK to LAX because even though the revenue increases, it does not exceed the costs.&nbsp;

&nbsp;No. American Airlines should not market the regular fares from JFK to LAX because the revenue does not increase at all by increasing the demand for these tickets.&nbsp;

Explanation

In the current solution, we are meeting the demand for regular tickets from JFK to LAX. If we increase the demand by 10, we offer 10 more regular tickets, but our revenue only increases by $140, which does not exceed the cost of $2000. If we increase the demand by 50, to 130, we only offer 91 seats. Therefore, American Airlines should not market the regular fares from JFK to LAX because even though the revenue increases, it does not exceed the costs.

CheckShow Answer

*   [BackVideo 7: Connecting Flights]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-7-connecting-flights" %}})
*   [ContinueVideo 8: The Edge of Revenue Management]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-8-the-edge-of-revenue-management" %}})