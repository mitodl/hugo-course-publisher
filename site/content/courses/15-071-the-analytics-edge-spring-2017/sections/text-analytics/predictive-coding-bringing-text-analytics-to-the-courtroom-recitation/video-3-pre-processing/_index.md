---
title: '5.4 Predictive Coding: Bringing Text Analytics to the Courtroom  (Recitation)'
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: 1924c416bffb731966228542170e6c66_video-3-pre-processing
    weight: 1850
    parent: >-
      d4b1a3b942ed98d194feb3777ba22595_predictive-coding-bringing-text-analytics-to-the-courtroom-recitation
---
*   [<Video 2: The Data]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-2-the-data-2" %}})
*   [5.4.1Welcome to Recitation 5]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation" %}})
*   [5.4.2Video 1: The Story of Enron]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-1-the-story-of-enron" %}})
*   [5.4.3Video 2: The Data]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-2-the-data-2" %}})
*   [5.4.4Video 3: Pre-Processing]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-3-pre-processing" %}})
*   [5.4.5Video 4: Bag of Words]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-4-bag-of-words-2" %}})
*   [5.4.6Video 5: Building Models]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-5-building-models" %}})
*   [5.4.7Video 6: Evaluating the Model]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-6-evaluating-the-model" %}})
*   [5.4.8Video 7: The ROC Curve]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-7-the-roc-curve" %}})
*   [5.4.9Video 8: Predictive Coding Today]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-8-predictive-coding-today" %}})
*   [\\>Video 4: Bag of Words]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-4-bag-of-words-2" %}})

Video 3: Pre-Processing
-----------------------

**Important Note:** In the following video, we ask you to use the "tm" package to perform the pre-processing steps. Due to function changes that occurred after this video was recorded, you will need to run the following command immediately after converting all of the words to lowercase letters (it converts all documents in the corpus to the PlainTextDocument type):

corpus \= tm\_map(corpus, PlainTextDocument)

Then you can continue with the R commands as they are in the video.

If the code length(stopwords("english")) does not return 174 for you, then please run the line of code in [stopwords (TXT) file](./resolveuid/fe588eb69d663b5e0fbdf6c8a2564dfd), which will store the standard stop words in a variable called sw. When removing stop words, use tm\_map(corpus, removeWords, sw) instead of tm\_map(corpus, removeWords, stopwords("english")). 

*   [BackVideo 2: The Data]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-2-the-data-2" %}})
*   [ContinueVideo 4: Bag of Words]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-4-bag-of-words-2" %}})