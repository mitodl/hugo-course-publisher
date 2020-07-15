---
title: '3.2 Modeling the Expert: An Introduction to Logistic Regression'
course_id: 15-071-the-analytics-edge-spring-2017
type: courses
layout: videogallery
---
*   [<Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-152" %}})
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
*   [\\>Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-167" %}})

Video 4: Logistic Regression in R
---------------------------------

In this video, we'll be using the dataset [quality (CSV)](https://open-learning-course-data-ci.s3.amazonaws.com/15-071-the-analytics-edge-spring-2017/6343d35a6e7817560160a4ea9dc9bd2e_quality.csv) to build a logistic regression model in R. Please download this file to follow along.

An R script file with all of the commands used in this lecture can be downloaded here: [Unit3\_ModelingExpert (R)](https://open-learning-course-data-ci.s3.amazonaws.com/15-071-the-analytics-edge-spring-2017/b6bc987749db09111285d5a2a287e733_Unit3_ModelingExpert.R).

{{< youtube JcKvI821H0c >}}

The variables in the dataset quality.csv are as follows:

*   **MemberID** numbers the patients from 1 to 131, and is just an identifying number.
*   **InpatientDays** is the number of inpatient visits, or number of days the person spent in the hospital.
*   **ERVisits** is the number of times the patient visited the emergency room.
*   **OfficeVisits** is the number of times the patient visited any doctor's office.
*   **Narcotics** is the number of prescriptions the patient had for narcotics.
*   **DaysSinceLastERVisit** is the number of days between the patient's last emergency room visit and the end of the study period (set to the length of the study period if they never visited the ER). 
*   **Pain** is the number of visits for which the patient complained about pain.
*   **TotalVisits** is the total number of times the patient visited any healthcare provider.
*   **ProviderCount** is the number of providers that served the patient.
*   **MedicalClaims** is the number of days on which the patient had a medical claim.
*   **ClaimLines** is the total number of medical claims.
*   **StartedOnCombination** is whether or not the patient was started on a combination of drugs to treat their diabetes (TRUE or FALSE).
*   **AcuteDrugGapSmall** is the fraction of acute drugs that were refilled quickly after the prescription ran out.
*   **PoorCare** is the outcome or dependent variable, and is equal to 1 if the patient had poor care, and equal to 0 if the patient had good care.

In this video we learned how to use the sample.split() function from the caTools package to split data for a classification problem, balancing the positive and negative observations in the training and testing sets.

If you wanted to instead split a data frame _data,_ where the dependent variable is a continuous outcome (this was the case for all the datasets we used last week), you could instead use the sample() function. Here is how to select 70% of observations for the training set (called "train") and 30% of observations for the testing set (called "test"):

`spl = sample(1:nrow(data), size=0.7 * nrow(data))`

`train = data[spl,]`

`test = data[-spl,]`

*   [BackQuick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-152" %}})
*   [ContinueQuick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/quick-question-167" %}})