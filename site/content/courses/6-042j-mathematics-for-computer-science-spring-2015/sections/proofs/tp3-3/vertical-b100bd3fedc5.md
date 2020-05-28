---
title: 1.7 Binary Relations
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 78a8e62bd97f3f2390338a6a171fd655
    weight: 560
    parent: dc4329a206935f01be73cf0b227cc3ed
---
*   [<Surjective Relations]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp3-3/vertical-73dfbcd9adb9" %}})
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
*   [\\>In- ,Sur-, and Bijections]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp3-3/vertical-e3a6326108c6" %}})

Inverse Relations
-----------------

  

The inverse, \\(R^{-1}\\), of a binary relation, \\(R:A\\to B\\), is the relation from \\(B \\to A\\) defined by

\\(bR^{-1}a\\; \\text{ IFF }\\; aRb\\).

In other words, you get the diagram for \\(R^{-1}\\) from \\(R\\) by "reversing the arrows" in the diagram describing \\(R\\). Many of the relational properties of \\(R^{-1}\\) correspond to different properties of \\(R\\). For example, \\(R\\) is total iff \\(R^{-1}\\) is a surjection. How about the following relational properties?

1.  \\(R\\) is a function iff \\(R^{-1}\\) is
    
    Exercise 1
    
    &nbsp;a functiona surjectionan injectiona bijectiontotalnone of the above an injection&nbsp;
    
2.  \\(R\\) is a surjection iff \\(R^{-1}\\) is
    
    Exercise 2
    
    &nbsp;a functiona surjectionan injectiona bijectiontotalnone of the above total&nbsp;
    
3.  \\(R\\) is an injection iff \\(R^{-1}\\) is
    
    Exercise 3
    
    &nbsp;a functiona surjectionan injectiona bijectiontotalnone of the above a function&nbsp;
    
4.  \\(R\\) is a bijection iff \\(R^{-1}\\) is
    
    Exercise 4
    
    &nbsp;a functiona surjectionan injectiona bijectiontotalnone of the above a bijection&nbsp;
    
    CheckShow Answer
    

*   [BackSurjective Relations]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp3-3/vertical-73dfbcd9adb9" %}})
*   [ContinueIn- ,Sur-, and Bijections]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/proofs/tp3-3/vertical-e3a6326108c6" %}})