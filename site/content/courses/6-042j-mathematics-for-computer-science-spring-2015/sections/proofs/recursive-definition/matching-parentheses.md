---
title: 1.10 Recursive Definition
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 07b69d15ceb477f320edfe861b5c21fc
    weight: 770
    parent: dc6ecd4f10b94f9f9744a385e4bab210
---
*   [<Recursive Definition](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/recursive-definition)
*   [1.10.1Recursive Data: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/recursive-definition)
*   [1.10.2Matching Parentheses](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/recursive-definition/matching-parentheses)
*   [1.10.3Functions of F18](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/recursive-definition/functions-of-f18)
*   [1.10.4Structural Induction: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/recursive-definition/structural-induction-video)
*   [1.10.5Structural Induction: Definition](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/recursive-definition/structural-induction-definition)
*   [1.10.6Counting Cases](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/recursive-definition/counting-cases)
*   [1.10.7Recursive Functions: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/recursive-definition/recursive-functions-video)
*   [\>Functions of F18](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/recursive-definition/functions-of-f18)

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

*   [BackRecursive Definition](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/recursive-definition)
*   [ContinueFunctions of F18](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/recursive-definition/functions-of-f18)