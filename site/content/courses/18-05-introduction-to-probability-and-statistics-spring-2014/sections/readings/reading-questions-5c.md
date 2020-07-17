---
title: Reading Questions 5c
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
menu:
  18-05-introduction-to-probability-and-statistics-spring-2014:
    identifier: 3876a769ff7d47641b94468f23f85fc3
    name: Reading Questions 5c
    weight: 300
    parent: 579c055accb4eb7ebb6bf294146b45a5
---
Reading Questions Answer Checker
--------------------------------

To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "Suppose $X$ is a continuous random variable with pdf $f(x)$."; wl(s); wl(kp); s = \["Let $Z$ be a standard normal random variable.", kbr, "Use the R function " + rtext('pnorm') + " to compute each of the following.", kbr, "(Give 3 decimal places of accuracy.)"\]; wl(s.join(' ')); wl(kp); s = "(a) $P(Z < 1.5)$."; wl(s) wl(kp) partName = problemNumber + " (a)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 0.93319, buttonLabel, 0.001, kuseCorrectVal); wl(kp); s = "(b) $P(-1 < Z < 1)$."; wl(s); wl(kp); partName = problemNumber + " (b)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", .68269, buttonLabel, 0.001, kuseCorrectVal); wl(kp); whr(kdivcol,kdivwid);