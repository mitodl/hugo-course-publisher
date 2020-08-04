---
title: '4.2 Judge, Jury, and Classifier: An Introduction to Trees '
course_id: 15-071-the-analytics-edge-spring-2017
type: course
layout: course_section
---
*   [<Video 5: Random Forests]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/video-5-random-forests" %}})
*   [4.2.1Video 1: The Supreme Court]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/_index.md" %}})
*   [4.2.2Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/quick-question-253" %}})
*   [4.2.3Video 2: CART]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/video-2-cart" %}})
*   [4.2.4Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/quick-question-258/_index.md" %}})
*   [4.2.5Video 3: Splitting and Predictions]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/video-3-splitting-and-predictions" %}})
*   [4.2.6Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/quick-question-267" %}})
*   [4.2.7Video 4: CART in R]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/video-4-cart-in-r/_index.md" %}})
*   [4.2.8Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/quick-question-281" %}})
*   [4.2.9Video 5: Random Forests]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/video-5-random-forests" %}})
*   [4.2.10Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/quick-question-297" %}})
*   [4.2.11Video 6: Cross-Validation]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/video-6-cross-validation" %}})
*   [4.2.12Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/quick-question-306" %}})
*   [4.2.13Video 7: The Model v. The Experts]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/video-7-the-model-v-the-experts" %}})
*   [\\>Video 6: Cross-Validation]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/video-6-cross-validation" %}})

Quick Question
--------------

**Important Note:** When creating random forest models, you might still get different answers from the ones you see here even if you set the random seed. This has to do with different operating systems and the random forest implementation.

Let's see what happens if we set the seed to two different values and create two different random forest models.

First, set the seed to 100, and the re-build the random forest model, exactly like we did in the previous video (Video 5). Then make predictions on the test set. What is the accuracy of the model on the test set?

Exercise 1

&nbsp;Numerical Response&nbsp;

Now, set the seed to 200, and then re-build the random forest model, exactly like we did in the previous video (Video 5). Then make predictions on the test set. What is the accuracy of this model on the test set?

Exercise 2

&nbsp;Numerical Response&nbsp;

Explanation

You can create the models and compute the accuracies with the following commands in R:

set.seed(100)

StevensForest = randomForest(Reverse ~ Circuit + Issue + Petitioner + Respondent + LowerCourt + Unconst, data = Train, ntree=200, nodesize=25)

PredictForest = predict(StevensForest, newdata = Test)

table(Test$Reverse, PredictForest)

and then repeat it, but with set.seed(200) first.

As we see here, the random component of the random forest method can change the accuracy. The accuracy for a more stable dataset will not change very much, but a noisy dataset can be significantly affected by the random samples.

CheckShow Answer

*   [BackVideo 5: Random Forests]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/video-5-random-forests" %}})
*   [ContinueVideo 6: Cross-Validation]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/video-6-cross-validation" %}})