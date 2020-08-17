---
title: Reading Questions 7b
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
type: course
layout: course_section
---
Reading Questions Answer Checker
--------------------------------

To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "(a) Suppose Cov$(X,Y) &ne; 0$. Are $X$ and $Y$ independent?"; wl(s); wl(kbr); partName = problemNumber + " (a)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "No"; var answerArray = \["Yes", correct\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); s = "(b) Suppose Cov$(X,Y) = 0$ are $X$ and $Y$ independent?" wl(s); wl(kbr); partName = problemNumber + " (b)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "Maybe"; var answerArray = \["Yes", "No", correct\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);

//Problem 2 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "Consider the following joint probability table."; wl(s); wl(kp); wl('<img src="/courses/mathematics/18-05-introduction-to-probability-and-statistics-spring-2014/readings/reading-questions-7b/figc7-16.png" width="200px">'); wl(kp); s = "(a) Are $X$ and $Y$ independent?"; wl(s); wl(kbr); partName = problemNumber + " (a)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "No"; var answerArray = \["Yes", correct\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); s = "(b) What is Cov$(X,Y)$?"; wl(s); wl(kbr); partName = problemNumber + " (b)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "-.1"; var answerArray = \["-0.3","-0.2",correct,"0","0.1","0.2","0.3"\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);