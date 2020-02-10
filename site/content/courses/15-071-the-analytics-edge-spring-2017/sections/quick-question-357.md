---
title: '4.3 Keeping an Eye on Healthcare Costs: The D2Hawkeye Story '
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: quick-question-357
    weight: 1420
---
*   [<Video 8: Predicting Healthcare Cost in R]({{% ref "video-8-predicting-healthcare-cost-in-r" %}})
*   [4.3.1Video 1: The Story of D2Hawkeye]({{% ref "keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story" %}})
*   [4.3.2Quick Question]({{% ref "quick-question-311" %}})
*   [4.3.3Video 2: Claims Data]({{% ref "video-2-claims-data" %}})
*   [4.3.4Quick Question]({{% ref "quick-question-316" %}})
*   [4.3.5Video 3: The Variables]({{% ref "video-3-the-variables" %}})
*   [4.3.6Quick Question]({{% ref "quick-question-321" %}})
*   [4.3.7Video 4: Error Measures]({{% ref "video-4-error-measures" %}})
*   [4.3.8Quick Question]({{% ref "quick-question-326" %}})
*   [4.3.9Video 5: CART to Predict Cost]({{% ref "video-5-cart-to-predict-cost" %}})
*   [4.3.10Quick Question]({{% ref "quick-question-337" %}})
*   [4.3.11Video 6: Claims Data in R]({{% ref "video-6-claims-data-in-r" %}})
*   [4.3.12Quick Question]({{% ref "quick-question-342" %}})
*   [4.3.13Video 7: Baseline Method and Penalty Matrix]({{% ref "video-7-baseline-method-and-penalty-matrix" %}})
*   [4.3.14Quick Question]({{% ref "quick-question-349" %}})
*   [4.3.15Video 8: Predicting Healthcare Cost in R]({{% ref "video-8-predicting-healthcare-cost-in-r" %}})
*   [4.3.16Quick Question]({{% ref "quick-question-357" %}})
*   [4.3.17Video 9: Results]({{% ref "video-9-results" %}})
*   [\\>Video 9: Results]({{% ref "video-9-results" %}})

Quick Question
--------------

In the previous video, we constructed two CART models. The first CART model, without the loss matrix, predicted bucket 1 for 78.6% of the observations in the test set. Did the second CART model, with the loss matrix, predict bucket 1 for more or fewer of the observations, and why?

Exercise 1

&nbsp;According to the penalty matrix, some of the worst types of errors are to not predict bucket 1 when the actual cost bucket is bucket 1. Therefore, the model with the penalty matrix predicted bucket 1 more frequently. &nbsp;

&nbsp;According to the penalty matrix, some of the worst types of errors are to predict bucket 1 when the actual cost bucket is higher. Therefore, the model with the penalty matrix predicted bucket 1 more frequently.&nbsp;

&nbsp;According to the penalty matrix, some of the worst types of errors are to not predict bucket 1 when the actual cost bucket is bucket 1. Therefore, the model with the penalty matrix predicted bucket 1 less frequently. &nbsp;

&nbsp;According to the penalty matrix, some of the worst types of errors are to predict bucket 1 when the actual cost bucket is higher. Therefore, the model with the penalty matrix predicted bucket 1 less frequently. &nbsp;

Explanation

If you look at the classification matrix for the second CART model, we predicted bucket 1 less frequently. This is because, according to the penalty matrix, some of the worst types of errors are to predict bucket 1 when the actual cost bucket is higher.

CheckShow Answer

*   [BackVideo 8: Predicting Healthcare Cost in R]({{% ref "video-8-predicting-healthcare-cost-in-r" %}})
*   [ContinueVideo 9: Results]({{% ref "video-9-results" %}})