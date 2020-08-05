---
title: Reading Questions 25
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
type: course
layout: course_section
menu:
  18-05-introduction-to-probability-and-statistics-spring-2014:
    identifier: c50546dd8531c1f277066be5e2a0ad87
    name: Reading Questions 25
    weight: 510
    parent: 579c055accb4eb7ebb6bf294146b45a5
---
Reading Questions Answer Checker
--------------------------------

To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "True or false: Linear regression can be used to fit a parabola to data."; wl(s); wl(kbr); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "True"; var answerArray = \[correct, "False"\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);

//Problem 2 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "In the least squares model $y = a + bx$ the variable $x$ is called:"; wl(s); wl(kbr); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "the predictor variable"; var answerArray = \["the ordinate", "the dependendent variable", correct, "the confounding variable"\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);

//Problem 3 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = \[boldtext("Lollipop Kids"), kp, "Consider the sample space of children under 13 in the United States. The random variable $X$ represents the age of a child. The random variable $Y$ represents the number of lollipops possessed by the child. By catching and releasing three children, we record the sample data:", kp, ksp, ksp, ksp, "(1,2), (2,3), (3,3)", kp, "of the form $(x,y)$."\]; wl(s.join(' ')); wl(kp); s = "(a) Calculate the sample means for the $x$ data and the $y$." wl(s); wl(kp); s = "(a.i) Mean for $x$:"; wl(s); wl(kbr); partName = problemNumber + " (a.i)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 2, buttonLabel, 0.001, kuseCorrectVal); wl(kp); s = "(a.ii) Mean for $y$:"; wl(s); wl(kbr); partName = problemNumber + " (a.ii)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 2.6667, buttonLabel, 0.001, kuseCorrectVal); wl(kp); s = \["(b) Using least squares determine the best-fit line in the $xy$-plane:", "$a + bx$"\]; wl(s.join(' ')); wl(kp); s = "(b.i) Give $a$."; wl(s); wl(kbr); partName = problemNumber + " (b.i)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 1.6667, buttonLabel, 0.01, kuseCorrectVal); wl(kp); s = "(b.ii) Give $b$."; wl(s); wl(kbr); partName = problemNumber + " (b.ii)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 0.5, buttonLabel, 0.01, kuseCorrectVal); wl(kp); whr(kdivcol,kdivwid);

//Problem 4 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "We use simple linear regression to predict the skill level of NBA players' sons from the skill level of their fathers. According to the prediction how will the sons compare with their fathers? On average they are:"; wl(s); wl(kbr); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "Worse"; var answerArray = \[correct, "Better", "The same", "No way to tell"\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);