---
title: '4.3 Keeping an Eye on Healthcare Costs: The D2Hawkeye Story '
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: 092222253a2b5d3fb68d5398ca2111a9_quick-question-349
    weight: 250
    parent: >-
      52a221ddc01190a445b1a393b15cb810_keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story
---
*   [<Video 7: Baseline Method and Penalty Matrix]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-7-baseline-method-and-penalty-matrix" %}})
*   [4.3.1Video 1: The Story of D2Hawkeye]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story" %}})
*   [4.3.2Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/quick-question-311" %}})
*   [4.3.3Video 2: Claims Data]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-2-claims-data" %}})
*   [4.3.4Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/quick-question-316" %}})
*   [4.3.5Video 3: The Variables]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-3-the-variables" %}})
*   [4.3.6Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/quick-question-321" %}})
*   [4.3.7Video 4: Error Measures]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-4-error-measures" %}})
*   [4.3.8Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/quick-question-326" %}})
*   [4.3.9Video 5: CART to Predict Cost]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-5-cart-to-predict-cost" %}})
*   [4.3.10Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/quick-question-337" %}})
*   [4.3.11Video 6: Claims Data in R]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-6-claims-data-in-r" %}})
*   [4.3.12Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/quick-question-342" %}})
*   [4.3.13Video 7: Baseline Method and Penalty Matrix]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-7-baseline-method-and-penalty-matrix" %}})
*   [4.3.14Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/quick-question-349" %}})
*   [4.3.15Video 8: Predicting Healthcare Cost in R]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-8-predicting-healthcare-cost-in-r" %}})
*   [4.3.16Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/quick-question-357" %}})
*   [4.3.17Video 9: Results]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-9-results" %}})
*   [\\>Video 8: Predicting Healthcare Cost in R]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-8-predicting-healthcare-cost-in-r" %}})

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

*   [BackVideo 7: Baseline Method and Penalty Matrix]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-7-baseline-method-and-penalty-matrix" %}})
*   [ContinueVideo 8: Predicting Healthcare Cost in R]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-8-predicting-healthcare-cost-in-r" %}})