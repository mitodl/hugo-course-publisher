---
title: 1.10 Recursive Definition
course_id: 6-042j-mathematics-for-computer-science-spring-2015
type: course
layout: course_section
---
*   [<Recursive Definition]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/_index.md" %}})
*   [1.10.1Recursive Data: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/_index.md" %}})
*   [1.10.2Matching Parentheses]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/matching-parentheses" %}})
*   [1.10.3Functions of F18]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/functions-of-f18" %}})
*   [1.10.4Structural Induction: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/structural-induction-video" %}})
*   [1.10.5Structural Induction: Definition]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/structural-induction-definition" %}})
*   [1.10.6Counting Cases]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/counting-cases" %}})
*   [1.10.7Recursive Functions: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/recursive-functions-video" %}})
*   [\\>Functions of F18]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/functions-of-f18" %}})

Matching Parentheses
--------------------

  

Which of the following are true about \\(M\\), the set of matched parentheses strings?

Exercise 1

&nbsp;No string in \\(M\\) can start with a right parenthesis.&nbsp;

&nbsp;Every string in \\(M\\) must start with a left parentheses.&nbsp;

&nbsp;\\(M\\) is an infinite set.&nbsp;

&nbsp;Every string in \\(M\\) must have even length. &nbsp;

For any string of length greater than \\(0\\), if it starts with a right parenthesis, it is immediately unmatched. The empty string also vacuously satisfies this statement.

The empty string is a counterexample.

There are a variety of ways to show \\(M\\) is infinite. For example, for any proposed longest string, simply append "()" to the end.

In order for a string to be matched, its length must be a multiple of 2, for pairs of left and right parentheses. Note that the empty string has length 0 which is also even.

CheckShow Answer

*   [BackRecursive Definition]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/_index.md" %}})
*   [ContinueFunctions of F18]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/recursive-definition/functions-of-f18" %}})