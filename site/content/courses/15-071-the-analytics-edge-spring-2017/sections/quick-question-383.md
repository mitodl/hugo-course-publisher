---
title: '5.2 Turning Tweets into Knowledge: An Introduction to Text Analytics'
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: quick-question-383
    weight: 1650
---
*   [<Video 5: Pre-Processing in R]({{< ref "video-5-pre-processing-in-r" >}})
*   [5.2.1Video 1: Twitter]({{< ref "turning-tweets-into-knowledge-an-introduction-to-text-analytics" >}})
*   [5.2.2Video 2: Text Analytics]({{< ref "video-2-text-analytics" >}})
*   [5.2.3Quick Question]({{< ref "quick-question-362" >}})
*   [5.2.4Video 3: Creating the Dataset]({{< ref "video-3-creating-the-dataset" >}})
*   [5.2.5Quick Question]({{< ref "quick-question-367" >}})
*   [5.2.6Video 4: Bag of Words]({{< ref "video-4-bag-of-words" >}})
*   [5.2.7Quick Question]({{< ref "quick-question-373" >}})
*   [5.2.8Video 5: Pre-Processing in R]({{< ref "video-5-pre-processing-in-r" >}})
*   [5.2.9Quick Question]({{< ref "quick-question-383" >}})
*   [5.2.10Video 6: Bag of Words in R]({{< ref "video-6-bag-of-words-in-r" >}})
*   [5.2.11Quick Question]({{< ref "quick-question-390" >}})
*   [5.2.12Video 7: Predicting Sentiment]({{< ref "video-7-predicting-sentiment" >}})
*   [5.2.13Quick Question]({{< ref "quick-question-395" >}})
*   [5.2.14Video 8: Conclusion]({{< ref "video-8-conclusion" >}})
*   [\\>Video 6: Bag of Words in R]({{< ref "video-6-bag-of-words-in-r" >}})

Quick Question
--------------

Given a corpus in R, how many commands do you need to run in R to clean up the irregularities (removing capital letters and punctuation)?

Exercise 1

&nbsp;Numerical Response&nbsp;

How many commands do you need to run to stem the document?

Exercise 2

&nbsp;Numerical Response&nbsp;

Explanation

In R, you can clean up the irregularities with two lines:

corpus = tm\_map(corpus, tolower)

corpus = tm\_map(corpus, removePunctuation)

And you can stem the document with one line:

corpus = tm\_map(corpus, stemDocument)

CheckShow Answer

*   [BackVideo 5: Pre-Processing in R]({{< ref "video-5-pre-processing-in-r" >}})
*   [ContinueVideo 6: Bag of Words in R]({{< ref "video-6-bag-of-words-in-r" >}})