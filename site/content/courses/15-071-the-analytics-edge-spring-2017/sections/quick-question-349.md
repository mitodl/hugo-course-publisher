---
title: '4.3 Keeping an Eye on Healthcare Costs: The D2Hawkeye Story '
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: quick-question-349
    weight: 1400
---
*   [<Video 7: Baseline Method and Penalty Matrix]({{% ref "video-7-baseline-method-and-penalty-matrix" %}})
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
*   [\\>Video 8: Predicting Healthcare Cost in R]({{% ref "video-8-predicting-healthcare-cost-in-r" %}})

Quick Question
--------------

Suppose that instead of the baseline method discussed in the previous video, we used the baseline method of predicting the most frequent outcome for all observations. This new baseline method would predict cost bucket 1 for everyone.

What would the accuracy of this baseline method be on the test set?

Exercise 1

&nbsp;Numerical Response&nbsp;

What would the penalty error of this baseline method be on the test set?

Exercise 2

&nbsp;Numerical Response&nbsp;

Explanation

To compute the accuracy, you can create a table of the variable ClaimsTest$bucket2009:

table(ClaimsTest$bucket2009)

According to the table output, this baseline method would get 122978 observations correct, and all other observations wrong. So the accuracy of this baseline method is 122978/nrow(ClaimsTest) = 0.67127.

For the penalty error, since this baseline method predicts 1 for all observations, it would have a penalty error of:

(0\*122978 + 2\*34840 + 4\*16390 + 6\*7937 + 8\*1057)/nrow(ClaimsTest) = 1.044301

CheckShow Answer

*   [BackVideo 7: Baseline Method and Penalty Matrix]({{% ref "video-7-baseline-method-and-penalty-matrix" %}})
*   [ContinueVideo 8: Predicting Healthcare Cost in R]({{% ref "video-8-predicting-healthcare-cost-in-r" %}})