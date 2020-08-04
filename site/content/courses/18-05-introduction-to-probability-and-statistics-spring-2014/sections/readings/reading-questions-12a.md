---
title: Reading Questions 12a
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
type: course
layout: course_section
menu:
  18-05-introduction-to-probability-and-statistics-spring-2014:
    identifier: 7a1c80560c24757d5c9ebe36d23882be
    name: Reading Questions 12a
    weight: 390
    parent: 579c055accb4eb7ebb6bf294146b45a5
---
Reading Questions Answer Checker
--------------------------------

To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = \["Continuing the reading example of 3 coins:", "Assuming the first two tosses were heads, what is the posterior predictive probability of heads on the third toss?"\]; wl(s.join(' ')); wl(kp); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 0.71557, buttonLabel, 0.005, kuseCorrectVal); wl(kp); whr(kdivcol,kdivwid);