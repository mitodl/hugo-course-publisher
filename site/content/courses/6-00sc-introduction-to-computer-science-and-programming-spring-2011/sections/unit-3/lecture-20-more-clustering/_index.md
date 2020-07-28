---
title: More Clustering
course_id: 6-00sc-introduction-to-computer-science-and-programming-spring-2011
menu:
  6-00sc-introduction-to-computer-science-and-programming-spring-2011:
    identifier: fc440c95aa3e3ffa8cff14461dc75eee
    type: section
    layout: section
    name: More Clustering
    weight: 280
    parent: 82c1509981b270b9823bc741f08c9b32
type: courses
layout: videogallery
---
« [Previous]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/_index.md" %}}) | [Next]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/lecture-21-using-graphs-to-model-problems-part-1/_index.md" %}}) »

Session Overview
----------------

| ![ses-20.jpg](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/83badeff35048cca4372f5bd8d5d19b8_ses-20.jpg) | {{< br >}}{{< br >}}This lecture covers hierarchical clustering and introduces k-means clustering.{{< br >}}{{< br >}}_This image is from the [Wikimedia Commons](http://en.wikipedia.org/wiki/File:Manhattan_distance.svg). This image is in the public domain._{{< br >}}{{< br >}} 

Session Activities
------------------

### Lecture Videos

*   {{< youtube Iu4xTLKcbPo >}}

> ### About this Video
> 
> Topics covered: Feature vectors, scaling, k-means clustering.
> 
> ### Resources
> 
> *   [Lecture code handout (PDF)]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/lecture-20-more-clustering/MIT6_00SCS11_lec20" %}})
> *   [Lecture code (PY)](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/5c2ca1161808cbe2ec41f8000773ad78_lec20.py)
> *   [Lecture slides (PDF)]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/lecture-20-more-clustering/MIT6_00SCS11_lec20_slides" %}})
> *   [Lecture data files (ZIP)](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/825878e7db0c30e1d516d3281c251d4c_lec20_data.zip) (This ZIP file contains: 3 .txt files.)

### Recitation Videos

*   {{< youtube UHRhUufAlE4 >}}

> ### About this Video
> 
> Topics covered: Unsupervised learning, k-means clustering, distance metric, cluster merging, centroid, k-mean error, holdout set, k value significance, features of k-means clustering, merits and disadvantages of types of clustering.

Check Yourself
--------------

How do we use nominal (non-numeric or noncontinuous) categories as features?

› _View/hide answer_

Convert each possible value to a real number.

Why do we need to use scaling (normalization)?

› _View/hide answer_

To indicate the relative importance of each feature.

How does k-means clustering work?

› _View/hide answer_

A number 'k' points are chosen, randomly or otherwise, to be the initial centroids; all other points are assigned to their nearest centroid. A new, better centroid is then chosen for each cluster, and we rinse and repeat until the difference between our current set of clusters and the previous set is insignificant.

Problem Sets
------------

### Problem Set 9: Schedule Optimization (Due)

At an institute of higher education that shall remain nameless, it used to be the case that a human adviser would help each student formulate a list of subjects that would meet the student's objectives. However, because of financial troubles, the Institute has decided to replace human advisers with software. Given the amount of work a student wants to do, the program returns a list of subjects that maximizes the amount of value. The goal of this problem set is to implement optimization algorithms.

*   [Instructions (PDF)]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/lecture-20-more-clustering/MIT6_00SCS11_ps9" %}})
*   [Code Files (ZIP)](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/6dcb99ce9c44a3b564dc9d6177f4a831_ps9.zip) (This ZIP file contains: 2 .py files and 2 .txt files.)

_Note: Solutions are not available for this assignment._

### Problem Set 10 (Assigned)

Problem set 10 is assigned in this session.  The instructions and solutions can be found on the session page where it is due, Lecture 22 [Using Graphs to Model Problems, Part 2]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/lecture-22-using-graphs-to-model-problems-part-2/_index.md" %}}).

« [Previous]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/_index.md" %}}) | [Next]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/lecture-21-using-graphs-to-model-problems-part-1/_index.md" %}}) »