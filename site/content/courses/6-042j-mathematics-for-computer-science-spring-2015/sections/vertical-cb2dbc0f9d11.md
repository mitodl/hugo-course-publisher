---
title: 2.6 Directed Acyclic Graphs (DAGs) & Scheduling
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: vertical-cb2dbc0f9d11
    weight: 1330
---
*   [<Scheduling: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-1/vertical-0b187f2dedb6)
*   [2.6.1DAGs: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-1)
*   [2.6.2DAGs](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-1/vertical-dcde59c77eab)
*   [2.6.3Scheduling: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-1/vertical-0b187f2dedb6)
*   [2.6.4Scheduling Prerequisites](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-1/vertical-cb2dbc0f9d11)
*   [2.6.5Time versus Processors: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-1/vertical-ce9e54c9d251)
*   [2.6.6Processor Time Bounds](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-1/vertical-a69125071411)
*   [2.6.7The Divisibility DAG](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-1/vertical-839e7a19a176)
*   [\>Time versus Processors: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-1/vertical-ce9e54c9d251)

Scheduling Prerequisites
------------------------

  

The prerequisites of some MIT subjects are given in the following table:

| Direct Prerequisites | Subject |
| --- | --- |
| 18.01 | 6.042 |
| 18.01 | 18.02 |
| 18.01 | 18.03 |
| 8.01 | 8.02 |
| 8.01 | 6.01 |
| 6.042 | 6.046 |
| 18.02, 18.03, 8.02, 6.01 | 6.02 |
| 6.01,6.042 | 6.006 |
| 6.01 | 6.034 |
| 6.02 | 6.004 

In the following sets of subjects, specify whether the set is a chain, anti-chain, or neither:  
(Hint, draw a DAG for the subjects first!)

1.  6.042, 6.046, 6.01
    
    Exercise 1
    
    &nbsp; chain anti-chain neither neither&nbsp;
    
  
3.  18.01, 6.02, 6.004
    
    Exercise 2
    
    &nbsp; chain anti-chain neither chain&nbsp;
    
    A chain need not contain every possible element.
    
  
5.  6.042, 6.02, 6.034
    
    Exercise 3
    
    &nbsp; chain anti-chain neither anti-chain&nbsp;
    
  
7.  What is the length of the longest anti-chain?
    
    Exercise 4
    
    &nbsp;Numerical Response&nbsp;
    
  
9.  How many terms do you need to graduate if you take classes following the schedule given by a topological sort of the DAG?
    
    Exercise 5
    
    &nbsp;Numerical Response&nbsp;
    
    Topological sorting provides a schedule for taking one class per term, so the number of terms is the number of classes.
    
    CheckShow Answer
    
  

*   [BackScheduling: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-1/vertical-0b187f2dedb6)
*   [ContinueTime versus Processors: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-1/vertical-ce9e54c9d251)