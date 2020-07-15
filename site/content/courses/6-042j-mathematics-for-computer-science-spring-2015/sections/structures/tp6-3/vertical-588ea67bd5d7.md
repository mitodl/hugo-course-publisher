---
title: '2.5  Digraphs: Walks & Paths'
course_id: 6-042j-mathematics-for-computer-science-spring-2015
---
*   [<Digraphs: Connected Vertices: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/vertical-2c95b0b170e2" %}})
*   [2.5.1Digraphs: Walks & Paths: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/_index.md" %}})
*   [2.5.2Walks and Paths]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/vertical-5a67aa9a3a6d" %}})
*   [2.5.3Digraphs: Connected Vertices: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/vertical-2c95b0b170e2" %}})
*   [2.5.4Longest Path]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/vertical-588ea67bd5d7" %}})
*   [2.5.5Adjacency Matrix]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/adjacency-matrix" %}})
*   [2.5.6Counting Paths]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/counting-paths" %}})
*   [\\>Adjacency Matrix]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/adjacency-matrix" %}})

Longest Path
------------

Consider some graph that has 10 edges and 16 vertices.

1.  What is the maximum possible length of a _longest path_ in this graph?
    
    Exercise 1
    
    &nbsp;Text Response&nbsp; Answer:10
    
    The maximum is obviously 10, because there are 10 edges that can be arranged in a path.
    
2.  What is the minimum possible length of a _longest path_ in this graph?
    
    Exercise 2
    
    &nbsp;Text Response&nbsp; Answer:1
    
    CheckShow Answer
    

The minimum possible longest path can't be 0, because we have a non-zero number of edges. A graph with edges from the first 10 vertices to the 11th has only length 1 paths. Hence, the minimum longest path is 1.

*   [BackDigraphs: Connected Vertices: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/vertical-2c95b0b170e2" %}})
*   [ContinueAdjacency Matrix]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/adjacency-matrix" %}})