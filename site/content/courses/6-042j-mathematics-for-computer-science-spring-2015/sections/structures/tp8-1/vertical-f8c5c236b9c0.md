---
title: 2.10 Trees
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 2a01183caf7f54882ed32634942e321c_vertical-f8c5c236b9c0
    weight: 1680
    parent: cbeb9c37cb9ca67ccf216c0b8aeab325_tp8-1
---
*   [<Minimum Spanning Trees](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp8-1/minimum-spanning-trees)
*   [2.10.1Trees: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp8-1)
*   [2.10.2Trees: Many Definitions](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp8-1/vertical-91c45efd7596)
*   [2.10.3Tree Coloring: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp8-1/vertical-04923c3ed451)
*   [2.10.42-Colorable Trees](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp8-1/vertical-b69812803f1e)
*   [2.10.5Spanning Trees: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp8-1/vertical-2ef65242598f)
*   [2.10.6Span all the Graphs!](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp8-1/vertical-63394d192790)
*   [2.10.7Tree or Not Tree?](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp8-1/vertical-7bacea60d91e)
*   [2.10.8Leaves](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp8-1/vertical-425ace1eec7d)
*   [2.10.9Minimum Spanning Trees](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp8-1/minimum-spanning-trees)
*   [2.10.10Graph Algorithm](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp8-1/vertical-f8c5c236b9c0)
*   [\>Stable Matching](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching)

Graph Algorithm
---------------

  

The algorithm _STAR MARK_ starts with a simple undirected graph, \\(G\\), with a finite set of vertices, \\(V\\), and a set of one or more edges, \\(E\\). Initially, all edges are unmarked. Then, _STAR MARK_ proceeds to mark some of the edges, by repeatedly performing the following steps until no further step is possible:

1.  Choose any unmarked edge \\(e \\in E\\) such that there is currently no path of marked edges between the endpoints of \\(e\\).
2.  Mark edge \\(e\\).

* * *

**Preserved Invariants**  

Which of the following predicates are preserved invariants as well as hold for the start state?

Exercise 1

&nbsp;There is always an edge that has not been marked.&nbsp;

&nbsp;The marked edges form an acyclic graph.&nbsp;

&nbsp;The marked edges form a tree.&nbsp;

&nbsp;There is always a vertex not touching a marked edge.&nbsp;

1.  Predicate 1 is true for the start state, since by definition there is at least one edge, but it is _not_ preserved.
2.  Predicate 2 is a preserved invariant and vacuously holds for the start state, which has no marked edges.
3.  Predicate 3 is vacuously true for the start state, but it is _not_ preserved.
4.  Predicate 4 is true for the start state but is _not_ preserved.

* * *

**Derived Variables**  

Choose the property that best describes each of the following derived variables.

Answer with the strongest applicable property. For example, for a variable that is constant, the answer should be "constant", even though it is also both weakly increasing and weakly decreasing.

1.  \# of unmarked edges
    
    Exercise 2
    
    &nbsp; strictly increasing&nbsp;
    
    &nbsp; weakly increasing&nbsp;
    
    &nbsp; strictly decreasing&nbsp;
    
    &nbsp; weakly decreasing&nbsp;
    
    &nbsp; constant&nbsp;
    
    In every iteration, the number of unmarked edges decreases by 1.
    
2.  \# of marked edges
    
    Exercise 3
    
    &nbsp; strictly increasing&nbsp;
    
    &nbsp; weakly increasing&nbsp;
    
    &nbsp; strictly decreasing&nbsp;
    
    &nbsp; weakly decreasing&nbsp;
    
    &nbsp; constant&nbsp;
    
    In every iteration, the number of marked edges increases by 1.
    
3.  (# of unmarked edges) + (# of marked edges)
    
    Exercise 4
    
    &nbsp; strictly increasing&nbsp;
    
    &nbsp; weakly increasing&nbsp;
    
    &nbsp; strictly decreasing&nbsp;
    
    &nbsp; weakly decreasing&nbsp;
    
    &nbsp; constant&nbsp;
    
    In every iteration, the number of marked edges increases by 1 and the number of unmarked edges decreases by 1. So, their sum remains constant and is always equal to the initial number of unmarked edges in the graph.
    
4.  (# of marked edges) - (# of unmarked edges)
    
    Exercise 5
    
    &nbsp; strictly increasing&nbsp;
    
    &nbsp; weakly increasing&nbsp;
    
    &nbsp; strictly decreasing&nbsp;
    
    &nbsp; weakly decreasing&nbsp;
    
    &nbsp; constant&nbsp;
    
    In every iteration, the number of marked edges increases by 1 and the number of unmarked edges decreases by 1. So, their difference increases by 2.
    
5.  (# of connected components) in \\(G'\\) with vertices in \\(V\\) and edges in \\(M\\), where \\(M\\) is the set of marked edges
    
    Exercise 6
    
    &nbsp; strictly increasing&nbsp;
    
    &nbsp; weakly increasing&nbsp;
    
    &nbsp; strictly decreasing&nbsp;
    
    &nbsp; weakly decreasing&nbsp;
    
    &nbsp; constant&nbsp;
    
    Each newly marked edge connects 2 vertices that previously had no path of marked edges between them, so these 2 vertices belonged to different connected components of \\(G'\\), and the newly marked edge "joins" these components into one. As a result, the number of components in \\(G'\\) decreases by 1.
    
    CheckShow Answer
    

*   [BackMinimum Spanning Trees](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp8-1/minimum-spanning-trees)
*   [ContinueStable Matching](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching)