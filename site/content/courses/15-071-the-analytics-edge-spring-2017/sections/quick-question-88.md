---
title: '2.2 The Statistical Sommelier: An Introduction to Linear Regression'
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: quick-question-88
    weight: 500
---
*   [<Video 5: Understanding the Model]({{% ref "video-5-understanding-the-model" %}})
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
*   [\\>Video 6: Correlation and Multicollinearity]({{% ref "video-6-correlation-and-multicollinearity" %}})

Quick Question
--------------

Use the dataset wine.csv to create a linear regression model to predict Price using HarvestRain and WinterRain as independent variables, like you did in the previous quick question. Using the summary output of this model, answer the following questions:

Is the coefficient for HarvestRain significant?

Exercise 1

&nbsp;Yes&nbsp;

&nbsp;No&nbsp;

&nbsp;I can't answer this question using the summary output.&nbsp;

Is the coefficient for WinterRain significant?

Exercise 2

&nbsp;Yes&nbsp;

&nbsp;No&nbsp;

&nbsp;I can't answer this question using the summary output.&nbsp;

Explanation

You can create the model and look at the summary output with the following command:

model = lm(Price ~ WinterRain + HarvestRain, data=wine)

summary(model)

From the summary output, you can see that HarvestRain is significant (two stars), but WinterRain is not (no stars).

Note that you will need to answer both questions before checking your answers.

CheckShow Answer

*   [BackVideo 5: Understanding the Model]({{% ref "video-5-understanding-the-model" %}})
*   [ContinueVideo 6: Correlation and Multicollinearity]({{% ref "video-6-correlation-and-multicollinearity" %}})