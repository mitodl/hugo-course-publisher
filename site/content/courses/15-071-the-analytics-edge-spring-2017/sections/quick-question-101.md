---
title: '2.2 The Statistical Sommelier: An Introduction to Linear Regression'
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: quick-question-101
    weight: 540
---
*   [<Video 7: Making Predictions]({{< ref "video-7-making-predictions" >}})
*   [2.2.1Video 1: Predicting the Quality of Wine]({{< ref "the-statistical-sommelier-an-introduction-to-linear-regression" >}})
*   [2.2.2Quick Question]({{< ref "quick-question-46" >}})
*   [2.2.3Video 2: One-Variable Linear Regression]({{< ref "video-2-one-variable-linear-regression" >}})
*   [2.2.4Quick Question]({{< ref "quick-question-54" >}})
*   [2.2.5Video 3: Multiple Linear Regression]({{< ref "video-3-multiple-linear-regression" >}})
*   [2.2.6Quick Question]({{< ref "quick-question-73" >}})
*   [2.2.7Video 4: Linear Regression in R]({{< ref "video-4-linear-regression-in-r" >}})
*   [2.2.8Quick Question]({{< ref "quick-question-78" >}})
*   [2.2.9Video 5: Understanding the Model]({{< ref "video-5-understanding-the-model" >}})
*   [2.2.10Quick Question]({{< ref "quick-question-88" >}})
*   [2.2.11Video 6: Correlation and Multicollinearity]({{< ref "video-6-correlation-and-multicollinearity" >}})
*   [2.2.12Quick Question]({{< ref "quick-question-96" >}})
*   [2.2.13Video 7: Making Predictions]({{< ref "video-7-making-predictions" >}})
*   [2.2.14Quick Question]({{< ref "quick-question-101" >}})
*   [2.2.15Video 8: Comparing the Model to the Experts]({{< ref "video-8-comparing-the-model-to-the-experts" >}})
*   [\\>Video 8: Comparing the Model to the Experts]({{< ref "video-8-comparing-the-model-to-the-experts" >}})

Quick Question
--------------

Which of the following are NOT valid values for an out-of-sample (test set) R² ? Select all that apply.

Exercise 1

&nbsp;\-7.0&nbsp;

&nbsp;\-0.3&nbsp;

&nbsp;0.0&nbsp;

&nbsp;0.6&nbsp;

&nbsp;1.0&nbsp;

&nbsp;2.4&nbsp;

Explanation

The formula for R² is

R² = 1 - SSE/SST,

where SST is calculated using the average value of the dependent variable on the training set.

Since SSE and SST are the sums of squared terms, we know that both will be positive. Thus SSE/SST must be greater than or equal to zero. This means it is not possible to have an out-of-sample R² value of 2.4.

However, all other values are valid (even the negative ones!), since SSE can be more or less than SST, due to the fact that this is an out-of-sample R², not a model R².

CheckShow Answer

*   [BackVideo 7: Making Predictions]({{< ref "video-7-making-predictions" >}})
*   [ContinueVideo 8: Comparing the Model to the Experts]({{< ref "video-8-comparing-the-model-to-the-experts" >}})