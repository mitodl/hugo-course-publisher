---
title: '5.2 Turning Tweets into Knowledge: An Introduction to Text Analytics'
course_id: 15-071-the-analytics-edge-spring-2017
type: course
layout: course_section
---
*   [<Video 6: Bag of Words in R]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-6-bag-of-words-in-r" %}})
*   [5.2.1Video 1: Twitter]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/_index.md" %}})
*   [5.2.2Video 2: Text Analytics]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-2-text-analytics" %}})
*   [5.2.3Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/quick-question-362" %}})
*   [5.2.4Video 3: Creating the Dataset]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-3-creating-the-dataset" %}})
*   [5.2.5Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/quick-question-367" %}})
*   [5.2.6Video 4: Bag of Words]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-4-bag-of-words" %}})
*   [5.2.7Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/quick-question-373" %}})
*   [5.2.8Video 5: Pre-Processing in R]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-5-pre-processing-in-r" %}})
*   [5.2.9Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/quick-question-383" %}})
*   [5.2.10Video 6: Bag of Words in R]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-6-bag-of-words-in-r" %}})
*   [5.2.11Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/quick-question-390" %}})
*   [5.2.12Video 7: Predicting Sentiment]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-7-predicting-sentiment" %}})
*   [5.2.13Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/quick-question-395" %}})
*   [5.2.14Video 8: Conclusion]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-8-conclusion" %}})
*   [\\>Video 7: Predicting Sentiment]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-7-predicting-sentiment" %}})

Quick Question
--------------

In the previous video, we showed a list of all words that appear at least 20 times in our tweets. Which of the following words appear at least 100 times? Select all that apply. (HINT: use the findFreqTerms function)

Exercise 1

&nbsp;app&nbsp;

&nbsp;buy&nbsp;

&nbsp;freak&nbsp;

&nbsp;ipad&nbsp;

&nbsp;iphon&nbsp;

&nbsp;itun&nbsp;

&nbsp;like&nbsp;

&nbsp;love&nbsp;

&nbsp;new&nbsp;

&nbsp;think&nbsp;

Explanation

To answer this question, you need to run the following command in R:

findFreqTerms(frequencies, lowfreq=100)

This outputs the words that appear at least 100 times in our tweets. They are "iphon", "itun", and "new".

CheckShow Answer

*   [BackVideo 6: Bag of Words in R]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-6-bag-of-words-in-r" %}})
*   [ContinueVideo 7: Predicting Sentiment]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-7-predicting-sentiment" %}})