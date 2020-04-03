---
title: '3.2 Modeling the Expert: An Introduction to Logistic Regression'
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: 4551bb95ca82a0cacf08eda74141daaa
    weight: 810
    parent: 3063320a41756b8a4fa9892f61b52c0d
---
*   [<Video 2: Building the Dataset]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-2-building-the-dataset" %}})
*   [3.2.1Video 1: Replicating Expert Assessment]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression" %}})
*   [3.2.2Video 2: Building the Dataset]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-2-building-the-dataset" %}})
*   [3.2.3Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-144" %}})
*   [3.2.4Video 3: Logistic Regression]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-3-logistic-regression" %}})
*   [3.2.5Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-152" %}})
*   [3.2.6Video 4: Logistic Regression in R]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-4-logistic-regression-in-r" %}})
*   [3.2.7Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-167" %}})
*   [3.2.8Video 5: Thresholding]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-5-thresholding" %}})
*   [3.2.9Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-188" %}})
*   [3.2.10Video 6: ROC Curves]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-6-roc-curves" %}})
*   [3.2.11Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-200" %}})
*   [3.2.12Video 7: Interpreting the Model]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-7-interpreting-the-model" %}})
*   [3.2.13Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-208" %}})
*   [3.2.14Video 8: The Analytics Edge]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-8-the-analytics-edge" %}})
*   [\\>Video 3: Logistic Regression]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-3-logistic-regression" %}})

Quick Question
--------------

Which of the following dependent variables are categorical? (Select all that apply.)

Exercise 1

&nbsp;Deciding whether to buy, sell, or hold a stock&nbsp;

&nbsp;The weekly revenue of a company &nbsp;

&nbsp;The winner of an election with two candidates&nbsp;

&nbsp;The day of the week with the highest revenue&nbsp;

&nbsp;The number of daily car thefts in New York City&nbsp;

&nbsp;Whether or not revenue will exceed $50,000&nbsp;

Explanation

The weekly revenue of a company is not categorical, since it has a large number of possible values, on a continuous range. The number of daily car thefts in New York City is also not categorical because the number of car thefts could range from 0 to hundreds.

On the other hand, the other options each have a limiited number of possible outcomes.

Which of the following dependent variables are binary? (Select all that apply.)

Exercise 2

&nbsp;Deciding whether to buy, sell, or hold a stock&nbsp;

&nbsp;The weekly revenue of a company &nbsp;

&nbsp;The winner of an election with two candidates&nbsp;

&nbsp;The day of the week with the highest revenue&nbsp;

&nbsp;The number of car thefts in New York City&nbsp;

&nbsp;Whether or not revenue will exceed $50,000&nbsp;

Explanation

The only variables with two possible outcomes are the winner of an election with two candidates, and whether or not revenue will exceed $50,000.

CheckShow Answer

*   [BackVideo 2: Building the Dataset]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-2-building-the-dataset" %}})
*   [ContinueVideo 3: Logistic Regression]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-3-logistic-regression" %}})