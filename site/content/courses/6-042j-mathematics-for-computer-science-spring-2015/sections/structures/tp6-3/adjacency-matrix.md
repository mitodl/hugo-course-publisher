---
title: '2.5  Digraphs: Walks & Paths'
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: e2165a1169e6c54fcd9ff1a57a2ef044_adjacency-matrix
    weight: 170
---
*   [<Longest Path](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp6-3/vertical-588ea67bd5d7)
*   [2.5.1Digraphs: Walks & Paths: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp6-3)
*   [2.5.2Walks and Paths](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp6-3/vertical-5a67aa9a3a6d)
*   [2.5.3Digraphs: Connected Vertices: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp6-3/vertical-2c95b0b170e2)
*   [2.5.4Longest Path](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp6-3/vertical-588ea67bd5d7)
*   [2.5.5Adjacency Matrix](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp6-3/adjacency-matrix)
*   [2.5.6Counting Paths](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp6-3/counting-paths)
*   [\>Counting Paths](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp6-3/counting-paths)

Adjacency Matrix
----------------

Suppose we have an adjacency matrix A representation of a directed graph G.

Which of the following must be true for any adjacency matrix, regardless of the underlying graph?

Some matrix definitions:  

\\(A^T\\) denotes the transpose of a matrix \\(A\\), such that if \\(A\\) has \\(m\\) rows and \\(n\\) columns, \\(A^T\\) has \\(n\\) and \\(m\\) columns. Additionally, the value of the cell \\((i, j)\\) in \\(A\\) becomes the value of the cell \\((j, i)\\) in \\(A^T\\).

Exercise 1

&nbsp;\\(A = A^T\\)&nbsp;

&nbsp;A cell \\((i, j)\\) in the matrix \\(A^2\\) has non-zero value iff there is a length 2 path between the \\(i\\)-th and \\(j\\)-th vertices.&nbsp;

&nbsp;Every row in \\(A\\) must be different.&nbsp;

For an undirected graph, the transpose of a matrix is itself because having an edge from \\(i\\) to \\(j\\) is equivalent to having an edge from \\(i\\) to \\(j\\). However, for directed graphs, this is not the case because these two edges would point in opposite directions.  
There is a length 2 path iff there exists some k such that \\(i, k, j\\) are connected iff exists index k such that \\((i, k) = 1\\) and \\((k, j) = 1\\) iff row \\(i\\) times column \\(j\\) is not 0 iff In \\(A^2, (i, j)\\) is not zero.  
If two rows in an adjacency matrix are the same, then this just represents that two vertices have edges leading to the same set of vertices.

CheckShow Answer

*   [BackLongest Path](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp6-3/vertical-588ea67bd5d7)
*   [ContinueCounting Paths](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp6-3/counting-paths)