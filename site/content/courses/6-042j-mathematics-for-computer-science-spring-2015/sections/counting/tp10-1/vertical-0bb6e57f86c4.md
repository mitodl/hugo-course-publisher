---
title: '3.5 Pigeonhole Principle, Inclusion-Exclusion'
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: c076cbe4f659fcd5229cb670f62eec68
    weight: 2200
    parent: d45e95172acf2a430d67a0ef15468161
---
*   [<Pigeonhole Principle](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-138fcb49e968)
*   [3.5.1The Pigeonhole Principle: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1)
*   [3.5.2Rolling Dice](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-4e860a9da2fe)
*   [3.5.3Inclusion-Exclusion Example: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-6d18e84b97d0)
*   [3.5.4Inclusion-Exclusion 2 Sets: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-d7d25ffeb295)
*   [3.5.5Pigeonhole Principle](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-138fcb49e968)
*   [3.5.66.042 TEAL Table](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-0bb6e57f86c4)
*   [3.5.7Class Schedules](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/class-schedules)
*   [\>Class Schedules](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/class-schedules)

6.042 TEAL Table
----------------

  

A 6.042 problem-solving team has 8 students (Alyssa, Ben, Carlos, ...) seated around a circular table. Since there are whiteboards all around, it doesn't matter which way students face, so two seatings are regarded as defining the same _arrangement_ if each student has the same student on their right in both seatings. We'll be interested in counting how many arrangements there are of these 8 students, given some restrictions. Either input the final result or an equivalent form, using fact(x) to denote \\(x!\\), explictly write out multiplication with \*, and \*\* for exponentiation.

1.  How many different arrangements of these 8 students around the table are there without any restrictions?
    
    Exercise 1
    
    &nbsp;Numerical Response&nbsp;
    
    There are 8! ways to seat the 8 around the table, but all the 8 cyclic shifts of a seating define the same arrangement, giving a total of \\(\\frac{8!}{8} = 7!\\) seating arrangements.
    
  
3.  How many arrangements of these 8 students are there with Alyssa sitting next to Ben?
    
    Exercise 2
    
    &nbsp;Numerical Response&nbsp;
    
    Consider Alyssa and Ben to be 1 person, say AB. Now, there are 6! arrangements of these 7 people to seat around the table. Now, break up AB to be Alyssa and Ben - there are 2 ways to do this - Ben could be on Alyssa's left or Ben could be on Alyssa's right, giving a total of 2\\(\\cdot\\)6! seating arrangements.
    
  
5.  How many arrangements are there with Ben sitting next to both Alyssa AND Carlos?
    
    Exercise 3
    
    &nbsp;Numerical Response&nbsp;
    
    Consider Alyssa, Ben and Carlos to be 1 person, say ABC, to ensure they are seated together. Now, you have 6 people you want to seat around a table. There are 5! ways of doing this. Now, break up ABC so Ben is in between Alyssa and Carlos; there are 2 ways to do this: Alyssa is on Ben's left and Carlos on his right or vice versa. That gives 2\\(\\cdot\\)5! seating arrangements.
    
  
7.  How many arrangements are there with Ben sitting next to Alyssa OR Carlos?
    
    Exercise 4
    
    &nbsp;Numerical Response&nbsp;
    
    The inclusion-exclusion principle and the previous parts can be used to solve this question. Number of arrangements with Ben sitting next to Alyssa OR Carlos is the number of arrangements with Ben next to Alyssa (2\\(\\cdot\\)6!) plus number of arrangements with Ben next to Carlos (2\\(\\cdot\\)6!) minus number of arrangements with Ben next to both Alyssa AND Carlos (2\\(\\cdot\\)5!). That gives us \\(2\\cdot 6! + 2\\cdot 6! - 2\\cdot 5! = 4\\cdot 6! - 2\\cdot 5! = (4\\cdot6)5! - 2\\cdot 5!= 22\\cdot 5!\\).
    
    CheckShow Answer
    

*   [BackPigeonhole Principle](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/vertical-138fcb49e968)
*   [ContinueClass Schedules](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp10-1/class-schedules)