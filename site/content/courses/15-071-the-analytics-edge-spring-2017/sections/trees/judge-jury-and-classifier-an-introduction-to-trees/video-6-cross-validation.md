---
title: '4.2 Judge, Jury, and Classifier: An Introduction to Trees '
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: aed8634b040dd1af7abb68e999cb9c43_video-6-cross-validation
    weight: 210
---
*   [<Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/quick-question-297" %}})
*   [4.2.1Video 1: The Supreme Court]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees" %}})
*   [4.2.2Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/quick-question-253" %}})
*   [4.2.3Video 2: CART]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/video-2-cart" %}})
*   [4.2.4Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/quick-question-258" %}})
*   [4.2.5Video 3: Splitting and Predictions]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/video-3-splitting-and-predictions" %}})
*   [4.2.6Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/quick-question-267" %}})
*   [4.2.7Video 4: CART in R]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/video-4-cart-in-r" %}})
*   [4.2.8Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/quick-question-281" %}})
*   [4.2.9Video 5: Random Forests]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/video-5-random-forests" %}})
*   [4.2.10Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/quick-question-297" %}})
*   [4.2.11Video 6: Cross-Validation]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/video-6-cross-validation" %}})
*   [4.2.12Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/quick-question-306" %}})
*   [4.2.13Video 7: The Model v. The Experts]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/video-7-the-model-v-the-experts" %}})
*   [\\>Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/quick-question-306" %}})

Video 6: Cross-Validation
-------------------------

**Important Note:** In this video, we install and load two new packages so that we can perform cross-validation: "caret", and "e1071". You may need to additionally install and load the following packages for cross-validation to work on your computer: "class" and "ggplot2". If you receive an error message after trying to load caret and e1071, please try installing and loading these two additional packages.

Cross-Validation for Random Forests
-----------------------------------

You might be wondering why we used cross-validation on our CART model, but not on our random forest model. According to the creaters of the random forest algorithm, the model is not very sensitive to the parameters and therefore does not easily overfit to the training set. You can read more on [the Random Forests website](https://www.stat.berkeley.edu/~breiman/RandomForests/cc_home.htm). 

However, if you are interested in experimenting with the parameters of the random forest model more, you can read about the parameters and cross-validation for random forests in the ![This resource may not render correctly in a screen reader.](/images/inacessible.gif)[documentation for the randomForest package (PDF)](http://cran.r-project.org/web/packages/randomForest/randomForest.pdf).

*   [BackQuick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/quick-question-297" %}})
*   [ContinueQuick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/trees/judge-jury-and-classifier-an-introduction-to-trees/quick-question-306" %}})