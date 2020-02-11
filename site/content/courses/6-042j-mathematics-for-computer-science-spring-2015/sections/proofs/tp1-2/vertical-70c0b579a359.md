---
title: 1.2 Proof Methods
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 62bbb99ca9eedcc26f2b179d17f08907_vertical-70c0b579a359
    weight: 140
---
*   [<Friends and Strangers](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2/vertical-9380624edebc)
*   [1.2.1Proof By Contradiction: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2)
*   [1.2.2Proof By Contradiction](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2/vertical-2835de2f30b6)
*   [1.2.3Proof By Cases: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2/vertical-f502ca28cf17)
*   [1.2.4When to Prove by Cases](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2/vertical-ba5ad72ae7ec)
*   [1.2.5Friends and Strangers](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2/vertical-9380624edebc)
*   [1.2.6A Bogus Proof by Cases](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2/vertical-70c0b579a359)
*   [1.2.7A Bogus Proof by Contradiction](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2/vertical-cdf72f5374ab)
*   [\>A Bogus Proof by Contradiction](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2/vertical-cdf72f5374ab)

A Bogus Proof by Cases
----------------------

  

Which step(s) contain the logical error?

**Bogus Claim**: For any integer \\(a\\), \\(\\;\\;\\;2a^2 > a\\).

Exercise 1

&nbsp;This proof is by case analysis.&nbsp;

&nbsp; There are two cases:

**Case 1**: _\\(a\\) is positive._

**Case 2**: _\\(a\\) is negative._

&nbsp;

&nbsp; One of these cases must always hold, because an integer is either positive or negative. &nbsp;

&nbsp;**Case 1**: Suppose \\(a\\) is positive. &nbsp;

&nbsp; Since \\(a\\) is an integer, we must have that \\(a\\geq 1\\). &nbsp;

&nbsp; Hence, \\(2a^2 = 2a\\cdot a \\geq 2a\\cdot 1 > a\\). &nbsp;

&nbsp; This implies the claim holds in Case 1. &nbsp;

&nbsp;**Case 2**: Suppose \\(a\\) is negative. &nbsp;

&nbsp; Since \\(a\\) is an integer, we must have that \\(a\\leq -1\\). &nbsp;

&nbsp; Hence, \\(2a^2 \\geq 2\\cdot (-1\\cdot -1) = 2 > -1 \\geq a\\). &nbsp;

&nbsp; This implies the claim holds in Case 2. &nbsp;

&nbsp; The claim therefore holds in both cases. \\(\\blacksquare\\) &nbsp;

Explanation

These two cases are NOT exhaustive, they leave out the case where \\(a=0\\), in which case \\(2a^2=2\\cdot 0^2=0=a\\).

Line 2 is not logically erranous because saying "There are two cases" implies the existence of **at least** two cases.

Line 3 claims that those are the ONLY two cases, and is therefore incorrect.

You should note that this proof can easily be modified to prove the correct claim that for any integer \\(a\\), \\(2a^2 \\geq a\\)

CheckShow Answer

*   [BackFriends and Strangers](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2/vertical-9380624edebc)
*   [ContinueA Bogus Proof by Contradiction](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2/vertical-cdf72f5374ab)