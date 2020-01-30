---
title: '4.2 Judge, Jury, and Classifier: An Introduction to Trees '
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: quick-question-306
    weight: 1250
---
*   [<Video 6: Cross-Validation]({{< ref "video-6-cross-validation" >}})
*   [4.2.1Video 1: The Supreme Court]({{< ref "judge-jury-and-classifier-an-introduction-to-trees" >}})
*   [4.2.2Quick Question]({{< ref "quick-question-253" >}})
*   [4.2.3Video 2: CART]({{< ref "video-2-cart" >}})
*   [4.2.4Quick Question]({{< ref "quick-question-258" >}})
*   [4.2.5Video 3: Splitting and Predictions]({{< ref "video-3-splitting-and-predictions" >}})
*   [4.2.6Quick Question]({{< ref "quick-question-267" >}})
*   [4.2.7Video 4: CART in R]({{< ref "video-4-cart-in-r" >}})
*   [4.2.8Quick Question]({{< ref "quick-question-281" >}})
*   [4.2.9Video 5: Random Forests]({{< ref "video-5-random-forests" >}})
*   [4.2.10Quick Question]({{< ref "quick-question-297" >}})
*   [4.2.11Video 6: Cross-Validation]({{< ref "video-6-cross-validation" >}})
*   [4.2.12Quick Question]({{< ref "quick-question-306" >}})
*   [4.2.13Video 7: The Model v. The Experts]({{< ref "video-7-the-model-v-the-experts" >}})
*   [\\>Video 7: The Model v. The Experts]({{< ref "video-7-the-model-v-the-experts" >}})

Quick Question
--------------

Plot the tree that we created using cross-validation. How many splits does it have?

Exercise 1

&nbsp;Numerical Response&nbsp;

Explanation

If you follow the R commands from the previous video, you can plot the tree with prp(StevensTreeCV).

The tree with the best accuracy only has one split! When we were picking different minbucket parameters before, it seemed like this tree was probably not doing a good job of fitting the data. However, this tree with one split gives us the best out-of-sample accuracy. This reminds us that sometimes the simplest models are the best!

CheckShow Answer

*   [BackVideo 6: Cross-Validation]({{< ref "video-6-cross-validation" >}})
*   [ContinueVideo 7: The Model v. The Experts]({{< ref "video-7-the-model-v-the-experts" >}})