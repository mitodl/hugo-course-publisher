---
title: 3.5 Assignment 3
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: d4a650ea930c2c8c0f989b353a5a342e_assignment-3
    weight: 1100
    parent: c4464cf49ddb1a4bc78cfaa6f93b74de_logistic-regression
---
*   [<Video 5: Test Set Predictions]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/election-forecasting-predicting-the-winner-before-any-votes-are-cast-recitation/video-5-test-set-predictions" %}})
*   [3.5.1Popularity of Music Records]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/assignment-3" %}})
*   [3.5.2Predicting the Baseball World Series Champion]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/assignment-3/predicting-the-baseball-world-series-champion" %}})
*   [\\>Predicting the Baseball World Series Champion]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/assignment-3/predicting-the-baseball-world-series-champion" %}})

Popularity of Music Records
---------------------------

The music industry has a well-developed market with a global annual revenue around $15 billion. The recording industry is highly competitive and is dominated by three big production companies which make up nearly 82% of the total annual album sales.  
  
Artists are at the core of the music industry and record labels provide them with the necessary resources to sell their music on a large scale. A record label incurs numerous costs (studio recording, marketing, distribution, and touring) in exchange for a percentage of the profits from album sales, singles and concert tickets.  
  
Unfortunately, the success of an artist's release is highly uncertain: a single may be extremely popular, resulting in widespread radio play and digital downloads, while another single may turn out quite unpopular, and therefore unprofitable.  
  
Knowing the competitive nature of the recording industry, record labels face the fundamental decision problem of which musical releases to support to maximize their financial success.  
  
How can we use analytics to predict the popularity of a song? In this assignment, we challenge ourselves to predict whether a song will reach a spot in the Top 10 of the Billboard Hot 100 Chart.

Taking an analytics approach, we aim to use information about a song's properties to predict its popularity. The dataset [songs (CSV)](https://open-learning-course-data.s3.amazonaws.com/15-071-the-analytics-edge-spring-2017/0657f55b10c097853d2bee6e5186764d_songs.csv) consists of all songs which made it to the Top 10 of the Billboard Hot 100 Chart from 1990-2010 plus a sample of additional songs that didn't make the Top 10. This data comes from three sources: [Wikipedia](http://en.wikipedia.org/wiki/Billboard_Hot_100), [Billboard.com](http://www.billboard.com/), and [EchoNest](https://en.wikipedia.org/wiki/The_Echo_Nest).

The variables included in the dataset either describe the artist or the song, or they are associated with the following song attributes: time signature, loudness, key, pitch, tempo, and timbre.

Here's a detailed description of the variables:

*   **year** = the year the song was released
*   **songtitle** = the title of the song
*   **artistname** = the name of the artist of the song
*   **songID** and **artistID** = identifying variables for the song and artist
*   **timesignature** and **timesignature\_confidence** = a variable estimating the time signature of the song, and the confidence in the estimate
*   **loudness** = a continuous variable indicating the average amplitude of the audio in decibels
*   **tempo** and **tempo\_confidence** = a variable indicating the estimated beats per minute of the song, and the confidence in the estimate
*   **key** and **key\_confidence** = a variable with twelve levels indicating the estimated key of the song (C, C#, . . ., B), and the confidence in the estimate
*   **energy** = a variable that represents the overall acoustic energy of the song, using a mix of features such as loudness
*   **pitch** = a continuous variable that indicates the pitch of the song
*   **timbre\_0\_min**, **timbre\_0\_max**, **timbre\_1\_min**, **timbre\_1\_max**, . . . , **timbre\_11\_min**, and **timbre\_11\_max** = variables that indicate the minimum/maximum values over all segments for each of the twelve values in the timbre vector (resulting in 24 continuous variables)
*   **Top10** = a binary variable indicating whether or not the song made it to the Top 10 of the Billboard Hot 100 Chart (1 if it was in the top 10, and 0 if it was not)

Problem 1.1 - Understanding the Data
------------------------------------

Use the read.csv function to load the dataset "songs.csv" into R.

How many observations (songs) are there in total?

Exercise 1

&nbsp;Numerical Response&nbsp;

Explanation

First, navigate to the directory on your computer containing the file "songs.csv". You can load the dataset by using the command:

songs = read.csv("songs.csv")

Then, you can count the number of songs by using str(songs), which you can read off the first line on the output, or nrow(songs), which returns the number of rows in the data frame.

CheckShow Answer

Problem 1.2 - Understanding the Data
------------------------------------

How many songs does the dataset include for which the artist name is "Michael Jackson"?

Exercise 2

&nbsp;Numerical Response&nbsp;

Explanation

One way to compute this would be using table():

table(songs$artistname == "Michael Jackson")

We can also get this information using the dplyr package. We will first load the dplyr package:

library(dplyr)

and then filter the data frame to artistname == "Michael Jackson" and summarize the number of observations:

songs %>% filter(artistname == "Michael Jackson") %>% summarize(count = n())

CheckShow Answer

Problem 2.1 - Creating Our Prediction Model
-------------------------------------------

We wish to predict whether or not a song will make it to the Top 10. To do this, first use the filter function to split the data into a training set "SongsTrain" consisting of all the observations up to and including 2009 song releases, and a testing set "SongsTest", consisting of the 2010 song releases.

How many observations (songs) are in the training set?

Exercise 3

&nbsp;Numerical Response&nbsp;

Explanation

SongsTrain = songs %>% filter(year <= 2009)

SongsTest = songs %>% filter(year == 2010)

The training set has 7201 observations, which can be found by looking at the structure with str(SongsTrain) or by typing nrow(SongsTrain).

CheckShow Answer

Problem 2.2 - Creating our Prediction Model
-------------------------------------------

In this problem, our outcome variable is "Top10" - we are trying to predict whether or not a song will make it to the Top 10 of the Billboard Hot 100 Chart. Since the outcome variable is binary, we will build a logistic regression model.

We will only use the variables in our dataset that describe the numerical attributes of the song in our logistic regression model. So we won't use the variables "year", "songtitle", "artistname", "songID", or "artistID".

We have seen in the lecture that, to build the logistic regression model, we would normally explicitly input the formula including all the independent variables in R. However, in this case, this is a tedious amount of work since we have a large number of independent variables.

There is a nice trick to avoid doing so by using the symbol "." that represents all the remaining variables. You can follow the steps below:

**Step 1:** we want to exclude some of the variables in our dataset from being used as independent variables ("year", "songtitle", "artistname", "songID", and "artistID"). To do this, we can use the following trick. First define a vector of variable names called nonvars - these are the variables that we won't use in our model.

nonvars = c("year", "songtitle", "artistname", "songID", "artistID")

To remove these variables from your training and testing sets, type the following commands in your R console:

SongsTrain = SongsTrain\[ , !(names(SongsTrain) %in% nonvars) \]

SongsTest = SongsTest\[ , !(names(SongsTest) %in% nonvars) \]

**Step 2:** build a logistic regression model to predict Top10 using the training data. We can now use "." in place of enumerating all the remaining independent variables in the following way:

SongsLog1 = glm(Top10 ~ ., data=SongsTrain, family=binomial)

(Also, keep in mind that you can choose to put quotes around binomial, or leave out the quotes. R can understand this argument either way.)

Looking at the summary of your model, excluding the intercept, how many variables are significant at the 5% significance level?

Exercise 4

&nbsp;Numerical Response&nbsp;

Explanation

To answer this question, you first need to run the three given commands to remove the variables that we won't use in the model from the datasets:

nonvars = c("year", "songtitle", "artistname", "songID", "artistID")

SongsTrain = SongsTrain\[ , !(names(SongsTrain) %in% nonvars) \]

SongsTest = SongsTest\[ , !(names(SongsTest) %in% nonvars) \]

Then, you can create the logistic regression model with the following command:

SongsLog1 = glm(Top10 ~ ., data=SongsTrain, family=binomial)

Looking at the stars on the summary(SongsLog1) output, we can see that 20 variables have at least one star next to the p-values, which represents significance at the 5% level.

CheckShow Answer

Problem 2.3 - Creating Our Prediction Model
-------------------------------------------

Let's now think about the variables in our dataset related to the confidence of the time signature, key, and tempo (timesignature\_confidence, key\_confidence, and tempo\_confidence). Our model seems to indicate that these confidence variables are significant (rather than the variables timesignature, key, and tempo themselves). What does the model suggest?

Exercise 5

&nbsp;The lower our confidence about time signature, key and tempo, the more likely the song is to be in the Top 10&nbsp;

&nbsp;The higher our confidence about time signature, key and tempo, the more likely the song is to be in the Top 10&nbsp;

Explanation

If you look at the output summary(SongsLog1), where SongsLog1 is the name of your logistic regression model, you can see that the coefficient estimates for the confidence variables (timesignature\_confidence, key\_confidence, and tempo\_confidence) are positive. This means that higher confidence leads to a higher predicted probability of a Top 10 hit.

CheckShow Answer

Problem 2.4 - Creating Our Prediction Model
-------------------------------------------

In general, if the confidence is low for the time signature, tempo, and key, then the song is more likely to be complex. What does our model suggest in terms of complexity?

Exercise 6

&nbsp;Mainstream listeners tend to prefer more complex songs&nbsp;

&nbsp;Mainstream listeners tend to prefer less complex songs&nbsp;

Explanation

Since the coefficient values for timesignature\_confidence, tempo\_confidence, and key\_confidence are all positive, lower confidence leads to a lower predicted probability of a song being a hit. So mainstream listeners tend to prefer less complex songs.

CheckShow Answer

Problem 2.5 - Creating Our Prediction Model
-------------------------------------------

Songs with heavier instrumentation tend to be louder (have higher values in the variable "loudness").

By inspecting the coefficient of the variable "loudness", what does our model suggest?

Exercise 7

&nbsp;Mainstream listeners prefer songs with heavy instrumentation&nbsp;

&nbsp;Mainstream listeners prefer songs with light instrumentation&nbsp;

Explanation

The coefficient estimate for loudness is positive, meaning that mainstream listeners prefer louder songs, which are those with heavier instrumentation.

CheckShow Answer

Problem 3.1 - Validating Our Model
----------------------------------

Make predictions on the test set using our model. What is the accuracy of our model on the test set, using a threshold of 0.45? (Compute the accuracy as a number between 0 and 1.)

To get the accuracy after you make the predictions, you can use the table(variable1, variable2) command to generate a summary table that counts the number of observations for each of the possible combination of values in variable1 and variable2. You can also do so by using the group\_by and summarize commands in dplyr package.

Exercise 8

&nbsp;Numerical Response&nbsp;

Explanation

You can make predictions on the test set by using the command:

testPredict = predict(SongsLog1, newdata=SongsTest, type="response")

Then, you can create a confusion matrix with a threshold of 0.45 by using the table command:

table(SongsTest$Top10, testPredict >= 0.45)

Or, alternatively, use the group\_by and summarize functions in dplyr package:

SongsTest$Pred = testPredict >= 0.45

SongsTest %>% group\_by(Top10, Pred) %>% summarize(count = n())

The accuracy of the model is (309+15)/(309+15+44+5) = 0.8686

CheckShow Answer

Problem 3.2 - Validating Our Model
----------------------------------

Let's check if there's any incremental benefit in using our model instead of a baseline model. Given the difficulty of guessing which song is going to be a hit, an easier model would be to pick the most frequent outcome (a song is not a Top 10 hit) for all songs. What would the accuracy of the baseline model be on the test set? (Give your answer as a number between 0 and 1.)

Exercise 9

&nbsp;Numerical Response&nbsp;

Explanation

You can compute the baseline accuracy by summarizing the outcome variable in the test set. One way to do this is with table():

table(SongsTest$Top10)

Another approach would be to use dplyr:

SongsTest %>% group\_by(Top10) %>% summarize(count = n())

The baseline model would get 314 observations correct, and 59 wrong, for an accuracy of 314/(314+59) = 0.8418231.

CheckShow Answer

Problem 3.3 - Validating Our Model
----------------------------------

What is the True Positive Rate of our model on the test set, using a threshold of 0.45?

Exercise 10

&nbsp;Numerical Response&nbsp;

What is the False Positive Rate of our model on the test set, using a threshold of 0.45?

Exercise 11

&nbsp;Numerical Response&nbsp;

Explanation

Using the confusion matrix we obtained before using either table or group\_by/summarize:

table(SongsTest$Top10, testPredict >= 0.45)

We can compute the True Positive Rate to be the number of correctly identified Top10 songs divided by the total number of Top10 songs: 15/(15+44) = 0.2542373, and the False Positive Rate to be the number of non-Top10 songs that were identified as Top10 divided by the total number of non-Top10 songs: 5/(309+5) = 0.01592357.

CheckShow Answer

*   [BackVideo 5: Test Set Predictions]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/election-forecasting-predicting-the-winner-before-any-votes-are-cast-recitation/video-5-test-set-predictions" %}})
*   [ContinuePredicting the Baseball World Series Champion]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/logistic-regression/assignment-3/predicting-the-baseball-world-series-champion" %}})