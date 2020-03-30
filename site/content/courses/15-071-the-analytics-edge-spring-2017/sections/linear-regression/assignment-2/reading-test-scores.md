---
title: 2.5 Assignment 2
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: f590aa024205ae291d855ec56a16b4a4_reading-test-scores
    weight: 740
    parent: d3823600300c03000e79696e835f8f2f_assignment-2
---
*   [<Assignment 2]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/assignment-2" %}})
*   [2.5.1Climate Change]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/assignment-2" %}})
*   [2.5.2Reading Test Scores]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/assignment-2/reading-test-scores" %}})
*   [2.5.3Detecting Flu Epidemics via Search Engine Query Data]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/assignment-2/detecting-flu-epidemics-via-search-engine-query-data" %}})
*   [2.5.4State Data]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/assignment-2/state-data" %}})
*   [\\>Detecting Flu Epidemics via Search Engine Query Data]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/assignment-2/detecting-flu-epidemics-via-search-engine-query-data" %}})

Reading Test Scores
-------------------

The Programme for International Student Assessment (PISA) is a test given every three years to 15-year-old students from around the world to evaluate their performance in mathematics, reading, and science. This test provides a quantitative way to compare the performance of students from different parts of the world. In this homework assignment, we will predict the reading scores of students from the United States of America on the 2009 PISA exam.

The datasets [pisa2009train (CSV)](https://open-learning-course-data-ci.s3.amazonaws.com/15-071-the-analytics-edge-spring-2017/e2141a02399a532766818b7092ec92c8_pisa2009train.csv) and [pisa2009test (CSV)](https://open-learning-course-data-ci.s3.amazonaws.com/15-071-the-analytics-edge-spring-2017/aaebd921b1c08e81759240fd6780400d_pisa2009test.csv) contain information about the demographics and schools for American students taking the exam, derived from [2009 PISA Public-Use Data Files](http://nces.ed.gov/pubsearch/pubsinfo.asp?pubid=2011038) distributed by the United States National Center for Education Statistics (NCES). While the datasets are not supposed to contain identifying information about students taking the test, by using the data you are bound by the [NCES data use agreement](./resolveuid/5bb3aaa2f054659994cfda27ac3e7599), which prohibits any attempt to determine the identity of any student in the datasets.

Each row in the datasets pisa2009train.csv and pisa2009test.csv represents one student taking the exam. The datasets have the following variables:

**grade:** The grade in school of the student (most 15-year-olds in America are in 10th grade)

**male:** Whether the student is male (1/0)

**raceeth:** The race/ethnicity composite of the student

**preschool:** Whether the student attended preschool (1/0)

**expectBachelors:** Whether the student expects to obtain a bachelor's degree (1/0)

**motherHS:** Whether the student's mother completed high school (1/0)

**motherBachelors:** Whether the student's mother obtained a bachelor's degree (1/0)

**motherWork:** Whether the student's mother has part-time or full-time work (1/0)

**fatherHS:** Whether the student's father completed high school (1/0)

**fatherBachelors:** Whether the student's father obtained a bachelor's degree (1/0)

**fatherWork:** Whether the student's father has part-time or full-time work (1/0)

**selfBornUS:** Whether the student was born in the United States of America (1/0)

**motherBornUS:** Whether the student's mother was born in the United States of America (1/0)

**fatherBornUS:** Whether the student's father was born in the United States of America (1/0)

**englishAtHome:** Whether the student speaks English at home (1/0)

**computerForSchoolwork:** Whether the student has access to a computer for schoolwork (1/0)

**read30MinsADay:** Whether the student reads for pleasure for 30 minutes/day (1/0)

**minutesPerWeekEnglish:** The number of minutes per week the student spend in English class

**studentsInEnglish:** The number of students in this student's English class at school

**schoolHasLibrary:** Whether this student's school has a library (1/0)

**publicSchool:** Whether this student attends a public school (1/0)

**urban:** Whether this student's school is in an urban area (1/0)

**schoolSize:** The number of students in this student's school

**readingScore:** The student's reading score, on a 1000-point scale

Problem 1.1 - Dataset size
--------------------------

Load the training and testing sets using the read.csv() function, and save them as variables with the names pisaTrain and pisaTest.

How many students are there in the training set?

Exercise 1

&nbsp;Numerical Response&nbsp;

Explanation

The datasets can be loaded with:

pisaTrain = read.csv("pisa2009train.csv")

pisaTest = read.csv("pisa2009test.csv")

We can then access the number of rows in the training set with str(pisaTrain) or nrow(pisaTrain).

CheckShow Answer

Problem 1.2 - Summarizing the dataset
-------------------------------------

Using tapply() on pisaTrain, what is the average reading test score of males?

Exercise 2

&nbsp;Numerical Response&nbsp;

Of females?

Exercise 3

&nbsp;Numerical Response&nbsp;

Explanation

The correct invocation of tapply() here is:

tapply(pisaTrain$readingScore, pisaTrain$male, mean)

CheckShow Answer

Problem 1.3 - Locating missing values
-------------------------------------

Which variables are missing data in at least one observation in the training set? Select all that apply.

Exercise 4

&nbsp;grade&nbsp;

&nbsp;male&nbsp;

&nbsp;raceeth&nbsp;

&nbsp;preschool&nbsp;

&nbsp;expectBachelors&nbsp;

&nbsp;motherHS&nbsp;

&nbsp;motherBachelors&nbsp;

&nbsp;motherWork&nbsp;

&nbsp;fatherHS&nbsp;

&nbsp;fatherBachelors&nbsp;

&nbsp;fatherWork&nbsp;

&nbsp;selfBornUS&nbsp;

&nbsp;motherBornUS&nbsp;

&nbsp;fatherBornUS&nbsp;

&nbsp;englishAtHome&nbsp;

&nbsp;computerForSchoolwork&nbsp;

&nbsp;read30MinsADay&nbsp;

&nbsp;minutesPerWeekEnglish&nbsp;

&nbsp;studentsInEnglish&nbsp;

&nbsp;schoolHasLibrary&nbsp;

&nbsp;publicSchool&nbsp;

&nbsp;urban&nbsp;

&nbsp;schoolSize&nbsp;

&nbsp;readingScore&nbsp;

Explanation

We can read which variables have missing values from summary(pisaTrain). Because most variables are collected from study participants via survey, it is expected that most questions will have at least one missing value.

CheckShow Answer

Problem 1.4 - Removing missing values
-------------------------------------

Linear regression discards observations with missing data, so we will remove all such observations from the training and testing sets. Later in the course, we will learn about imputation, which deals with missing data by filling in missing values with plausible information.

Type the following commands into your R console to remove observations with any missing value from pisaTrain and pisaTest:

pisaTrain = na.omit(pisaTrain)

pisaTest = na.omit(pisaTest)

How many observations are now in the training set?

Exercise 5

&nbsp;Numerical Response&nbsp;

How many observations are now in the testing set?

Exercise 6

&nbsp;Numerical Response&nbsp;

Explanation

After running the provided commands we can use str(pisaTrain) and str(pisaTest), or nrow(pisaTrain) and nrow(pisaTest), to check the new number of rows in the datasets.

CheckShow Answer

Problem 2.1 - Factor variables
------------------------------

Factor variables are variables that take on a discrete set of values, like the "Region" variable in the WHO dataset from the second lecture of Unit 1. This is an unordered factor because there isn't any natural ordering between the levels. An ordered factor has a natural ordering between the levels (an example would be the classifications "large," "medium," and "small").

Which of the following variables is an unordered factor with at least 3 levels? (Select all that apply.)

Exercise 7

&nbsp;grade&nbsp;

&nbsp;male&nbsp;

&nbsp;raceeth&nbsp;

Which of the following variables is an ordered factor with at least 3 levels? (Select all that apply.)

Exercise 8

&nbsp;grade&nbsp;

&nbsp;male&nbsp;

&nbsp;raceeth&nbsp;

Explanation

Male only has 2 levels (1 and 0). There is no natural ordering between the different values of raceeth, so it is an unordered factor. Meanwhile, we can order grades (8, 9, 10, 11, 12), so it is an ordered factor.

CheckShow Answer

Problem 2.2 - Unordered factors in regression models
----------------------------------------------------

To include unordered factors in a linear regression model, we define one level as the "reference level" and add a binary variable for each of the remaining levels. In this way, a factor with n levels is replaced by n-1 binary variables. The reference level is typically selected to be the most frequently occurring level in the dataset.

As an example, consider the unordered factor variable "color", with levels "red", "green", and "blue". If "green" were the reference level, then we would add binary variables "colorred" and "colorblue" to a linear regression problem. All red examples would have colorred=1 and colorblue=0. All blue examples would have colorred=0 and colorblue=1. All green examples would have colorred=0 and colorblue=0.

Now, consider the variable "raceeth" in our problem, which has levels "American Indian/Alaska Native", "Asian", "Black", "Hispanic", "More than one race", "Native Hawaiian/Other Pacific Islander", and "White". Because it is the most common in our population, we will select White as the reference level.

Which binary variables will be included in the regression model? (Select all that apply.)

Exercise 9

&nbsp;raceethAmerican Indian/Alaska Native&nbsp;

&nbsp;raceethAsian&nbsp;

&nbsp;raceethBlack&nbsp;

&nbsp;raceethHispanic&nbsp;

&nbsp;raceethMore than one race&nbsp;

&nbsp;raceethNative Hawaiian/Other Pacific Islander&nbsp;

&nbsp;raceethWhite&nbsp;

Explanation

We create a binary variable for each level except the reference level, so we would create all these variables except for raceethWhite.

CheckShow Answer

Problem 2.3 - Example unordered factors
---------------------------------------

Consider again adding our unordered factor race to the regression model with reference level "White".

For a student who is Asian, which binary variables would be set to 0? All remaining variables will be set to 1. (Select all that apply.)

Exercise 10

&nbsp;raceethAmerican Indian/Alaska Native&nbsp;

&nbsp;raceethAsian&nbsp;

&nbsp;raceethBlack&nbsp;

&nbsp;raceethHispanic&nbsp;

&nbsp;raceethMore than one race&nbsp;

&nbsp;raceethNative Hawaiian/Other Pacific Islander&nbsp;

For a student who is white, which binary variables would be set to 0? All remaining variables will be set to 1. (Select all that apply.)

Exercise 11

&nbsp;raceethAmerican Indian/Alaska Native&nbsp;

&nbsp;raceethAsian&nbsp;

&nbsp;raceethBlack&nbsp;

&nbsp;raceethHispanic&nbsp;

&nbsp;raceethMore than one race&nbsp;

&nbsp;raceethNative Hawaiian/Other Pacific Islander&nbsp;

Explanation

An Asian student will have raceethAsian set to 1 and all other raceeth binary variables set to 0. Because "White" is the reference level, a white student will have all raceeth binary variables set to 0.

CheckShow Answer

Problem 3.1 - Building a model
------------------------------

Because the race variable takes on text values, it was loaded as a factor variable when we read in the dataset with read.csv() -- you can see this when you run str(pisaTrain) or str(pisaTest). However, by default R selects the first level alphabetically ("American Indian/Alaska Native") as the reference level of our factor instead of the most common level ("White"). Set the reference level of the factor by typing the following two lines in your R console:

pisaTrain$raceeth = relevel(pisaTrain$raceeth, "White")

pisaTest$raceeth = relevel(pisaTest$raceeth, "White")

Now, build a linear regression model (call it lmScore) using the training set to predict readingScore using all the remaining variables.

It would be time-consuming to type all the variables, but R provides the shorthand notation "readingScore ~ ." to mean "predict readingScore using all the other variables in the data frame." The period is used to replace listing out all of the independent variables. As an example, if your dependent variable is called "Y", your independent variables are called "X1", "X2", and "X3", and your training data set is called "Train", instead of the regular notation:

LinReg = lm(Y ~ X1 + X2 + X3, data = Train)

You would use the following command to build your model:

LinReg = lm(Y ~ ., data = Train)

What is the Multiple R-squared value of lmScore on the training set?

Exercise 12

&nbsp;Numerical Response&nbsp;

Explanation

We can train the model with:

lmScore = lm(readingScore~., data=pisaTrain)

We can then read the training set R^2 from the "Multiple R-squared" value of summary(lmScore).

Note that this R-squared is lower than the ones for the models we saw in the lectures and recitation. This does not necessarily imply that the model is of poor quality. More often than not, it simply means that the prediction problem at hand (predicting a student's test score based on demographic and school-related variables) is more difficult than other prediction problems (like predicting a team's number of wins from their runs scored and allowed, or predicting the quality of wine from weather conditions).

CheckShow Answer

Problem 3.2 - Computing the root-mean squared error of the model
----------------------------------------------------------------

What is the training-set root-mean squared error (RMSE) of lmScore?

Exercise 13

&nbsp;Numerical Response&nbsp;

Explanation

The training-set RMSE can be computed by first computing the SSE:

SSE = sum(lmScore$residuals^2)

and then dividing by the number of observations and taking the square root:

RMSE = sqrt(SSE / nrow(pisaTrain))

A alternative way of getting this answer would be with the following command:

sqrt(mean(lmScore$residuals^2)).

CheckShow Answer

Problem 3.3 - Comparing predictions for similar students
--------------------------------------------------------

Consider two students A and B. They have all variable values the same, except that student A is in grade 11 and student B is in grade 9. What is the predicted reading score of student A minus the predicted reading score of student B?

Exercise 14

&nbsp;\-59.09&nbsp;

&nbsp;\-29.54&nbsp;

&nbsp;0&nbsp;

&nbsp;29.54&nbsp;

&nbsp;59.09&nbsp;

&nbsp;The difference cannot be determined without more information about the two students&nbsp;

Explanation

The coefficient 29.54 on grade is the difference in reading score between two students who are identical other than having a difference in grade of 1. Because A and B have a difference in grade of 2, the model predicts that student A has a reading score that is 2\*29.54 larger.

CheckShow Answer

Problem 3.4 - Interpreting model coefficients
---------------------------------------------

What is the meaning of the coefficient associated with variable raceethAsian?

Exercise 15

&nbsp;Predicted average reading score of an Asian student&nbsp;

&nbsp;Difference between the average reading score of an Asian student and the average reading score of a white student&nbsp;

&nbsp;Difference between the average reading score of an Asian student and the average reading score of all the students in the dataset&nbsp;

&nbsp;Predicted difference in the reading score between an Asian student and a white student who is otherwise identical&nbsp;

Explanation

The only difference between an Asian student and white student with otherwise identical variables is that the former has raceethAsian=1 and the latter has raceethAsian=0. The predicted reading score for these two students will differ by the coefficient on the variable raceethAsian.

CheckShow Answer

Problem 3.5 - Identifying variables lacking statistical significance
--------------------------------------------------------------------

Based on the significance codes, which variables are candidates for removal from the model? Select all that apply. (We'll assume that the factor variable raceeth should only be removed if none of its levels are significant.)

Exercise 16

&nbsp;grade&nbsp;

&nbsp;male&nbsp;

&nbsp;raceeth&nbsp;

&nbsp;preschool&nbsp;

&nbsp;expectBachelors&nbsp;

&nbsp;motherHS&nbsp;

&nbsp;motherBachelors&nbsp;

&nbsp;motherWork&nbsp;

&nbsp;fatherHS&nbsp;

&nbsp;fatherBachelors&nbsp;

&nbsp;fatherWork&nbsp;

&nbsp;selfBornUS&nbsp;

&nbsp;motherBornUS&nbsp;

&nbsp;fatherBornUS&nbsp;

&nbsp;englishAtHome&nbsp;

&nbsp;computerForSchoolwork&nbsp;

&nbsp;read30MinsADay&nbsp;

&nbsp;minutesPerWeekEnglish&nbsp;

&nbsp;studentsInEnglish&nbsp;

&nbsp;schoolHasLibrary&nbsp;

&nbsp;publicSchool&nbsp;

&nbsp;urban&nbsp;

&nbsp;schoolSize&nbsp;

Explanation

From summary(lmScore), we can see which variables were significant at the 0.05 level. Because several of the binary variables generated from the race factor variable are significant, we should not remove this variable.

CheckShow Answer

Problem 4.1 - Predicting on unseen data
---------------------------------------

Using the "predict" function and supplying the "newdata" argument, use the lmScore model to predict the reading scores of students in pisaTest. Call this vector of predictions "predTest". Do not change the variables in the model (for example, do not remove variables that we found were not significant in the previous part of this problem). Use the summary function to describe the test set predictions.

What is the range between the maximum and minimum predicted reading score on the test set?

Exercise 17

&nbsp;Numerical Response&nbsp;

Explanation

We can obtain the predictions with:

predTest = predict(lmScore, newdata=pisaTest)

From summary(predTest), we see that the maximum predicted reading score is 637.7, and the minimum predicted score is 353.2. Therefore, the range is 284.5.

CheckShow Answer

Problem 4.2 - Test set SSE and RMSE
-----------------------------------

What is the sum of squared errors (SSE) of lmScore on the testing set?

Exercise 18

&nbsp;Numerical Response&nbsp;

Explanation

This can be calculated with sum((predTest-pisaTest$readingScore)^2).

What is the root-mean squared error (RMSE) of lmScore on the testing set?

Exercise 19

&nbsp;Numerical Response&nbsp;

Explanation

This can be calculated with sqrt(mean((predTest-pisaTest$readingScore)^2)).

CheckShow Answer

Problem 4.3 - Baseline prediction and test-set SSE
--------------------------------------------------

What is the predicted test score used in the baseline model? Remember to compute this value using the training set and not the test set.

Exercise 20

&nbsp;Numerical Response&nbsp;

Explanation

This can be computed with:

baseline = mean(pisaTrain$readingScore)

What is the sum of squared errors of the baseline model on the testing set? HINT: We call the sum of squared errors for the baseline model the total sum of squares (SST).

Exercise 21

&nbsp;Numerical Response&nbsp;

Explanation

This can be computed with sum((baseline-pisaTest$readingScore)^2).

CheckShow Answer

Problem 4.4 - Test-set R-squared
--------------------------------

What is the test-set R-squared value of lmScore?

Exercise 22

&nbsp;Numerical Response&nbsp;

Explanation

The test-set R^2 is defined as 1-SSE/SST, where SSE is the sum of squared errors of the model on the test set and SST is the sum of squared errors of the baseline model. For this model, the R^2 is then computed to be 1-5762082/7802354.

CheckShow Answer

*   [BackAssignment 2]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/assignment-2" %}})
*   [ContinueDetecting Flu Epidemics via Search Engine Query Data]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/assignment-2/detecting-flu-epidemics-via-search-engine-query-data" %}})