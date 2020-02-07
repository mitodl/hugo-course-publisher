---
title: '4.2 Judge, Jury, and Classifier: An Introduction to Trees '
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: quick-question-297
    weight: 1230
---
*   [<Video 5: Random Forests]({{% ref "video-5-random-forests" %}})
*   [4.2.1Video 1: The Supreme Court]({{% ref "judge-jury-and-classifier-an-introduction-to-trees" %}})
*   [4.2.2Quick Question]({{% ref "quick-question-253" %}})
*   [4.2.3Video 2: CART]({{% ref "video-2-cart" %}})
*   [4.2.4Quick Question]({{% ref "quick-question-258" %}})
*   [4.2.5Video 3: Splitting and Predictions]({{% ref "video-3-splitting-and-predictions" %}})
*   [4.2.6Quick Question]({{% ref "quick-question-267" %}})
*   [4.2.7Video 4: CART in R]({{% ref "video-4-cart-in-r" %}})
*   [4.2.8Quick Question]({{% ref "quick-question-281" %}})
*   [4.2.9Video 5: Random Forests]({{% ref "video-5-random-forests" %}})
*   [4.2.10Quick Question]({{% ref "quick-question-297" %}})
*   [4.2.11Video 6: Cross-Validation]({{% ref "video-6-cross-validation" %}})
*   [4.2.12Quick Question]({{% ref "quick-question-306" %}})
*   [4.2.13Video 7: The Model v. The Experts]({{% ref "video-7-the-model-v-the-experts" %}})
*   [\\>Video 6: Cross-Validation]({{% ref "video-6-cross-validation" %}})

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

*   [BackVideo 5: Random Forests]({{% ref "video-5-random-forests" %}})
*   [ContinueVideo 6: Cross-Validation]({{% ref "video-6-cross-validation" %}})