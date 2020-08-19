---
title: Reading Questions 18
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

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = \["Suppose data is drawn from a normal distribution with unknown mean $&mu;$ and unknown standard deviation.", "We make the following hypotheses:", kbr, "There are 100 points with a sample mean of 2 and sample variance of 36.", kp, ksp, ksp, "For a one-sample $t$-test let $H\_0$: $&mu; = 1$", ksp, "and", ksp, "$H\_A$: $&mu; > 1$."\]; wl(s.join(' ')); wl(kp) s = "(a) What is the value of the $t$ statistic?"; wl(s); wl(kbr); partName = problemNumber + " (a)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 5/3, buttonLabel, 0.01, kuseCorrectVal); wl(kp); s = "(b) How many degrees of freedom does the null distribution have?"; wl(s); wl(kbr); partName = problemNumber + " (b)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 99, buttonLabel, 0.01, kuseCorrectVal); wl(kp); s = "(c) What is the $p$-value for this test? Use R to compute your answer."; wl(s); wl(kbr); partName = problemNumber + " (c)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", .04937, buttonLabel, 0.002, kuseCorrectVal); wl(kp); s = "(d) At a significance level of $0.01$ do you reject the null hypothesis in favor of $H\_A$?"; wl(s); wl(kbr); partName = problemNumber + " (d)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "No"; var answerArray = \['Yes',correct\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);