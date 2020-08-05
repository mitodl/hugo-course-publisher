---
title: Reading Questions 12b
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
type: course
layout: course_section
menu:
  18-05-introduction-to-probability-and-statistics-spring-2014:
    identifier: d2c47aaf753c0ee41f47a8c08bd1e2fa
    name: Reading Questions 12b
    weight: 400
    parent: 579c055accb4eb7ebb6bf294146b45a5
---
Reading Questions Answer Checker
--------------------------------

To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "Suppose an event $A$ has probability $P(A) = .4$. What are the odds of the event $A$?"; wl(s); wl(kbr); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "4/6"; var answerArray = \["4/10",correct,"10 to 40"\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);

//Problem 2 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "Assume we have 3 events $A, B, C$ with respective probabilities .3, .6, .1. "; wl(s); wl(kp); s = "(a) What are the odds of event $A$?"; wl(s) wl(kp); partName = problemNumber + " (a)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 0.4285714, buttonLabel, 0.005, kuseCorrectVal); wl(kp); s = "(b) What are the odds of event $B$ versus event $C$?"; wl(s) wl(kp); partName = problemNumber + " (b)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 6, buttonLabel, 0.002, kuseCorrectVal); wl(kp); whr(kdivcol,kdivwid);