---
title: '2.5  Digraphs: Walks & Paths'
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: e35dfdb4de2be630325d55d289ab953a
    weight: 1250
    parent: 711aeeca155265f221e5af2643f1a05f
---
*   [< Digraphs: Walks & Paths]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/_index.md" %}})
*   [2.5.1Digraphs: Walks & Paths: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/_index.md" %}})
*   [2.5.2Walks and Paths]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/vertical-5a67aa9a3a6d" %}})
*   [2.5.3Digraphs: Connected Vertices: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/vertical-2c95b0b170e2" %}})
*   [2.5.4Longest Path]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/vertical-588ea67bd5d7" %}})
*   [2.5.5Adjacency Matrix]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/adjacency-matrix" %}})
*   [2.5.6Counting Paths]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/counting-paths" %}})
*   [\\>Digraphs: Connected Vertices: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/vertical-2c95b0b170e2" %}})

Walks and Paths
---------------

  

1.  Let \\(\\{a,b,c,d\\}\\) be four vertices of a directed graph.  
    Let \\(E(G) = \\{(a,b),(a,c),(a,d),(b,c),(b,d),(c,b),(c,d)\\}\\).  
    What is the length of the longest path?
    
    Exercise 1
    
    &nbsp;Numerical Response&nbsp;
    
    An example of a longest path in this graph is \\(a~(a,b)~b~(b,c)~c~(c,d)~d\\)
    
    Recall that the length of a path is defined as the number of edges the path uses.
    
    Also recall that a path cannot have repeated vertices, so we know this path is (one of) the longest because it uses all the vertices.
    
  
3.  If the sum of all the numbers in an adjacency matrix is equal to 6, what does this imply?
    
    Exercise 2
    
    &nbsp;There are 6 edges in total.There are 6 vertices in total.The sum of the numbers of edges and vertices is equal to 6.None of the above There are 6 edges in total.&nbsp;
    
    The adjacency matrix represents the edges in a digraph.
    
    CheckShow Answer
    

*   [Back Digraphs: Walks & Paths]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/_index.md" %}})
*   [ContinueDigraphs: Connected Vertices: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp6-3/vertical-2c95b0b170e2" %}})