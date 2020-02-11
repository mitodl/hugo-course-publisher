---
title: '6.2 Recommendations Worth a Million: An Introduction to Clustering '
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: 47a1cfac748d6647732ef8b91e90cc4f_quick-question-466
    weight: 240
---
*   [<Video 6: Getting the Data]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-6-getting-the-data" %}})
*   [6.2.1Video 1: Introduction to Netflix]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering" %}})
*   [6.2.2Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-433" %}})
*   [6.2.3Video 2: Recommendation Systems]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-2-recommendation-systems" %}})
*   [6.2.4Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-438" %}})
*   [6.2.5Video 3: Movie Data and Clustering]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-3-movie-data-and-clustering" %}})
*   [6.2.6Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-446" %}})
*   [6.2.7Video 4: Computing Distances]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-4-computing-distances" %}})
*   [6.2.8Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-451" %}})
*   [6.2.9Video 5: Hierarchical Clustering]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-5-hierarchical-clustering" %}})
*   [6.2.10Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-458" %}})
*   [6.2.11Video 6: Getting the Data]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-6-getting-the-data" %}})
*   [6.2.12Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-466" %}})
*   [6.2.13Video 7: Hierarchical Clustering in R]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-7-hierarchical-clustering-in-r" %}})
*   [6.2.14Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-476" %}})
*   [6.2.15Video 8: The Analytics Edge of Recommendation Systems]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-8-the-analytics-edge-of-recommendation-systems" %}})
*   [\\>Video 7: Hierarchical Clustering in R]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-7-hierarchical-clustering-in-r" %}})

Quick Question
--------------

Using the table function in R, please answer the following questions about the dataset "movies".

How many movies are classified as comedies?

Exercise 1

&nbsp;Numerical Response&nbsp;

How many movies are classified as westerns?

Exercise 2

&nbsp;Numerical Response&nbsp;

How many movies are classified as romance AND drama?

Exercise 3

&nbsp;Numerical Response&nbsp;

Explanation

You can answer these questions by using the following commands:

table(movies$Comedy)

table(movies$Western)

table(movies$Romance, movies$Drama)

CheckShow Answer

*   [BackVideo 6: Getting the Data]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-6-getting-the-data" %}})
*   [ContinueVideo 7: Hierarchical Clustering in R]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-7-hierarchical-clustering-in-r" %}})