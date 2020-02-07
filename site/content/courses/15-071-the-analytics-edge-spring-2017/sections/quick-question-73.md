---
title: '2.2 The Statistical Sommelier: An Introduction to Linear Regression'
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: quick-question-73
    weight: 460
---
*   [<Video 3: Multiple Linear Regression]({{% ref "video-3-multiple-linear-regression" %}})
*   [2.2.1Video 1: Predicting the Quality of Wine]({{% ref "the-statistical-sommelier-an-introduction-to-linear-regression" %}})
*   [2.2.2Quick Question]({{% ref "quick-question-46" %}})
*   [2.2.3Video 2: One-Variable Linear Regression]({{% ref "video-2-one-variable-linear-regression" %}})
*   [2.2.4Quick Question]({{% ref "quick-question-54" %}})
*   [2.2.5Video 3: Multiple Linear Regression]({{% ref "video-3-multiple-linear-regression" %}})
*   [2.2.6Quick Question]({{% ref "quick-question-73" %}})
*   [2.2.7Video 4: Linear Regression in R]({{% ref "video-4-linear-regression-in-r" %}})
*   [2.2.8Quick Question]({{% ref "quick-question-78" %}})
*   [2.2.9Video 5: Understanding the Model]({{% ref "video-5-understanding-the-model" %}})
*   [2.2.10Quick Question]({{% ref "quick-question-88" %}})
*   [2.2.11Video 6: Correlation and Multicollinearity]({{% ref "video-6-correlation-and-multicollinearity" %}})
*   [2.2.12Quick Question]({{% ref "quick-question-96" %}})
*   [2.2.13Video 7: Making Predictions]({{% ref "video-7-making-predictions" %}})
*   [2.2.14Quick Question]({{% ref "quick-question-101" %}})
*   [2.2.15Video 8: Comparing the Model to the Experts]({{% ref "video-8-comparing-the-model-to-the-experts" %}})
*   [\\>Video 4: Linear Regression in R]({{% ref "video-4-linear-regression-in-r" %}})

Quick Question
--------------

Suppose we add another variable, Average Winter Temperature, to our model to predict wine price. Is it possible for the model's R² value to go down from 0.83 to 0.80?

Exercise 1

&nbsp;No, the model's R² value can only decrease to 0.81 by adding new variables.&nbsp;

&nbsp;No, the model's R² value can not decrease at all by adding new variables. &nbsp;

&nbsp;Yes, the R² value could decrease to 0.80.&nbsp;

Explanation

The model's R² value can never decrease from adding new variables to the model. This is due to the fact that it is always possible to set the coefficient for the new variable to zero in the new model. However, this would be the same as the old model. So the only reason to make the coefficient non-zero is if it improves the R² value of the model, since linear regression picks the coefficients to minimize the error terms, which is the same as maximizing the R².

CheckShow Answer

*   [BackVideo 3: Multiple Linear Regression]({{% ref "video-3-multiple-linear-regression" %}})
*   [ContinueVideo 4: Linear Regression in R]({{% ref "video-4-linear-regression-in-r" %}})