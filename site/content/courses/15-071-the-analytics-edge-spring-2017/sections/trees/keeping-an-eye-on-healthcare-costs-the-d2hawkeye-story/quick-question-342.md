---
title: '4.3 Keeping an Eye on Healthcare Costs: The D2Hawkeye Story '
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: 954c1e9daed9ccd165dd85e2287df612_quick-question-342
    weight: 230
---
*   [<Video 6: Claims Data in R]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-6-claims-data-in-r" %}})
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
*   [\\>Video 7: Baseline Method and Penalty Matrix]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-7-baseline-method-and-penalty-matrix" %}})

Quick Question
--------------

What is the average age of patients in the training set, ClaimsTrain?

Exercise 1

&nbsp;Numerical Response&nbsp;

What proportion of people in the training set (ClaimsTrain) had at least one diagnosis code for diabetes?

Exercise 2

&nbsp;Numerical Response&nbsp;

Explanation

Both of these answers can be found by looking at summary(ClaimsTrain). The mean age should be listed under the age variable, and since diabetes is a binary variable, the mean value of diabetes gives the proportion of people with at least one diagnosis code for diabetes.

Alternatively, you could use the mean, table, and nrow functions:

mean(ClaimsTrain$age)

table(ClaimsTrain$diabetes)/nrow(ClaimsTrain)

CheckShow Answer

*   [BackVideo 6: Claims Data in R]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-6-claims-data-in-r" %}})
*   [ContinueVideo 7: Baseline Method and Penalty Matrix]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-7-baseline-method-and-penalty-matrix" %}})