---
title: 2.8  Degrees & Isomorphism
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: vertical-0403a1f6fa4c
    weight: 1450
---
*   [< Degrees & Isomorphism](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-2)
*   [2.8.1Degree: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-2)
*   [2.8.2Counting Degrees & Edges](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-2/vertical-0403a1f6fa4c)
*   [2.8.3Isomorphism: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-2/vertical-4cdac51413fd)
*   [2.8.4Isomorphism](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-2/vertical-206635abfb7b)
*   [2.8.5Extreme Graphs](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-2/vertical-0d59158da590)
*   [2.8.6Isomorphic Graphs](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-2/vertical-b30a643c515e)
*   [2.8.7Non-Isomorphic Graphs](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-2/vertical-3c93d1aadcac)
*   [\>Isomorphism: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-2/vertical-4cdac51413fd)

Counting Degrees & Edges
------------------------

  

1.  How many edges does a graph have if the degrees of its vertices are 4, 3, 3, 2, and 2?
    
    Exercise 1
    
    &nbsp;Numerical Response&nbsp;
    
    In every graph, the sum of the degrees equals twice the number of edges. Since 4+3+3+2+2 = 14, we have 7 edges.
    
2.  Which of the following must be true for any simple graph \\(G\\)?
    
    Exercise 2
    
    &nbsp;The sum of the degree of every vertex in \\(G\\) is even.&nbsp;
    
    &nbsp;There are an even number of vertices with odd degree.&nbsp;
    
    &nbsp;There are an even number of vertices with even degree.&nbsp;
    
    The degree sum must be even by the Handshaking Lemma.
    
    Suppose we had a graph with an odd number of vertices with odd degree. Then by the Handshaking Lemma, the total degree would be the sum of an odd and an even number, giving an odd number. Contradiction!
    
    Consider the complete graph \\(K\_5\\). Each of the 5 vertices has degree 4.
    
    CheckShow Answer
    

*   [Back Degrees & Isomorphism](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-2)
*   [ContinueIsomorphism: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-2/vertical-4cdac51413fd)