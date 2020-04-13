---
title: 'Using Graphs to Model Problems, Part 2'
course_id: 6-00sc-introduction-to-computer-science-and-programming-spring-2011
menu:
  6-00sc-introduction-to-computer-science-and-programming-spring-2011:
    identifier: d4f15989167b6654ef5ca2931d758afd
    weight: 300
    parent: 82c1509981b270b9823bc741f08c9b32
type: courses
layout: videogallery
---
« [Previous]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/lecture-21-using-graphs-to-model-problems-part-1/_index.md" %}}) | [Next]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/lecture-23-dynamic-programming/_index.md" %}}) »

Session Overview
----------------

| ![ses-22.jpg](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/c10820c3cb9de8ebb479cacc401976a3_ses-22.jpg) | {{< br >}}{{< br >}}This lecture returns to graph theory. It defines and gives examples of some classic graph problems: shortest path, shortest weighted path, cliques, and min-cut. It then shows how memoization can be used to speed up some algorithms.{{< br >}}{{< br >}}_[Centers for Disease Control and Prevention](http://www.cdc.gov/). This image is in the public domain._{{< br >}}{{< br >}} 

Session Activities
------------------

### Lecture Videos

> ### About this Video
> 
> Topics covered: Dynamic programming, optimal path, overlapping subproblems, weighted edges, specifications, restrictions, efficiency, pseudo-polynomials.
> 
> ### Resources
> 
> *   [Lecture code handout (PDF)]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/lecture-22-using-graphs-to-model-problems-part-2/MIT6_00SCS11_lec22" %}})
> *   [Lecture code (PY)](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/dc7d1685ab8b22d2f31d132be9f2ce46_lec22.py)

### Recitation Videos

> ### About this Video
> 
> Topics covered: Node graphs, nodes, edges, directed and undirected graphs, weighted edges, depth-first search, breadth-first search, graph cycles, children of nodes, shortest path, lambda functions.

Check Yourself
--------------

What is memoization?

› _View/hide answer_

Memoization involves saving work that we've done to a table, so that in the future, we can look it up rather than recalculating.

Why is memoization important?

› _View/hide answer_

It helps us avoid redoing work that we have already done, thereby making programs more efficient. It is the key idea behind the programming techniques known as dynamic programming.

Problem Sets
------------

### Problem Set 10: Clustering (Due)

Every decade, the United States Census takes place. The census collects a lot of information from the population around the United States. In this problem set, we are going to use k-means clustering to analyze this information.

*   [Instructions (PDF)]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/lecture-22-using-graphs-to-model-problems-part-2/MIT6_00SCS11_ps10" %}})
*   [Code Files (ZIP)](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/5dba9703f559a2724c9e9f50dd807550_ps10.zip) (This ZIP file contains: 1 .py file and 1 .txt file.)

_Note: Solutions are not available for this assignment._

### Problem Set 11 (Assigned)

Problem set 11 is assigned in this session. The instructions and solutions can be found on the session page where it is due, Lecture 24 [Avoiding Statistical Fallacies]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/lecture-24-avoiding-statistical-fallacies/_index.md" %}}).

« [Previous]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/lecture-21-using-graphs-to-model-problems-part-1/_index.md" %}}) | [Next]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/lecture-23-dynamic-programming/_index.md" %}}) »