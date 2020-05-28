---
title: 1.7 Binary Relations
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: f32fdc0c97b380c99f28e8ec9afa8b83
    weight: 580
    parent: dc4329a206935f01be73cf0b227cc3ed
---
*   [<In- ,Sur-, and Bijections]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp3-3/vertical-e3a6326108c6" %}})
*   [1.7.1Relations: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp3-3/_index.md" %}})
*   [1.7.2Range of a Relation]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp3-3/vertical-70020f5936fa" %}})
*   [1.7.3Relational Mappings: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp3-3/vertical-360a6e85d0f4" %}})
*   [1.7.4Total Injection]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp3-3/vertical-5c792a4ae3f8" %}})
*   [1.7.5Finite Cardinality: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp3-3/vertical-aecd80da5c9a" %}})
*   [1.7.6A inj B]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp3-3/vertical-faefc8383410" %}})
*   [1.7.7Total Relations]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp3-3/vertical-62aa874eafae" %}})
*   [1.7.8Surjective Relations]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp3-3/vertical-73dfbcd9adb9" %}})
*   [1.7.9Inverse Relations]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp3-3/vertical-b100bd3fedc5" %}})
*   [1.7.10In- ,Sur-, and Bijections]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp3-3/vertical-e3a6326108c6" %}})
*   [1.7.11Mapping Lemma: Sizes of Domains and Codomains]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp3-3/vertical-7d9a2d67e3b9" %}})
*   [\\> Induction]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/_index.md" %}})

Mapping Lemma: Sizes of Domains and Codomains
---------------------------------------------

  

For any binary relation \\(R: A \\to B \\) and subset \\(S \\subseteq A \\), let \\( R(S) \\) be the image of \\(S \\) under \\(R \\). An example of such an image is the doubling function with domain and codomain equal to the real numbers:

\\(sRt \\text{ IFF } t=2s \\)

such that \\(R(\\{0,3,11\\}) = \\{0,6,22\\} \\). Another example, \\(R(\\mathbb{Z}) \\), is the set of all even integers. For any finite set, we let \\(|S| \\) denotes the size (number of elements) of \\(S \\).

* * *

Now assume \\(R \\) is some **total function** and \\(A \\) is finite. Fill in the blanks to produce the **strongest** correct version of the following statements:

1.  \\(|R(A)| \\) \_\_\_\_ \\(|B| \\)
    
    Exercise 1
    
    &nbsp;\\(<\\)&nbsp;
    
    &nbsp;\\(\\leq\\)&nbsp;
    
    &nbsp;\\(=\\)&nbsp;
    
    &nbsp;\\(\\geq\\)&nbsp;
    
    &nbsp;\\(>\\)&nbsp;
    
    Note that \\(R(A)\\subseteq B \\).
    
2.  If \\(R \\) is a surjection, then \\(|A| \\) \_\_\_\_ \\(|B| \\).
    
    Exercise 2
    
    &nbsp;\\(<\\)&nbsp;
    
    &nbsp;\\(\\leq\\)&nbsp;
    
    &nbsp;\\(=\\)&nbsp;
    
    &nbsp;\\(\\geq\\)&nbsp;
    
    &nbsp;\\(>\\)&nbsp;
    
3.  If \\(R \\) is a surjection, then \\(|R(A)| \\) \_\_\_\_ \\(|B| \\).
    
    Exercise 3
    
    &nbsp;\\(<\\)&nbsp;
    
    &nbsp;\\(\\leq\\)&nbsp;
    
    &nbsp;\\(=\\)&nbsp;
    
    &nbsp;\\(\\geq\\)&nbsp;
    
    &nbsp;\\(>\\)&nbsp;
    
4.  If \\(R \\) is an injection, then \\(|R(A)| \\) \_\_\_\_ \\(|A| \\).
    
    Exercise 4
    
    &nbsp;\\(<\\)&nbsp;
    
    &nbsp;\\(\\leq\\)&nbsp;
    
    &nbsp;\\(=\\)&nbsp;
    
    &nbsp;\\(\\geq\\)&nbsp;
    
    &nbsp;\\(>\\)&nbsp;
    
5.  If \\(R \\) is a bijection, then \\(|A| \\) \_\_\_\_ \\(|B| \\).
    
    Exercise 5
    
    &nbsp;\\(<\\)&nbsp;
    
    &nbsp;\\(\\leq\\)&nbsp;
    
    &nbsp;\\(=\\)&nbsp;
    
    &nbsp;\\(\\geq\\)&nbsp;
    
    &nbsp;\\(>\\)&nbsp;
    
    CheckShow Answer
    

*   [BackIn- ,Sur-, and Bijections]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp3-3/vertical-e3a6326108c6" %}})
*   [Continue Induction]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp4-1/_index.md" %}})