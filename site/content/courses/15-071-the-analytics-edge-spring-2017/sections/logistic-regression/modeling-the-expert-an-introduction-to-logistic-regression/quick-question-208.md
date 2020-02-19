---
title: '3.2 Modeling the Expert: An Introduction to Logistic Regression'
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: 8809159b6e060da2d38690c7900fdd67_quick-question-208
    weight: 910
    parent: >-
      3063320a41756b8a4fa9892f61b52c0d_modeling-the-expert-an-introduction-to-logistic-regression
---
*   [<Video 7: Interpreting the Model]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-7-interpreting-the-model" %}})
*   [3.2.1Video 1: Replicating Expert Assessment]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression" %}})
*   [3.2.2Video 2: Building the Dataset]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-2-building-the-dataset" %}})
*   [3.2.3Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-144" %}})
*   [3.2.4Video 3: Logistic Regression]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-3-logistic-regression" %}})
*   [3.2.5Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-152" %}})
*   [3.2.6Video 4: Logistic Regression in R]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-4-logistic-regression-in-r" %}})
*   [3.2.7Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-167" %}})
*   [3.2.8Video 5: Thresholding]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-5-thresholding" %}})
*   [3.2.9Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-188" %}})
*   [3.2.10Video 6: ROC Curves]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-6-roc-curves" %}})
*   [3.2.11Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-200" %}})
*   [3.2.12Video 7: Interpreting the Model]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-7-interpreting-the-model" %}})
*   [3.2.13Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-208" %}})
*   [3.2.14Video 8: The Analytics Edge]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-8-the-analytics-edge" %}})
*   [\\>Video 8: The Analytics Edge]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-8-the-analytics-edge" %}})

Quick Question
--------------

**Important Note:** This question uses the original model with the independent variables "OfficeVisits" and "Narcotics". Be sure to use this model, instead of the model you built in Quick Question 4.

Compute the test set predictions in R by running the command:

predictTest = predict(QualityLog, type="response", newdata=qualityTest)

You can compute the test set AUC by running the following two commands in R:

ROCRpredTest = prediction(predictTest, qualityTest$PoorCare)

auc = as.numeric(performance(ROCRpredTest, "auc")@y.values)

What is the AUC of this model on the test set?

Exercise 1

&nbsp;Numerical Response&nbsp;

Explanation

If you run the commands given above in your R console, you can see the value of the AUC of this model on the test set by just typing auc in your console. The value should be 0.7994792.

CheckShow Answer

The AUC of a model has the following nice interpretation: given a random patient from the dataset who actually received poor care, and a random patient from the dataset who actually received good care, the AUC is the perecentage of time that our model will classify which is which correctly.

*   [BackVideo 7: Interpreting the Model]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-7-interpreting-the-model" %}})
*   [ContinueVideo 8: The Analytics Edge]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-8-the-analytics-edge" %}})