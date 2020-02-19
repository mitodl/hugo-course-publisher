---
title: '2.2 The Statistical Sommelier: An Introduction to Linear Regression'
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: dba3745d05fdfdd2c5ccf0b06194ed26_quick-question-78
    weight: 480
    parent: >-
      4495fb4839343c3323b22ef2104af559_the-statistical-sommelier-an-introduction-to-linear-regression
---
*   [<Video 4: Linear Regression in R]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-4-linear-regression-in-r" %}})
*   [2.2.1Video 1: Predicting the Quality of Wine]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression" %}})
*   [2.2.2Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/quick-question-46" %}})
*   [2.2.3Video 2: One-Variable Linear Regression]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-2-one-variable-linear-regression" %}})
*   [2.2.4Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/quick-question-54" %}})
*   [2.2.5Video 3: Multiple Linear Regression]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-3-multiple-linear-regression" %}})
*   [2.2.6Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/quick-question-73" %}})
*   [2.2.7Video 4: Linear Regression in R]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-4-linear-regression-in-r" %}})
*   [2.2.8Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/quick-question-78" %}})
*   [2.2.9Video 5: Understanding the Model]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-5-understanding-the-model" %}})
*   [2.2.10Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/quick-question-88" %}})
*   [2.2.11Video 6: Correlation and Multicollinearity]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-6-correlation-and-multicollinearity" %}})
*   [2.2.12Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/quick-question-96" %}})
*   [2.2.13Video 7: Making Predictions]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-7-making-predictions" %}})
*   [2.2.14Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/quick-question-101" %}})
*   [2.2.15Video 8: Comparing the Model to the Experts]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-8-comparing-the-model-to-the-experts" %}})
*   [\\>Video 5: Understanding the Model]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-5-understanding-the-model" %}})

Quick Question
--------------

In R, use the dataset [wine (CSV)](https://open-learning-course-data.s3.amazonaws.com/15-071-the-analytics-edge-spring-2017/314267a9b7ddb86e315b90440aa4f2ad_wine.csv) to create a linear regression model to predict Price using HarvestRain and WinterRain as independent variables. Using the summary output of this model, answer the following questions:

What is the "Multiple R-squared" value of your model?

Exercise 1

&nbsp;Numerical Response&nbsp;

What is the coefficient for HarvestRain?

Exercise 2

&nbsp;Numerical Response&nbsp;

What is the intercept coefficient?

Exercise 3

&nbsp;Numerical Response&nbsp;

Explanation

In R, create the model by typing the following line into your R console:

modelQQ4 = lm(Price ~ HarvestRain + WinterRain, data=wine)

Then, look at the output of summary(modelQQ4). The Multiple R-squared is listed at the bottom of the output, and the coefficients can be found in the coefficients table.

CheckShow Answer

*   [BackVideo 4: Linear Regression in R]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-4-linear-regression-in-r" %}})
*   [ContinueVideo 5: Understanding the Model]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-5-understanding-the-model" %}})