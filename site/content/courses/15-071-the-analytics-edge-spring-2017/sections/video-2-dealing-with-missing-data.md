---
title: >-
  3.4 Election Forecasting: Predicting the Winner Before any Votes are Cast 
  (Recitation)
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: video-2-dealing-with-missing-data
    weight: 1060
---
*   [<Video 1: Election Prediction]({{< ref "video-1-election-prediction" >}})
*   [3.4.1Welcome to Recitation 3]({{< ref "election-forecasting-predicting-the-winner-before-any-votes-are-cast-recitation" >}})
*   [3.4.2Video 1: Election Prediction]({{< ref "video-1-election-prediction" >}})
*   [3.4.3Video 2: Dealing with Missing Data]({{< ref "video-2-dealing-with-missing-data" >}})
*   [3.4.4Video 3: A Sophisticated Baseline Method]({{< ref "video-3-a-sophisticated-baseline-method" >}})
*   [3.4.5Video 4: Logistic Regression Models]({{< ref "video-4-logistic-regression-models" >}})
*   [3.4.6Video 5: Test Set Predictions]({{< ref "video-5-test-set-predictions" >}})
*   [\\>Video 3: A Sophisticated Baseline Method]({{< ref "video-3-a-sophisticated-baseline-method" >}})

Video 2: Dealing with Missing Data
----------------------------------

In this recitation, we will be using the dataset [PollingData (CSV)](https://open-learning-course-data.s3.amazonaws.com/15-071-the-analytics-edge-spring-2017/2e5e305f5deb1aee9679c33cf303484b_PollingData.csv). Please download this dataset to your computer, and save it in a location that you can easily navigate to in R. This data comes from [RealClearPolitics.com](http://www.realclearpolitics.com/).

An R script file with all of the commands used in this lecture can be downloaded here: [Unit3\_Recitation (R)](https://open-learning-course-data.s3.amazonaws.com/15-071-the-analytics-edge-spring-2017/a56bc79268299a5d642cee6b3d7da861_Unit3_Recitation.R).

**Important Note**: On some operating systems, the imputed results will be slightly different even if you set the random seed. This is just due to the randomess involved in the multiple imputation process. We've provided the imputed data here: [PollingData\_Imputed (CSV)](https://open-learning-course-data.s3.amazonaws.com/15-071-the-analytics-edge-spring-2017/9567137abd96e74164d4a4d90245c561_PollingData_Imputed.csv). If your results are not matching after the imputation, you can use this dataset instead.

*   [BackVideo 1: Election Prediction]({{< ref "video-1-election-prediction" >}})
*   [ContinueVideo 3: A Sophisticated Baseline Method]({{< ref "video-3-a-sophisticated-baseline-method" >}})