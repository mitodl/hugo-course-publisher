---
title: '3.2 Modeling the Expert: An Introduction to Logistic Regression'
course_id: 15-071-the-analytics-edge-spring-2017
---
*   [<Video 4: Logistic Regression in R]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-4-logistic-regression-in-r/_index.md" %}})
*   [3.2.1Video 1: Replicating Expert Assessment]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/_index.md" %}})
*   [3.2.2Video 2: Building the Dataset]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-2-building-the-dataset" %}})
*   [3.2.3Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-144" %}})
*   [3.2.4Video 3: Logistic Regression]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-3-logistic-regression" %}})
*   [3.2.5Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-152" %}})
*   [3.2.6Video 4: Logistic Regression in R]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-4-logistic-regression-in-r/_index.md" %}})
*   [3.2.7Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-167" %}})
*   [3.2.8Video 5: Thresholding]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-5-thresholding" %}})
*   [3.2.9Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-188" %}})
*   [3.2.10Video 6: ROC Curves]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-6-roc-curves" %}})
*   [3.2.11Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-200/_index.md" %}})
*   [3.2.12Video 7: Interpreting the Model]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-7-interpreting-the-model" %}})
*   [3.2.13Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-208" %}})
*   [3.2.14Video 8: The Analytics Edge]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-8-the-analytics-edge" %}})
*   [\\>Video 5: Thresholding]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-5-thresholding" %}})

Quick Question
--------------

In R, create a logistic regression model to predict "PoorCare" using the independent variables "StartedOnCombination" and "ProviderCount". Use the training set we created in the previous video to build the model.

Note: If you haven't already loaded and split the data in R, please run these commands in your R console to load and split the data set. Remember to first navigate to the directory where you have saved "quality.csv".

quality = read.csv("quality.csv")

install.packages("caTools")

library(caTools)

set.seed(88)

split = sample.split(quality$PoorCare, SplitRatio = 0.75)

qualityTrain = subset(quality, split == TRUE)

qualityTest = subset(quality, split == FALSE)

Then recall that we built a logistic regression model to predict PoorCare using the R command:

QualityLog = glm(PoorCare ~ OfficeVisits + Narcotics, data=qualityTrain, family=binomial)

You will need to adjust this command to answer this question, and then look at the summary(QualityLog) output.

What is the coefficient for "StartedOnCombination"?

Exercise 1

&nbsp;Numerical Response&nbsp;

Explanation

To construct this model in R, use the command:

Model = glm(PoorCare ~ StartedOnCombination + ProviderCount, data=qualityTrain, family=binomial)

If you look at the output of summary(Model), the value of the coefficient (Estimate) for StartedOnCombination is 1.95230.

CheckShow Answer

Quick Question
--------------

StartedOnCombination is a binary variable, which equals 1 if the patient is started on a combination of drugs to treat their diabetes, and equals 0 if the patient is not started on a combination of drugs. All else being equal, does this model imply that starting a patient on a combination of drugs is indicative of poor care, or good care?

Exercise 2

&nbsp;Poor Care&nbsp;

&nbsp;Good Care&nbsp;

Explanation

The coefficient value is positive, meaning that positive values of the variable make the outcome of 1 more likely. This corresponds to Poor Care.

CheckShow Answer

*   [BackVideo 4: Logistic Regression in R]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-4-logistic-regression-in-r/_index.md" %}})
*   [ContinueVideo 5: Thresholding]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-5-thresholding" %}})