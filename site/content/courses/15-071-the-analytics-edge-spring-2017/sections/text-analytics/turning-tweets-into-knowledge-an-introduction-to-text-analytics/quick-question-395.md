---
title: '5.2 Turning Tweets into Knowledge: An Introduction to Text Analytics'
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: c08c448dba2f6d4e4aa3a930b6c97c07_quick-question-395
    weight: 1690
    parent: >-
      aea3bc9c07f7364865c46fec93dd8515_turning-tweets-into-knowledge-an-introduction-to-text-analytics
---
*   [<Video 7: Predicting Sentiment]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-7-predicting-sentiment" %}})
*   [5.2.1Video 1: Twitter]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics" %}})
*   [5.2.2Video 2: Text Analytics]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-2-text-analytics" %}})
*   [5.2.3Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/quick-question-362" %}})
*   [5.2.4Video 3: Creating the Dataset]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-3-creating-the-dataset" %}})
*   [5.2.5Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/quick-question-367" %}})
*   [5.2.6Video 4: Bag of Words]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-4-bag-of-words" %}})
*   [5.2.7Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/quick-question-373" %}})
*   [5.2.8Video 5: Pre-Processing in R]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-5-pre-processing-in-r" %}})
*   [5.2.9Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/quick-question-383" %}})
*   [5.2.10Video 6: Bag of Words in R]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-6-bag-of-words-in-r" %}})
*   [5.2.11Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/quick-question-390" %}})
*   [5.2.12Video 7: Predicting Sentiment]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-7-predicting-sentiment" %}})
*   [5.2.13Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/quick-question-395" %}})
*   [5.2.14Video 8: Conclusion]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-8-conclusion" %}})
*   [\\>Video 8: Conclusion]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-8-conclusion" %}})

Quick Question
--------------

In the previous video, we used CART and Random Forest to predict sentiment. Let's see how well logistic regression does. Build a logistic regression model (using the training set) to predict "Negative" using all of the independent variables. You may get a warning message after building your model - don't worry (we explain what it means in the explanation).

Now, make predictions using the logistic regression model:

predictions = predict(tweetLog, newdata=testSparse, type="response")

where "tweetLog" should be the name of your logistic regression model. You might also get a warning message after this command, but don't worry, it is due to the same problem as the previous warning message.

Build a confusion matrix (with a threshold of 0.5) and compute the accuracy of the model. What is the accuracy?

Exercise 1

&nbsp;Numerical Response&nbsp;

Explanation

You can build a logistic regression model in R by using the command:

tweetLog = glm(Negative ~ ., data=trainSparse, family="binomial")

Then you can make predictions and build a confusion matrix with the following commands:

predictLog = predict(tweetLog, newdata=testSparse, type="response")

table(testSparse$Negative, predictLog > 0.5)

The accuracy is (254+37)/(254+46+18+37) = 0.8197183, which is worse than the baseline. If you were to compute the accuracy on the training set instead, you would see that the model does really well on the training set - this is an example of over-fitting. The model fits the training set really well, but does not perform well on the test set. A logistic regression model with a large number of variables is particularly at risk for overfitting.

Note that you might have gotten a different answer than us, because the glm function struggles with this many variables. The warning messages that you might have seen in this problem have to do with the number of variables, and the fact that the model is overfitting to the training set. We'll discuss this in more detail in the Homework Assignment.

Is this worse or better than the baseline model accuracy of 84.5%? Think about the properties of logistic regression that might make this the case!

CheckShow Answer

*   [BackVideo 7: Predicting Sentiment]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-7-predicting-sentiment" %}})
*   [ContinueVideo 8: Conclusion]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-8-conclusion" %}})