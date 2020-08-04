---
title: Reading Questions 4a
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
type: course
layout: course_section
menu:
  18-05-introduction-to-probability-and-statistics-spring-2014:
    identifier: e03d83098b8bcf29465b701d399a6692
    name: Reading Questions 4a
    weight: 250
    parent: 579c055accb4eb7ebb6bf294146b45a5
---
Reading Questions Answer Checker
--------------------------------

To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "The random variable $X$ has the following table."; wl(s); wl(kp); writetable(\[\['values $a$ '+ksp, 5, 10, 15, 20\], \['pmf $p(a)$ '+ksp,'2/10','1/10','2/10','?'\]\], "class='basicborder'", "class='basiccells'", "class='k'", 2); wl(kp); wl(kbr); s = \["(a) What is $p(20)$?"\]; wl(s.join(' ')); wl(kp); partName = problemNumber + " (a)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", .5, buttonLabel, 0.001, "5/10 = 0.5"); wl(kp); s = "Let $F(a)$ be the cumulative distribution funcion."; wl(s); wl(kp); s = \["(b) What is $F(17)$?"\]; wl(s.join(' ')); wl(kp); partName = problemNumber + " (b)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", .5, buttonLabel, 0.001, kuseCorrectVal); wl(kp); s = \["(c) What is $F(20)$?"\]; wl(s.join(' ')); wl(kp); partName = problemNumber + " (c)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 1, buttonLabel, 0.001, kuseCorrectVal); wl(kp); s = \["(d) What is $F(25)$?"\]; wl(s.join(' ')); wl(kp); partName = problemNumber + " (d)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 1, buttonLabel, 0.001, kuseCorrectVal); wl(kbr); whr(kdivcol,kdivwid);

//Problem 2 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "Suppose $X ~ $ binomial(6, 0.5). What is $P(X=3)$?" wl(s) wl(kp); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", .3125, buttonLabel, 0.01, kuseCorrectVal); whr(kdivcol,kdivwid);