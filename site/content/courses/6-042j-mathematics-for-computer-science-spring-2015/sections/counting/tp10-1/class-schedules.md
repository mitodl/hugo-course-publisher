---
title: '3.5 Pigeonhole Principle, Inclusion-Exclusion'
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 33eeaaae10d0197164745da153cd4deb_class-schedules
    weight: 200
    parent: d45e95172acf2a430d67a0ef15468161_tp10-1
---
*   [<6.042 TEAL Table](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-0bb6e57f86c4)
*   [3.5.1The Pigeonhole Principle: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1)
*   [3.5.2Rolling Dice](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-4e860a9da2fe)
*   [3.5.3Inclusion-Exclusion Example: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-6d18e84b97d0)
*   [3.5.4Inclusion-Exclusion 2 Sets: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-d7d25ffeb295)
*   [3.5.5Pigeonhole Principle](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-138fcb49e968)
*   [3.5.66.042 TEAL Table](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-0bb6e57f86c4)
*   [3.5.7Class Schedules](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/class-schedules)
*   [\>Probability](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability)

Class Schedules
---------------

  

At a certain school, there are 11 different classes offered to first-year students, and each student must enroll in exactly 4 of them. How many students must be in one class year to guarantee that at least 2 students will have the same schedule?  
Either input the final result or an equivalent form, using fact(x) to denote \\(x!\\); explictly write out multiplication with \*, and \*\* for exponentiation.

Exercise 1

&nbsp;Numerical Response&nbsp;

This is a pigeonhole problem (although it's also a counting problem). The pigeons are the students, and the pigeonholes are the possible class schedules, of which there are 11 choose 4 = 330. A student is mapped to a schedule if the student has that schedule. To guarantee that 2 students will have the same schedule, there must be more pigeons than holes -- so there must be at least 331 students in a class year.

CheckShow Answer

*   [Back6.042 TEAL Table](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-0bb6e57f86c4)
*   [ContinueProbability](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability)