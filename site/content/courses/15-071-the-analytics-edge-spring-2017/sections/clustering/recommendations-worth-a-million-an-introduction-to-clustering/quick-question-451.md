---
title: '6.2 Recommendations Worth a Million: An Introduction to Clustering '
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: 066f79ddb024942435450a95a9fc60d8
    weight: 2030
    parent: b091b1bec85a85e060a83b7905c9dcce
---
*   [<Video 4: Computing Distances]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-4-computing-distances" %}})
*   [6.2.1Video 1: Introduction to Netflix]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/_index.md" %}})
*   [6.2.2Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-433" %}})
*   [6.2.3Video 2: Recommendation Systems]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-2-recommendation-systems" %}})
*   [6.2.4Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-438" %}})
*   [6.2.5Video 3: Movie Data and Clustering]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-3-movie-data-and-clustering" %}})
*   [6.2.6Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-446" %}})
*   [6.2.7Video 4: Computing Distances]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-4-computing-distances" %}})
*   [6.2.8Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-451" %}})
*   [6.2.9Video 5: Hierarchical Clustering]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-5-hierarchical-clustering" %}})
*   [6.2.10Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-458" %}})
*   [6.2.11Video 6: Getting the Data]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-6-getting-the-data/_index.md" %}})
*   [6.2.12Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-466" %}})
*   [6.2.13Video 7: Hierarchical Clustering in R]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-7-hierarchical-clustering-in-r/_index.md" %}})
*   [6.2.14Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-476" %}})
*   [6.2.15Video 8: The Analytics Edge of Recommendation Systems]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-8-the-analytics-edge-of-recommendation-systems" %}})
*   [\\>Video 5: Hierarchical Clustering]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-5-hierarchical-clustering" %}})

Quick Question
--------------

The movie "The Godfather" is in the genres action, crime, and drama, and is defined by the vector: (0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0)

The movie "Titanic" is in the genres action, drama, and romance, and is defined by the vector: (0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0)

What is the distance between "The Godfather" and "Titanic", using euclidean distance?

Exercise 1

&nbsp;Numerical Response&nbsp;

Explanation

The distance between these two movies is the square root of 2. They have a difference of 1 in two genres - crime and romance.

CheckShow Answer

*   [BackVideo 4: Computing Distances]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-4-computing-distances" %}})
*   [ContinueVideo 5: Hierarchical Clustering]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-5-hierarchical-clustering" %}})