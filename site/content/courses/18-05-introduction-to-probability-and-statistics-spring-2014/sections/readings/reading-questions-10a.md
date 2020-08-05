---
title: Reading Questions 10a
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
type: course
layout: course_section
menu:
  18-05-introduction-to-probability-and-statistics-spring-2014:
    identifier: f6927f4197af827bc1c58d530646c69e
    name: Reading Questions 10a
    weight: 360
    parent: 579c055accb4eb7ebb6bf294146b45a5
---
Reading Questions Answer Checker
--------------------------------

To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "You have experimental data $x\_1, &#x2026;, x\_n$ drawn from a N$(0,&sigma;^2)$ distribution."; wl(s); wl(kp); s = "(a) True or False: $&sigma;$ is a statistic."; wl(s); wl(kbr); partName = problemNumber + " (a)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "False"; var answerArray = \["True", correct\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); s = "(b) True or False: The sample variance is a statistic."; wl(s); wl(kbr); partName = problemNumber + " (b)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "True"; var answerArray = \[correct, "False"\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); s = "(c) True or False: The sample mean is a statistic."; wl(s); wl(kbr); partName = problemNumber + " (c)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "True"; var answerArray = \[correct, "False"\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); s = "(d) True or False: The sample mean will be 0."; wl(s); wl(kbr); partName = problemNumber + " (d)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "False"; var answerArray = \["True", correct\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);