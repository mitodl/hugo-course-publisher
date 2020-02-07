---
title: 1.2 Proof Methods
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: vertical-cdf72f5374ab
    weight: 190
---
*   [<A Bogus Proof by Cases](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2/vertical-70c0b579a359)
*   [1.2.1Proof By Contradiction: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2)
*   [1.2.2Proof By Contradiction](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2/vertical-2835de2f30b6)
*   [1.2.3Proof By Cases: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2/vertical-f502ca28cf17)
*   [1.2.4When to Prove by Cases](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2/vertical-ba5ad72ae7ec)
*   [1.2.5Friends and Strangers](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2/vertical-9380624edebc)
*   [1.2.6A Bogus Proof by Cases](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2/vertical-70c0b579a359)
*   [1.2.7A Bogus Proof by Contradiction](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2/vertical-cdf72f5374ab)
*   [\>Well Ordering Principle](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp2-1)

A Bogus Proof by Contradiction
------------------------------

Which step(s) contain the logical error?

**Bogus Claim**: \\(\\sqrt{4}\\) is irrational.

Exercise 1

&nbsp;This proof is by contradiction.&nbsp;

&nbsp;Suppose the claim is false: \\(\\sqrt{4}\\) is rational.&nbsp;

&nbsp;We can write \\(\\sqrt{4}=\\frac{n}{d}\\), where \\(n\\) and \\(d\\) are integers with no common factors.&nbsp;

&nbsp;Squaring both sides and moving \\(d^2\\) to the left-hand side, we get \\(4d^2 = n^2\\).&nbsp;

&nbsp;This implies that \\(n^2\\) is a multiple of 4, and thus 4 is a factor of \\(n\\).&nbsp;

&nbsp;Therefore, \\(n^2\\) is a multiple of 16.&nbsp;

&nbsp;But since \\(4d^2 = n^2\\), \\(d^2\\) must also be a multiple of 4, and thus 4 is a factor of \\(d\\).&nbsp;

&nbsp;The numerator and denominator have a common factor of 4, which is a contradiction. Hence, \\(\\sqrt{4}\\) must be irrational. \\(\\blacksquare\\)&nbsp;

Explanation

This proof makes the same logical error twice. It claims that since \\(n^2\\) is a multiple of 4, then 4 must also be a factor of \\(n\\). However, only 2 must be a factor of \\(n\\).

CheckShow Answer

*   [BackA Bogus Proof by Cases](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp1-2/vertical-70c0b579a359)
*   [ContinueWell Ordering Principle](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp2-1)