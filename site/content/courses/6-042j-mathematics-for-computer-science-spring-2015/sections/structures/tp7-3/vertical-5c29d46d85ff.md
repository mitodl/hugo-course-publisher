---
title: 2.9 Coloring & Connectivity
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 82f33672223de8357b0e01944b79495e
    weight: 1570
    parent: 109f4d41cb88fdaade16336e6c117167
---
*   [<Graph Coloring I]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp7-3/vertical-c79a8bf5b197/_index.md" %}})
*   [2.9.1Coloring: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp7-3/_index.md" %}})
*   [2.9.2Chromatic Number]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp7-3/vertical-312af3a98ad1" %}})
*   [2.9.3Connectivity: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp7-3/vertical-857c6f8a582c" %}})
*   [2.9.4k-Connectivity: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp7-3/vertical-a730aa2d96d6" %}})
*   [2.9.5k-Connected \\\[optional\\\]]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp7-3/vertical-7dbbc5839c46" %}})
*   [2.9.6Graph Coloring I]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp7-3/vertical-c79a8bf5b197/_index.md" %}})
*   [2.9.7Graph Coloring II]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp7-3/vertical-5c29d46d85ff" %}})
*   [2.9.8Connected Components in Integers]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp7-3/vertical-fef93eac28bc" %}})
*   [\\>Connected Components in Integers]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp7-3/vertical-fef93eac28bc" %}})

Graph Coloring II
-----------------

  

What is the chromatic number of an acyclic graph?

Exercise 1

&nbsp;Text Response&nbsp; Answer:2

By definition, an acyclic graph contains no cycles (and in particular, no cycles of odd length). Therefore it is bipartite. This means 2 colors are _sufficient_. Moreover, if the graph has at least one edge, 2 colors are also _necessary_. Therefore, the chromatic number of any acyclic graph is 2.

Note that the answer assumes the non-trivial case, where the graph contains at least one edge. In the trivial case where the graph contains no edges, it only has disjoint vertices and its chromatic number is 1.

CheckShow Answer

*   [BackGraph Coloring I]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp7-3/vertical-c79a8bf5b197/_index.md" %}})
*   [ContinueConnected Components in Integers]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/tp7-3/vertical-fef93eac28bc" %}})