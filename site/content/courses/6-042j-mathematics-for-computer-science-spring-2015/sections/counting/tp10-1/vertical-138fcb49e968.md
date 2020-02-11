---
title: '3.5 Pigeonhole Principle, Inclusion-Exclusion'
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 8d15f3c16eec4c495ea845cd7bfc5726_vertical-138fcb49e968
    weight: 180
    parent: d45e95172acf2a430d67a0ef15468161_tp10-1
---
*   [<Inclusion-Exclusion 2 Sets: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-d7d25ffeb295)
*   [3.5.1The Pigeonhole Principle: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1)
*   [3.5.2Rolling Dice](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-4e860a9da2fe)
*   [3.5.3Inclusion-Exclusion Example: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-6d18e84b97d0)
*   [3.5.4Inclusion-Exclusion 2 Sets: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-d7d25ffeb295)
*   [3.5.5Pigeonhole Principle](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-138fcb49e968)
*   [3.5.66.042 TEAL Table](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-0bb6e57f86c4)
*   [3.5.7Class Schedules](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/class-schedules)
*   [\>6.042 TEAL Table](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-0bb6e57f86c4)

Pigeonhole Principle
--------------------

  

Below is a list of properties that a group of people might possess.

For each property, either give the minimum number of people that must be in a group to ensure that the property holds, or else write **nh** to indicate that the property need **n**ot **h**old even for arbitrarily large groups of people.

_Assume that every year has exactly 365 days; ignore leap years._

1.  At least 2 people were born on the same day of the year (ignore the year of birth).
    
    Exercise 1
    
    &nbsp;Numerical Response&nbsp;
    
    We let the people be pigeons and the days of the year be holes (365 holes). If we have 365+1 pigeons, two of them must be in the same hole (i.e. the two must be born on the same day).
    
  
3.  At least 2 people were born on January 1st.
    
    Exercise 2
    
    &nbsp;Text Response&nbsp; Answer:nh
    
    No matter how many people you have, you cannot force any one of them to be born on a specific day. For example, everyone might be born on January 2nd.
    
  
5.  At least 3 people were born on the same day of the week.
    
    Exercise 3
    
    &nbsp;Numerical Response&nbsp;
    
    We let people be pigeons and the days on the week be holes (7 holes). Using the generalized pigeonhole principle, we need 2\\(\\cdot\\)7+1 people to force 3 of them to be in the same hole (i.e. born on the same day of the week).
    
  
7.  At least 4 people were born in the same month.
    
    Exercise 4
    
    &nbsp;Numerical Response&nbsp;
    
    We let the people be pigeons and the months of the year be holes (12 holes). Using the generalized pigeonhole principle, we need 3\\(\\cdot\\)12+1 people to force 4 of them to be born in the same month.
    
  
9.  At least 2 people were born exactly one week apart.
    
    Exercise 5
    
    &nbsp;Text Response&nbsp; Answer:nh
    
    Again, you cannot force this property. For example, everyone might be born on the same day of the year.
    
    CheckShow Answer
    

*   [BackInclusion-Exclusion 2 Sets: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-d7d25ffeb295)
*   [Continue6.042 TEAL Table](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-0bb6e57f86c4)