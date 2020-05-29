---
title: '2.5  Digraphs: Walks & Paths'
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 7126aa7b0db7c84dfd9dd2a73a6571a2
    weight: 1290
    parent: 711aeeca155265f221e5af2643f1a05f
---
*   [<Adjacency Matrix]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/adjacency-matrix" %}})
*   [2.5.1Digraphs: Walks & Paths: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/_index.md" %}})
*   [2.5.2Walks and Paths]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/vertical-5a67aa9a3a6d" %}})
*   [2.5.3Digraphs: Connected Vertices: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/vertical-2c95b0b170e2" %}})
*   [2.5.4Longest Path]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/vertical-588ea67bd5d7" %}})
*   [2.5.5Adjacency Matrix]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/adjacency-matrix" %}})
*   [2.5.6Counting Paths]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/counting-paths" %}})
*   [\\>Directed Acyclic Graphs (DAGs) & Scheduling]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp7-1/_index.md" %}})

Counting Paths
--------------

Suppose we have a complete directed graph of 5 vertices with no self-edge.

That is, for any \\(i, j = 1, 2, 3, 4, 5\\), edge \\((v\_i, v\_j)\\) exists iff \\(i \\neq j\\).

How many edges are in the graph?:

Exercise 1

&nbsp;Numerical Response&nbsp;

What is the length of the longest path not containing a cycle?

Exercise 2

&nbsp;Numerical Response&nbsp;

How many paths are there that satisfy the previous condition?

Exercise 3

&nbsp;Numerical Response&nbsp;

Explanation

If every edge were connected, there would be \\(5\\cdot 5 = 25\\) edges. However, there are no self-edges, so we've over-counted by \\(5\\) and there are \\(20\\) total.

\\(5\\) unique vertices can be connected by \\(4\\) edges, so a \\(5\\)th edge is guaranteed to create a cycle.

Visting the \\(5\\) vertices in any order works. Thus, there are \\(5\\) possibilities for the start vertex, \\(4\\) for the second, \\(3\\) for the third, \\(2\\) for the fourth, and the final one is whatever's left. This gives \\(5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120\\) possible paths.

CheckShow Answer

*   [BackAdjacency Matrix]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/adjacency-matrix" %}})
*   [ContinueDirected Acyclic Graphs (DAGs) & Scheduling]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp7-1/_index.md" %}})