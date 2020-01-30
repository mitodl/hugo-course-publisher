---
title: 2.11 Stable Matching
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: matching
    weight: 1800
---
*   [<Bipartite Graphs](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/bipartite-graphs-5)
*   [2.11.1Stable Matching: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching)
*   [2.11.2Matching Ritual: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/matching-ritual-video)
*   [2.11.3Derived Variables](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/derived-variables-0)
*   [2.11.4Mating Ritual](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/mating-ritual-0)
*   [2.11.5Optimal Stable Matching: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/optimal-stable-matching-video)
*   [2.11.6Boy Optimal](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/boy-optimal)
*   [2.11.7Bipartite Matching: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/bipartite-matching-video)
*   [2.11.8Bipartite Equivalence Relation](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/bipartite-equivalence-relation)
*   [2.11.9Hall's Theorem: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/hall-s-theorem-video)
*   [2.11.10Bottleneck](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/bottleneck-3)
*   [2.11.11Bipartite Graphs](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/bipartite-graphs-5)
*   [2.11.12Matching](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/matching)
*   [2.11.13Stable Matching Invariants](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/stable-matching-invariants)
*   [\>Stable Matching Invariants](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/stable-matching-invariants)

Match or No Match
-----------------

1.  A Perfect Matching
    
    Find a perfect matching the bipartite simple graph _G_ whose vertices and edges are given by the following sets:
    
    _V_ := {a,b,c,d} ∪ {1,2,3,4}  
    _E_ := {{a,1}, {a,3}, {b,2}, {c,3}, {c,4}, {d,1}, {d,2}}
    
    Input the edges of the matching in increasing alphabetic order, i.e. for each edge, you should write the letter in the pair first. Also list the edges separated by spaces. For example, if you want to answer {d, 1} and {c, 3}, type
    
    (c 3) (d 1)
    
    Exercise 1
    
    &nbsp;Text Response&nbsp; Answer:(a 3) (b 2) (c 4) (d 1)
    
    In this graph, the perfect matching happens to be unique.
    
2.  No Perfect Matching
    
      
    
    The bipartite simple graph _G_ whose vertices and edges are given by the folowing sets:
    
    _V_ := {a,b,c,d} ∪ {1,2,3,4}  
    _E_ := {{a,3}, {a,4}, {b,1}, {b,2}, {c,1}, {c,2}, {d,1}, {d,2}}
    
    does not have a perfect matching.
    
    Which of the following properties of _G_ make a perfect matching impossible?
    
    1.  The set {1,3,4} has only 2 neighbors.
    2.  The vertices a,b,c,d, on the "left" side, all have degree 2, but none of the vertices 1,2,3,4, on the "right" side, has degree 2.
    3.  The set {b,c,d} has only 2 neighbors.
    4.  _G_ has 8 edges.
    5.  The set {3,4} has only 1 neighbor.
    6.  Vertex 1 has degree 3, but each of its neighbors only has degree 2.
    7.  The set {a,b} has 4 neighbors.
    
    Give your answer as a sequence of numbers separated by some spaces  
    (e.g., "6 9"). Don't use commas or parentheses.
    
    Exercise 2
    
    &nbsp;Text Response&nbsp; Answer:3 5
    
    If we let the letters be the "girls" and the numbers be the "boys", then property 3. is a bottleneck that prevents a perfect match. If we let the letters be the "boys" and the numbers be the "girls", then property 5. is another bottleneck in _G_.
    
    Property 1. also describes a bottleneck, but it's not true :-)
    
    CheckShow Answer
    

*   [BackBipartite Graphs](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/bipartite-graphs-5)
*   [ContinueStable Matching Invariants](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/stable-matching-invariants)