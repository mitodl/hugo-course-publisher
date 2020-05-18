---
title: '5.2 Turning Tweets into Knowledge: An Introduction to Text Analytics'
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: 6cb54a0c457feabde1b7dd4d95399d8c
    weight: 1640
    parent: aea3bc9c07f7364865c46fec93dd8515
type: courses
layout: videogallery
---
*   [<Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/quick-question-373" %}})
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
*   [\\>Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/quick-question-383" %}})

Video 5: Pre-Processing in R
----------------------------

**Note:**  the dataset "tweets.csv" used in the rest of this lecture is not available to OCW users.

In the following video, we ask you to install the "tm" package to perform the pre-processing steps. Due to function changes that occurred after this video was recorded, you will need to run the following command immediately after converting all of the words to lowercase letters (it converts all documents in the corpus to the PlainTextDocument type):

corpus \= tm\_map(corpus, PlainTextDocument)

Then you can continue with the R commands as they are in the video.

Non-Standard Stop Word Lists
----------------------------

If the code length(stopwords("english")) does not return 174 for you, then please run the line of code in [stopwords (TXT) file](./resolveuid/cdd1dacd338e534632e1cc15dec3e47d), which will store the standard stop words in a variable called sw. When removing stop words, use tm\_map(corpus, removeWords, sw) instead of tm\_map(corpus, removeWords, stopwords("english")). 

Language Settings
-----------------

If you downloaded and installed R in a location other than the United States, you might encounter some issues when using the bag of words approach (since the pre-processing tasks used here depend on the English language). To fix this, you will need to type in your R console:

Sys.setlocale("LC\_ALL", "C")

This will only change the locale for your current R session, so please make a note to run this command when you are working on any lectures or exercises that might depend on the English lanugage (for example, removing stop words).

*   [BackQuick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/quick-question-373" %}})
*   [ContinueQuick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/quick-question-383" %}})