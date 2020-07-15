---
title: '3.2 Modeling the Expert: An Introduction to Logistic Regression'
course_id: 15-071-the-analytics-edge-spring-2017
---
*   [<Video 6: ROC Curves]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-6-roc-curves" %}})
*   [3.2.1Video 1: Replicating Expert Assessment]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/_index.md" %}})
*   [3.2.2Video 2: Building the Dataset]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-2-building-the-dataset" %}})
*   [3.2.3Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-144" %}})
*   [3.2.4Video 3: Logistic Regression]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-3-logistic-regression" %}})
*   [3.2.5Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-152" %}})
*   [3.2.6Video 4: Logistic Regression in R]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-4-logistic-regression-in-r/_index.md" %}})
*   [3.2.7Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-167" %}})
*   [3.2.8Video 5: Thresholding]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-5-thresholding" %}})
*   [3.2.9Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-188" %}})
*   [3.2.10Video 6: ROC Curves]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-6-roc-curves" %}})
*   [3.2.11Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-200/_index.md" %}})
*   [3.2.12Video 7: Interpreting the Model]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-7-interpreting-the-model" %}})
*   [3.2.13Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-208" %}})
*   [3.2.14Video 8: The Analytics Edge]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-8-the-analytics-edge" %}})
*   [\\>Video 7: Interpreting the Model]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-7-interpreting-the-model" %}})

Quick Question
--------------

This question will ask about the following ROC curve:

![](https://open-learning-course-data-ci.s3.amazonaws.com/15-071-the-analytics-edge-spring-2017/27296a79a8430f35b09968891f4d55bc_ROC-Thresholds.png)

Given this ROC curve, which threshold would you pick if you wanted to correctly identify a small group of patients who are receiving the worst care with high confidence?

Exercise 1

&nbsp;t = 0.2&nbsp;

&nbsp;t = 0.3&nbsp;

&nbsp;t = 0.7&nbsp;

&nbsp;t = 0.8&nbsp;

Explanation

The threshold 0.7 is best to identify a small group of patients who are receiving the worst care with high confidence, since at this threshold we make very few false positive mistakes, and identify about 35% of the true positives. The threshold t = 0.8 is not a good choice, since it makes about the same number of false positives, but only identifies 10% of the true positives. The thresholds 0.2 and 0.3 both identify more of the true positives, but they make more false positive mistakes, so our confidence decreases.

Which threshold would you pick if you wanted to correctly identify half of the patients receiving poor care, while making as few errors as possible?

Exercise 2

&nbsp;t = 0.2&nbsp;

&nbsp;t = 0.3&nbsp;

&nbsp;t = 0.7&nbsp;

&nbsp;t = 0.8&nbsp;

Explanation

The threshold 0.3 is the best choice in this scenerio. The threshold 0.2 also identifies over half of the patients receiving poor care, but it makes many more false positive mistakes. The thresholds 0.7 and 0.8 don't identify at least half of the patients receiving poor care.

CheckShow Answer

*   [BackVideo 6: ROC Curves]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-6-roc-curves" %}})
*   [ContinueVideo 7: Interpreting the Model]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-7-interpreting-the-model" %}})