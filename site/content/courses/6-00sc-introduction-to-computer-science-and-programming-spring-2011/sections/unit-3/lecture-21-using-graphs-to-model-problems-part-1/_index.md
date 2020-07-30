---
title: 'Using Graphs to Model Problems, Part 1'
course_id: 6-00sc-introduction-to-computer-science-and-programming-spring-2011
menu:
  6-00sc-introduction-to-computer-science-and-programming-spring-2011:
    identifier: e1b5ff21127dfb3033e398fce88c42e6
    type: section
    layout: section
    name: 'Using Graphs to Model Problems, Part 1'
    weight: 290
    parent: 82c1509981b270b9823bc741f08c9b32
type: courses
layout: videogallery
---
« [Previous]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/lecture-20-more-clustering/_index.md" %}}) | [Next]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/lecture-22-using-graphs-to-model-problems-part-2/_index.md" %}}) »

Session Overview
----------------

| ![ses-21.jpg](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/60ac9bba264e48695fd64a52189ef432_ses-21.jpg) | {{< br >}}{{< br >}}This lecture begins by finishing up k-means clustering. It then moves on to introduce the notion of modeling things using graphs (sets of nodes and edges that link them).{{< br >}}{{< br >}} 

Session Activities
------------------

### Lecture Videos

*   {{< youtube UiZlaJX3IRk >}}

> ### About this Video
> 
> Topics covered: Pseudocode, graphs, nodes, edges, adjacency matrix, adjacency list.
> 
> ### Resources
> 
> *   [Lecture code handout (PDF)]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/lecture-21-using-graphs-to-model-problems-part-1/MIT6_00SCS11_lec21" %}})
> *   [Lecture code (PY)](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/78807f07634727bc6c500f3a475542c7_lec21.py)
> *   [Lecture slides (!\[This resource may not render correctly in a screen reader.\](/images/inacessible.gif)PDF)]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/lecture-21-using-graphs-to-model-problems-part-1/MIT6_00SCS11_lec21_slides" %}})

Check Yourself
--------------

What are filters used for?

› _View/hide answer_

Filters allow us to choose which features to use for our classification, so that we are basing our inferences on the most relevant information (e.g. teeth instead of body size for dietary habits of mammals).

What is a graph?

› _View/hide answer_

A set of objects called nodes (or vertices) connected by a set of edges (or arcs).

What is a digraph?

› _View/hide answer_

A graph with unidirectional edges.

What is a weighted graph?

› _View/hide answer_

A graph in which each edge has an associated weight.

Based on the code in the handout, why is Graph a subclass of Digraph, rather than the other way around?

› _View/hide answer_

Edge has a source and destination, and is therefore unidirectional already. This makes it easier for us to treat the bidirectional case Graph (where there is an edge for each direction) as a special case of Digraph.

« [Previous]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/lecture-20-more-clustering/_index.md" %}}) | [Next]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-3/lecture-22-using-graphs-to-model-problems-part-2/_index.md" %}}) »