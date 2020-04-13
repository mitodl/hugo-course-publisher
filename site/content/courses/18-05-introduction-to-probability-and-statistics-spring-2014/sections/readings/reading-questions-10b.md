---
title: Reading Questions 10b
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
menu:
  18-05-introduction-to-probability-and-statistics-spring-2014:
    identifier: 69b42ac02410daa522a2cd217e2a5b7a
    weight: 370
    parent: 579c055accb4eb7ebb6bf294146b45a5
---
Reading Questions Answer Checker
--------------------------------

To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "There are $n$ students in a class. They are assigned numbers 1 to $n$. Three students are chosen at random and asked their numbers, which turn out to be 1, 3, 7. Assume that classes are allowed a maximum of 30 students. Find the maximum likelihood estimate for $n$. (Hint, the students are drawn from a discrete uniform distribution.)"; wl(s); wl(kbr); partName = problemNumber + " (a)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = 7; var answerArray = \[1,3,correct,14,30\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);