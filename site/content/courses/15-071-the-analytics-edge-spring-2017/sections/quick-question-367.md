---
title: '5.2 Turning Tweets into Knowledge: An Introduction to Text Analytics'
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: quick-question-367
    weight: 1610
---
*   [<Video 3: Creating the Dataset]({{% ref "video-3-creating-the-dataset" %}})
*   [5.2.1Video 1: Twitter]({{% ref "turning-tweets-into-knowledge-an-introduction-to-text-analytics" %}})
*   [5.2.2Video 2: Text Analytics]({{% ref "video-2-text-analytics" %}})
*   [5.2.3Quick Question]({{% ref "quick-question-362" %}})
*   [5.2.4Video 3: Creating the Dataset]({{% ref "video-3-creating-the-dataset" %}})
*   [5.2.5Quick Question]({{% ref "quick-question-367" %}})
*   [5.2.6Video 4: Bag of Words]({{% ref "video-4-bag-of-words" %}})
*   [5.2.7Quick Question]({{% ref "quick-question-373" %}})
*   [5.2.8Video 5: Pre-Processing in R]({{% ref "video-5-pre-processing-in-r" %}})
*   [5.2.9Quick Question]({{% ref "quick-question-383" %}})
*   [5.2.10Video 6: Bag of Words in R]({{% ref "video-6-bag-of-words-in-r" %}})
*   [5.2.11Quick Question]({{% ref "quick-question-390" %}})
*   [5.2.12Video 7: Predicting Sentiment]({{% ref "video-7-predicting-sentiment" %}})
*   [5.2.13Quick Question]({{% ref "quick-question-395" %}})
*   [5.2.14Video 8: Conclusion]({{% ref "video-8-conclusion" %}})
*   [\\>Video 4: Bag of Words]({{% ref "video-4-bag-of-words" %}})

Quick Question
--------------

For each tweet, we computed an overall score by averaging all five scores assigned by the Amazon Mechanical Turk workers. However, Amazon Mechanical Turk workers might make significant mistakes when labeling a tweet. The mean could be highly affected by this.

Which of the three alternative metrics below would best capture the typical opinion of the five Amazon Mechanical Turk workers, would be less affected by mistakes, and is well-defined regardless of the five labels?

Exercise 1

&nbsp;An overall score equal to the median (middle) score&nbsp;

&nbsp;An overall score equal to the majority score&nbsp;

&nbsp;An overall score equal to the minimum score&nbsp;

Explanation

The correct answer is the first one - the median would capture the typical opinion of the workers and tends to be less affected by significant mistakes. The majority score might not have given a score to all tweets because they might not all have a majority score (consider a tweet with scores 0, 0, 1, 1, and 2). The minimum score does not necessarily capture the typical opinion and could be highly affected by mistakes (consider a tweet with scores -2, 1, 1, 1, 1).

CheckShow Answer

*   [BackVideo 3: Creating the Dataset]({{% ref "video-3-creating-the-dataset" %}})
*   [ContinueVideo 4: Bag of Words]({{% ref "video-4-bag-of-words" %}})