---
title: '4.2 Judge, Jury, and Classifier: An Introduction to Trees '
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: quick-question-267
    weight: 1190
---
*   [<Video 3: Splitting and Predictions]({{% ref "video-3-splitting-and-predictions" %}})
*   [4.2.1Video 1: The Supreme Court]({{% ref "judge-jury-and-classifier-an-introduction-to-trees" %}})
*   [4.2.2Quick Question]({{% ref "quick-question-253" %}})
*   [4.2.3Video 2: CART]({{% ref "video-2-cart" %}})
*   [4.2.4Quick Question]({{% ref "quick-question-258" %}})
*   [4.2.5Video 3: Splitting and Predictions]({{% ref "video-3-splitting-and-predictions" %}})
*   [4.2.6Quick Question]({{% ref "quick-question-267" %}})
*   [4.2.7Video 4: CART in R]({{% ref "video-4-cart-in-r" %}})
*   [4.2.8Quick Question]({{% ref "quick-question-281" %}})
*   [4.2.9Video 5: Random Forests]({{% ref "video-5-random-forests" %}})
*   [4.2.10Quick Question]({{% ref "quick-question-297" %}})
*   [4.2.11Video 6: Cross-Validation]({{% ref "video-6-cross-validation" %}})
*   [4.2.12Quick Question]({{% ref "quick-question-306" %}})
*   [4.2.13Video 7: The Model v. The Experts]({{% ref "video-7-the-model-v-the-experts" %}})
*   [\\>Video 4: CART in R]({{% ref "video-4-cart-in-r" %}})

Quick Question
--------------

Suppose you have a subset of 20 observations, where 14 have outcome A and 6 have outcome B. What proportion of observations have outcome A?

Exercise 1

&nbsp;Numerical Response&nbsp;

Explanation

The fraction of observations that have outcome A is 14/20 = 0.7.

CheckShow Answer

Quick Question
--------------

The following questions ask about the subset of 20 observations from the previous question.

If we set the threshold to 0.25 when computing predictions of outcome A, will we predict A or B for these observations?

Exercise 2

&nbsp;A&nbsp;

&nbsp;B&nbsp;

If we set the threshold to 0.5 when computing predictions of outcome A, will we predict A or B for these observations?

Exercise 3

&nbsp;A&nbsp;

&nbsp;B&nbsp;

If we set the threshold to 0.75 when computing predictions of outcome A, will we predict A or B for these observations?

Exercise 4

&nbsp;A&nbsp;

&nbsp;B&nbsp;

Explanation

Since 70% of these observations have outcome A, we will predict A if the threshold is below 0.7, and we will predict B if the threshold is above 0.7.

CheckShow Answer

*   [BackVideo 3: Splitting and Predictions]({{% ref "video-3-splitting-and-predictions" %}})
*   [ContinueVideo 4: CART in R]({{% ref "video-4-cart-in-r" %}})