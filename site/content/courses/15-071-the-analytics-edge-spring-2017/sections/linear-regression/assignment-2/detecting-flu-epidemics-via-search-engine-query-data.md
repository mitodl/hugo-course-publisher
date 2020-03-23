---
title: 2.5 Assignment 2
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: >-
      d64b92473ae1fb2350f1b27dc8fbde0b_detecting-flu-epidemics-via-search-engine-query-data
    weight: 750
    parent: d3823600300c03000e79696e835f8f2f_assignment-2
---
*   [<Reading Test Scores]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/assignment-2/reading-test-scores" %}})
*   [2.5.1Climate Change]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/assignment-2" %}})
*   [2.5.2Reading Test Scores]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/assignment-2/reading-test-scores" %}})
*   [2.5.3Detecting Flu Epidemics via Search Engine Query Data]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/assignment-2/detecting-flu-epidemics-via-search-engine-query-data" %}})
*   [2.5.4State Data]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/assignment-2/state-data" %}})
*   [\\>State Data]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/assignment-2/state-data" %}})

Detecting Flu Epidemics via Search Engine Query Data 
-----------------------------------------------------

Flu epidemics constitute a major public health concern causing respiratory illnesses, hospitalizations, and deaths. According to the National Vital Statistics Reports published in October 2012, influenza ranked as the eighth leading cause of death in 2011 in the United States. Each year, 250,000 to 500,000 deaths are attributed to influenza related diseases throughout the world.

The U.S. Centers for Disease Control and Prevention (CDC) and the European Influenza Surveillance Scheme (EISS) detect influenza activity through virologic and clinical data, including Influenza-like Illness (ILI) physician visits. Reporting national and regional data, however, are published with a 1-2 week lag.

The [Google Flu Trends](https://www.google.org/flutrends/us/#US) project was initiated to see if faster reporting can be made possible by considering flu-related online search queries -- data that is available almost immediately.

Problem 1.1 - Understanding the Data
------------------------------------

We would like to estimate influenza-like illness (ILI) activity using Google web search logs. Fortunately, one can easily access this data online:

ILI Data - The [CDC](http://www.cdc.gov/flu/weekly/fluactivitysurv.htm) publishes on its website the official regional and state-level percentage of patient visits to healthcare providers for ILI purposes on a weekly basis.

Google Search Queries - [Google Trends](http://www.google.com/trends/) allows public retrieval of weekly counts for every query searched by users around the world. For each location, the counts are normalized by dividing the count for each query in a particular week by the total number of online search queries submitted in that location during the week. Then, the values are adjusted to be between 0 and 1.

The csv file [FluTrain (CSV)](https://open-learning-course-data-ci.s3.amazonaws.com/15-071-the-analytics-edge-spring-2017/0148593d1ffa6dfdc89b468c796b52f3_FluTrain.csv) aggregates this data from January 1, 2004 until December 31, 2011 as follows:

"Week" - The range of dates represented by this observation, in year/month/day format.

"ILI" - This column lists the percentage of ILI-related physician visits for the corresponding week.

"Queries" - This column lists the fraction of queries that are ILI-related for the corresponding week, adjusted to be between 0 and 1 (higher values correspond to more ILI-related search queries).

Before applying analytics tools on the training set, we first need to understand the data at hand. Load "FluTrain.csv" into a data frame called FluTrain. Looking at the time period 2004-2011, which week corresponds to the highest percentage of ILI-related physician visits? Select the day of the month corresponding to the start of this week.

| {{< br >}}{{< br >}}Exercise 1{{< br >}}{{< br >}}&nbsp; January February March April May June July August September October November December October&nbsp;{{< br >}}{{< br >}}{{< br >}}{{< br >}}{{< br >}}{{< br >}} | {{< br >}}{{< br >}}Exercise 2{{< br >}}{{< br >}}&nbsp; 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 18&nbsp;{{< br >}}{{< br >}}{{< br >}}{{< br >}}{{< br >}}{{< br >}} | {{< br >}}{{< br >}}Exercise 3{{< br >}}{{< br >}}&nbsp; 2004 2005 2006 2007 2008 2009 2010 2011 2009&nbsp;{{< br >}}{{< br >}}{{< br >}}{{< br >}}{{< br >}}{{< br >}} 

Explanation

We can limit FluTrain to the observations that obtain the maximum ILI value with subset(FluTrain, ILI == max(ILI)). From here, we can read information about the week at which the maximum was obtained. Alternatively, you can use which.max(FluTrain$ILI) to find the row number corresponding to the observation with the maximum value of ILI, which is 303. Then, you can output the corresponding week using FluTrain$Week\[303\].

Which week corresponds to the highest percentage of ILI-related query fraction?

| {{< br >}}{{< br >}}Exercise 4{{< br >}}{{< br >}}&nbsp; January February March April May June July August September October November December October&nbsp;{{< br >}}{{< br >}}{{< br >}}{{< br >}}{{< br >}}{{< br >}} | {{< br >}}{{< br >}}Exercise 5{{< br >}}{{< br >}}&nbsp; 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 18&nbsp;{{< br >}}{{< br >}}{{< br >}}{{< br >}}{{< br >}}{{< br >}} | {{< br >}}{{< br >}}Exercise 6{{< br >}}{{< br >}}&nbsp; 2004 2005 2006 2007 2008 2009 2010 2011 2009&nbsp;{{< br >}}{{< br >}}{{< br >}}{{< br >}}{{< br >}}{{< br >}} |
|   |   | {{< br >}}{{< br >}}CheckShow Answer{{< br >}}{{< br >}} 

Explanation

We can limit FluTrain to the observations that obtain the maximum ILI value with subset(FluTrain, Queries == max(Queries)). From here, we can read information about the week at which the maximum was obtained. Alternatively, you can use which.max(FluTrain$Queries) to find the row number corresponding to the observation with the maximum value of Queries, which is 303. Then, you can output the corresponding week using FluTrain$Week\[303\].

Problem 1.2 - Understanding the Data
------------------------------------

Let us now understand the data at an aggregate level. Plot the histogram of the dependent variable, ILI. What best describes the distribution of values of ILI?

Exercise 7

&nbsp;Most of the ILI values are small, with a relatively small number of much larger values (in statistics, this sort of data is called "skew right"). &nbsp;

&nbsp;The ILI values are balanced, with equal numbers of unusually large and unusually small values. &nbsp;

&nbsp;Most of the ILI values are large, with a relatively small number of much smaller values (in statistics, this sort of data is called "skew left"). &nbsp;

Explanation

The histogram of ILI can be obtained with hist(FluTrain$ILI). Visually, the data is skew right.

CheckShow Answer

Problem 1.3 - Understanding the Data
------------------------------------

When handling a skewed dependent variable, it is often useful to predict the logarithm of the dependent variable instead of the dependent variable itself -- this prevents the small number of unusually large or small observations from having an undue influence on the sum of squared errors of predictive models. In this problem, we will predict the natural log of the ILI variable, which can be computed in R using the log() function.

Plot the natural logarithm of ILI versus Queries. What does the plot suggest?.

Exercise 8

&nbsp;There is a negative, linear relationship between log(ILI) and Queries. &nbsp;

&nbsp;There is no apparent linear relationship between log(ILI) and Queries. &nbsp;

&nbsp;There is a positive, linear relationship between log(ILI) and Queries. &nbsp;

Explanation

The plot can be obtained with plot(FluTrain$Queries, log(FluTrain$ILI)). Visually, there is a positive, linear relationship between log(ILI) and Queries.

CheckShow Answer

Problem 2.1 - Linear Regression Model
-------------------------------------

Based on the plot we just made, it seems that a linear regression model could be a good modeling choice. Based on our understanding of the data from the previous subproblem, which model best describes our estimation problem?

Exercise 9

&nbsp;ILI = intercept + coefficient x Queries, where the coefficient is negative&nbsp;

&nbsp;Queries = intercept + coefficient x ILI, where the coefficient is negative&nbsp;

&nbsp;ILI = intercept + coefficient x Queries, where the coefficient is positive&nbsp;

&nbsp;Queries = intercept + coefficient x ILI, where the coefficient is positive&nbsp;

&nbsp;log(ILI) = intercept + coefficient x Queries, where the coefficient is negative&nbsp;

&nbsp;Queries = intercept + coefficient x log(ILI), where the coefficient is negative&nbsp;

&nbsp;log(ILI) = intercept + coefficient x Queries, where the coefficient is positive&nbsp;

&nbsp;Queries = intercept + coefficient x log(ILI), where the coeffcient is positive&nbsp;

Explanation

From the previous subproblem, we are predicting log(ILI) using the Queries variable. From the plot in the previous subproblem, we expect the coefficient on Queries to be positive.

CheckShow Answer

Problem 2.2 - Linear Regression Model
-------------------------------------

Let's call the regression model from the previous problem (Problem 2.1) FluTrend1 and run it in R. Hint: to take the logarithm of a variable Var in a regression equation, you simply use log(Var) when specifying the formula to the lm() function.

What is the training set R-squared value for FluTrend1 model (the "Multiple R-squared")?

Exercise 10

&nbsp;Numerical Response&nbsp;

Explanation

The model can be trained with:

FluTrend1 = lm(log(ILI)~Queries, data=FluTrain)

From summary(FluTrend1), we read that the R-squared value is 0.709.

CheckShow Answer

Problem 2.3 - Linear Regression Model
-------------------------------------

For a single variable linear regression model, there is a direct relationship between the R-squared and the correlation between the independent and the dependent variables. What is the relationship we infer from our problem? (Don't forget that you can use the cor function to compute the correlation between two variables.)

Exercise 11

&nbsp;R-squared = Correlation^2&nbsp;

&nbsp;R-squared = log(1/Correlation)&nbsp;

&nbsp;R-squared = exp(-0.5\*Correlation)&nbsp;

Explanation

To test these hypotheses, we first need to compute the correlation between the independent variable used in the model (Queries) and the dependent variable (log(ILI)). This can be done with

Correlation = cor(FluTrain$Queries, log(FluTrain$ILI))

The values of the three expressions are then:

Correlation^2 = 0.7090201

log(1/Correlation) = 0.1719357

exp(-0.5\*Correlation) = 0.6563792

It appears that Correlation^2 is equal to the R-squared value. It can be proved that this is always the case.

Note that the "exp" function stands for the exponential function. The exponential can be computed in R using the function exp().

CheckShow Answer

Problem 3.1 - Performance on the Test Set
-----------------------------------------

The csv file [FluTest.csv](https://open-learning-course-data-ci.s3.amazonaws.com/15-071-the-analytics-edge-spring-2017/7dab7b0643fffe3c60340a93323d2a0a_FluTest.csv) provides the 2012 weekly data of the ILI-related search queries and the observed weekly percentage of ILI-related physician visits. Load this data into a data frame called FluTest.

Normally, we would obtain test-set predictions from the model FluTrend1 using the code

PredTest1 = predict(FluTrend1, newdata=FluTest)

However, the dependent variable in our model is log(ILI), so PredTest1 would contain predictions of the log(ILI) value. We are instead interested in obtaining predictions of the ILI value. We can convert from predictions of log(ILI) to predictions of ILI via exponentiation, or the exp() function. The new code, which predicts the ILI value, is

PredTest1 = exp(predict(FluTrend1, newdata=FluTest))

What is our estimate for the percentage of ILI-related physician visits for the week of March 11, 2012? (HINT: You can either just output FluTest$Week to find which element corresponds to March 11, 2012, or you can use the "which" function in R. To learn more about the which function, type "?which" in your R console.)

Exercise 12

&nbsp;Numerical Response&nbsp;

Explanation

To obtain the predictions, we need can run

PredTest1 = exp(predict(FluTrend1, newdata=FluTest))

Next, we need to determine which element in the test set is for March 11, 2012. We can determine this with:

which(FluTest$Week == "2012-03-11 - 2012-03-17")

Now we know we are looking for prediction number 11. This can be accessed with:

PredTest1\[11\]

CheckShow Answer

Problem 3.2 - Performance on the Test Set
-----------------------------------------

What is the relative error betweeen the estimate (our prediction) and the observed value for the week of March 11, 2012? Note that the relative error is calculated as

(Observed ILI - Estimated ILI)/Observed ILI

Exercise 13

&nbsp;Numerical Response&nbsp;

Explanation

From the previous problem, we know the predicted value is 2.187378. The actual value is the 11th testing set ILI value or FluTest$ILI\[11\], which has value 2.293422. Finally we compute the relative error to be (2.293422 - 2.187378)/2.293422.

CheckShow Answer

Problem 3.3 - Performance on the Test Set
-----------------------------------------

What is the Root Mean Square Error (RMSE) between our estimates and the actual observations for the percentage of ILI-related physician visits, on the test set?

Exercise 14

&nbsp;Numerical Response&nbsp;

Explanation

The RMSE can be calculated by first computing the SSE:

SSE = sum((PredTest1-FluTest$ILI)^2)

and then dividing by the number of observations and taking the square root:

RMSE = sqrt(SSE / nrow(FluTest))

Alternatively, you could use the following command:

sqrt(mean((PredTest1-FluTest$ILI)^2)).

CheckShow Answer

Problem 4.1 - Training a Time Series Model
------------------------------------------

The observations in this dataset are consecutive weekly measurements of the dependent and independent variables. This sort of dataset is called a "time series." Often, statistical models can be improved by predicting the current value of the dependent variable using the value of the dependent variable from earlier weeks. In our models, this means we will predict the ILI variable in the current week using values of the ILI variable from previous weeks.

First, we need to decide the amount of time to lag the observations. Because the ILI variable is reported with a 1- or 2-week lag, a decision maker cannot rely on the previous week's ILI value to predict the current week's value. Instead, the decision maker will only have data available from 2 or more weeks ago. We will build a variable called ILILag2 that contains the ILI value from 2 weeks before the current observation.

To do so, we will use the "zoo" package, which provides a number of helpful methods for time series models. While many functions are built into R, you need to add new packages to use some functions. New packages can be installed and loaded easily in R, and we will do this many times in this class. Run the following two commands to install and load the zoo package. In the first command, you will be prompted to select a CRAN mirror to use for your download. Select a mirror near you geographically.

install.packages("zoo")

library(zoo)

After installing and loading the zoo package, run the following commands to create the ILILag2 variable in the training set:

ILILag2 = lag(zoo(FluTrain$ILI), -2, na.pad=TRUE)

FluTrain$ILILag2 = coredata(ILILag2)

In these commands, the value of -2 passed to lag means to return 2 observations before the current one; a positive value would have returned future observations. The parameter na.pad=TRUE means to add missing values for the first two weeks of our dataset, where we can't compute the data from 2 weeks earlier.

How many values are missing in the new ILILag2 variable?

Exercise 15

&nbsp;Numerical Response&nbsp;

Explanation

This can be read from the output of summary(FluTrain$ILILag2).

CheckShow Answer

Problem 4.2 - Training a Time Series Model
------------------------------------------

Use the plot() function to plot the log of ILILag2 against the log of ILI. Which best describes the relationship between these two variables?

Exercise 16

&nbsp;There is a strong negative relationship between log(ILILag2) and log(ILI).&nbsp;

&nbsp;This is a weak or no relationship between log(ILILag2) and log(ILI)&nbsp;

&nbsp;There is a strong positive relationship between log(ILILag2) and log(ILI).&nbsp;

Explanation

From plot(log(FluTrain$ILILag2), log(FluTrain$ILI)), we observe a strong positive relationship.

CheckShow Answer

Problem 4.3 - Training a Time Series Model
------------------------------------------

Train a linear regression model on the FluTrain dataset to predict the log of the ILI variable using the Queries variable as well as the log of the ILILag2 variable. Call this model FluTrend2.

Which coefficients are significant at the p=0.05 level in this regression model? (Select all that apply.)

Exercise 17

&nbsp;Intercept&nbsp;

&nbsp;Queries&nbsp;

&nbsp;log(ILILag2)&nbsp;

What is the R^2 value of the FluTrend2 model?

Exercise 18

&nbsp;Numerical Response&nbsp;

Explanation

The following code builds and summarizes the FluTrend2 model:

FluTrend2 = lm(log(ILI)~Queries+log(ILILag2), data=FluTrain)

summary(FluTrend2)

As can be seen, all three coefficients are highly significant, and the R^2 value is 0.9063.

CheckShow Answer

Problem 4.4 - Training a Time Series Model
------------------------------------------

On the basis of R-squared value and significance of coefficients, which statement is the most accurate?

Exercise 19

&nbsp;Due to overfitting, FluTrend2 is a weaker model then FluTrend1 on the training set.&nbsp;

&nbsp;FluTrend2 is about the same quality as FluTrend1 on the training set.&nbsp;

&nbsp;FluTrend2 is a stronger model than FluTrend1 on the training set.&nbsp;

Explanation

Moving from FluTrend1 to FluTrend2, in-sample R^2 improved from 0.709 to 0.9063, and the new variable is highly significant. As a result, there is no sign of overfitting, and FluTrend2 is superior to FluTrend1 on the training set.

CheckShow Answer

Problem 5.1 - Evaluating the Time Series Model in the Test Set
--------------------------------------------------------------

So far, we have only added the ILILag2 variable to the FluTrain data frame. To make predictions with our FluTrend2 model, we will also need to add ILILag2 to the FluTest data frame (note that adding variables before splitting into a training and testing set can prevent this duplication of effort).

Modify the code from the previous subproblem to add an ILILag2 variable to the FluTest data frame. How many missing values are there in this new variable?

Exercise 20

&nbsp;Numerical Response&nbsp;

Explanation

We can add the new variable with:

ILILag2 = lag(zoo(FluTest$ILI), -2, na.pad=TRUE)

FluTest$ILILag2 = coredata(ILILag2)

From summary(FluTest$ILILag2), we can see that we're missing two values of the new variable.

CheckShow Answer

Problem 5.2 - Evaluating the Time Series Model in the Test Set
--------------------------------------------------------------

In this problem, the training and testing sets are split sequentially -- the training set contains all observations from 2004-2011 and the testing set contains all observations from 2012. There is no time gap between the two datasets, meaning the first observation in FluTest was recorded one week after the last observation in FluTrain. From this, we can identify how to fill in the missing values for the ILILag2 variable in FluTest.

Which value should be used to fill in the ILILag2 variable for the first observation in FluTest?

Exercise 21

&nbsp;The ILI value of the second-to-last observation in the FluTrain data frame.&nbsp;

&nbsp;The ILI value of the last observation in the FluTrain data frame.&nbsp;

&nbsp;The ILI value of the first observation in the FluTest data frame.&nbsp;

&nbsp;The ILI value of the second observation in the FluTest data frame.&nbsp;

Explanation

The time two weeks before the first week of 2012 is the second-to-last week of 2011. This corresponds to the second-to-last observation in FluTrain.

Which value should be used to fill in the ILILag2 variable for the second observation in FluTest?

Exercise 22

&nbsp;The ILI value of the second-to-last observation in the FluTrain data frame.&nbsp;

&nbsp;The ILI value of the last observation in the FluTrain data frame.&nbsp;

&nbsp;The ILI value of the first observation in the FluTest data frame.&nbsp;

&nbsp;The ILI value of the second observation in the FluTest data frame.&nbsp;

Explanation

The time two weeks before the second week of 2012 is the last week of 2011. This corresponds to the last observation in FluTrain.

CheckShow Answer

Problem 5.3 - Evaluating the Time Series Model in the Test Set
--------------------------------------------------------------

Fill in the missing values for ILILag2 in FluTest. In terms of syntax, you could set the value of ILILag2 in row "x" of the FluTest data frame to the value of ILI in row "y" of the FluTrain data frame with "FluTest$ILILag2\[x\] = FluTrain$ILI\[y\]". Use the answer to the previous questions to determine the appropriate values of "x" and "y". It may be helpful to check the total number of rows in FluTrain using str(FluTrain) or nrow(FluTrain).

Explanation

From nrow(FluTrain), we see that there are 417 observations in the training set. Therefore, we need to run the following two commands:

FluTest$ILILag2\[1\] = FluTrain$ILI\[416\]

FluTest$ILILag2\[2\] = FluTrain$ILI\[417\]

What is the new value of the ILILag2 variable in the first row of FluTest?

Exercise 23

&nbsp;Numerical Response&nbsp;

Explanation

This can be read from FluTest$ILILag2\[1\].

What is the new value of the ILILag2 variable in the second row of FluTest?

Exercise 24

&nbsp;Numerical Response&nbsp;

Explanation

This can be read from FluTest$ILILag2\[2\].

CheckShow Answer

Problem 5.4 - Evaluating the Time Series Model in the Test Set
--------------------------------------------------------------

Obtain test set predictions of the ILI variable from the FluTrend2 model, again remembering to call the exp() function on the result of the predict() function to obtain predictions for ILI instead of log(ILI).

What is the test-set RMSE of the FluTrend2 model?

Exercise 25

&nbsp;Numerical Response&nbsp;

Explanation

We can obtain the test-set predictions with:

PredTest2 = exp(predict(FluTrend2, newdata=FluTest))

And then we can compute the RMSE with the following commands:

SSE = sum((PredTest2-FluTest$ILI)^2)

RMSE = sqrt(SSE / nrow(FluTest))

Alternatively, you could use the following command to compute the RMSE:

sqrt(mean((PredTest2-FluTest$ILI)^2)).

The test-set RMSE of FluTrend2 is 0.294.

CheckShow Answer

Problem 5.5 - Evaluating the Time Series Model in the Test Set
--------------------------------------------------------------

Which model obtained the best test-set RMSE?

Exercise 26

&nbsp;FluTrend1&nbsp;

&nbsp;FluTrend2&nbsp;

Explanation

The test-set RMSE of FluTrend2 is 0.294, as opposed to the 0.749 value obtained by the FluTrend1 model.

In this problem, we used a simple time series model with a single lag term. ARIMA models are a more general form of the model we built, which can include multiple lag terms as well as more complicated combinations of previous values of the dependent variable. If you're interested in learning more, check out "?arima" or the available online tutorials for these sorts of models.

CheckShow Answer

*   [BackReading Test Scores]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/assignment-2/reading-test-scores" %}})
*   [ContinueState Data]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/assignment-2/state-data" %}})