---
title: 2.11 Stable Matching
course_id: 6-042j-mathematics-for-computer-science-spring-2015
---
*   [<Matching]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/stable-matching/matching" %}})
*   [2.11.1Stable Matching: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/stable-matching/_index.md" %}})
*   [2.11.2Matching Ritual: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/stable-matching/matching-ritual-video" %}})
*   [2.11.3Derived Variables]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/stable-matching/derived-variables-0" %}})
*   [2.11.4Mating Ritual]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/stable-matching/mating-ritual-0" %}})
*   [2.11.5Optimal Stable Matching: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/stable-matching/optimal-stable-matching-video" %}})
*   [2.11.6Boy Optimal]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/stable-matching/boy-optimal" %}})
*   [2.11.7Bipartite Matching: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/stable-matching/bipartite-matching-video" %}})
*   [2.11.8Bipartite Equivalence Relation]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/stable-matching/bipartite-equivalence-relation" %}})
*   [2.11.9Hall's Theorem: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/stable-matching/hall-s-theorem-video" %}})
*   [2.11.10Bottleneck]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/stable-matching/bottleneck-3" %}})
*   [2.11.11Bipartite Graphs]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/stable-matching/bipartite-graphs-5/_index.md" %}})
*   [2.11.12Matching]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/stable-matching/matching" %}})
*   [2.11.13Stable Matching Invariants]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/stable-matching/stable-matching-invariants" %}})
*   [\\>Counting]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/_index.md" %}})

Stable Matching Invariants
--------------------------

We are interested in invariants of the Mating Ritual described in the Notes for finding stable marriages when there are an equal number of boys and girls. Let Angelina and Jen be two of the girls, and Keith and Tom be two of the boys.  
  

Which of the following predicates are **preserved invariants** of the Mating Ritual no matter what the preferences are among the boys and girls? (Remember that a predicate that is always false is a preserved invariant －check the definition to see why. Also, a preserved invariant doesn't need to be true initially, it just needs to _stay_ true once it _starts_ being true.)

Express your answer as a sequence of digits in increasing order separated by spaces, for example,

1 4 5

1.  Angelina is crossed off Tom's list, and she has a suitor that she prefers to Tom.
2.  Tom is serenading Jen.
3.  Tom is not serenading Jen.
4.  Tom's list of girls to serenade is empty.
5.  All the boys have the same number of girls left uncrossed in their lists.
6.  Jen is crossed off Keith's list, and Keith prefers Jen to anyone he is serenading.
7.  Jen is the only girl on Keith's list.
8.  Jen is crossed off Keith's list, and there is no set of stable marriages －not just the set produced by the Mating Ritual －in which Jen is married to Keith.

Exercise 1

&nbsp;Text Response&nbsp; Answer:1 4 6 7 8

1.  Invariant: This is the basic invariant used to verify the Ritual.
2.  Not invariant: If Tom serenades Jen and gets rejected by her, he will stop serenading her.
3.  Not invariant: Tom might serenade Angelina, get rejected by her, and then serenade Jen next.
4.  Invariant: No girl will ever get added to Tom's list, so once his list is empty, it stays empty. This implies that Tom's list will never be empty, since the Ritual guarantees he will be married in the end. That is, this predicate is an invariant because it is always false. But it would still be an invariant even if we ran the Mating Ritual with more boys than girls, in which case Tom's list might become empty, but then would stay that way.
5.  Not invariant: Suppose all the boys like Angelina best. The she will reject all but her favorite, say it's Tom, on the first day. Now, on the second day, Tom's list will be one longer than all the other boys' lists.
6.  Invariant: Keith crosses off the girls he most prefers, so if Jen is crossed off, Keith likes her better than anybody that's left.
7.  Invariant: No girls get added to a list, so if Jen is the only girl on Keith's list, she must be the girl he marries at the end.
8.  Invariant: If Jen is crossed off Keith's list, then, since her suitors only become more desirable, she will wind up with a husband she prefers to Keith. But the Mating Ritual yields girl-pessimal marriages, so in _every_ stable set of marriages, Jen will wind up with someone she prefers to Keith, and so will never be interested in having him as a rogue partner.

CheckShow Answer

*   [BackMatching]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/structures/stable-matching/matching" %}})
*   [ContinueCounting]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/counting/_index.md" %}})