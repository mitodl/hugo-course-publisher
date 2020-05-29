---
title: '2.2 The Statistical Sommelier: An Introduction to Linear Regression'
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: a15d356c50bcb55a2cbde1c66378ef25
    weight: 440
    parent: 4495fb4839343c3323b22ef2104af559
---
*   [<Video 2: One-Variable Linear Regression]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-2-one-variable-linear-regression" %}})
*   [2.2.1Video 1: Predicting the Quality of Wine]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/_index.md" %}})
*   [2.2.2Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/quick-question-46/_index.md" %}})
*   [2.2.3Video 2: One-Variable Linear Regression]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-2-one-variable-linear-regression" %}})
*   [2.2.4Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/quick-question-54/_index.md" %}})
*   [2.2.5Video 3: Multiple Linear Regression]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-3-multiple-linear-regression" %}})
*   [2.2.6Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/quick-question-73" %}})
*   [2.2.7Video 4: Linear Regression in R]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-4-linear-regression-in-r/_index.md" %}})
*   [2.2.8Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/quick-question-78/_index.md" %}})
*   [2.2.9Video 5: Understanding the Model]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-5-understanding-the-model" %}})
*   [2.2.10Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/quick-question-88" %}})
*   [2.2.11Video 6: Correlation and Multicollinearity]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-6-correlation-and-multicollinearity" %}})
*   [2.2.12Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/quick-question-96/_index.md" %}})
*   [2.2.13Video 7: Making Predictions]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-7-making-predictions" %}})
*   [2.2.14Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/quick-question-101" %}})
*   [2.2.15Video 8: Comparing the Model to the Experts]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-8-comparing-the-model-to-the-experts" %}})
*   [\\>Video 3: Multiple Linear Regression]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-3-multiple-linear-regression" %}})

Quick Question
--------------

The following figure shows three data points and the best fit line

\\( y = 3x + 2 . \\)

The x-coordinate, or "x", is our independent variable and the y-coordinate, or "y", is our dependent variable.

![Figure showing three data points and the best fit line.](https://open-learning-course-data-ci.s3.amazonaws.com/15-071-the-analytics-edge-spring-2017/0c812c318c8939543d901b0f954da36a_Wine_QQ2.png)

Please answer the following questions using this figure.

What is the baseline prediction?

Exercise 1

&nbsp;Numerical Response&nbsp;

Explanation

The baseline prediction is the average value of the dependent variable. Since our dependent variable takes values 2, 2, and 8 in our data set, the average is (2+2+8)/3 = 4.

What is the Sum of Squared Errors (SSE) ?

Exercise 2

&nbsp;Numerical Response&nbsp;

Explanation

The SSE is computed by summing the squared errors between the actual values and our predictions. For each value of the independent variable (x), our best fit line makes the following predictions:

If x = 0, y = 3(0) + 2 = 2,

If x = 1, y = 3(1) + 2 = 5.

Thus we make an error of 0 for the data point (0,2), an error of 3 for the data point (1,2), and an error of 3 for the data point (1,8). So we have

SSE = 0² + 3² + 3² = 18.

What is the Total Sum of Squares (SST) ?

Exercise 3

&nbsp;Numerical Response&nbsp;

Explanation

The SST is computed by summing the squared errors between the actual values and the baseline prediction. From the first question, we computed the baseline prediction to be 4. Thus the SST is:

SST = (2 - 4)² + (2 - 4)² + (8 - 4)² = 24.

What is the R² of the model?

Exercise 4

&nbsp;Numerical Response&nbsp;

Explanation

The R² formula is:

R² = 1 - SSE/SST

Thus using our answers to the previous questions, we have that

R² = 1 - 18/24 = 0.25.

CheckShow Answer

*   [BackVideo 2: One-Variable Linear Regression]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-2-one-variable-linear-regression" %}})
*   [ContinueVideo 3: Multiple Linear Regression]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-3-multiple-linear-regression" %}})