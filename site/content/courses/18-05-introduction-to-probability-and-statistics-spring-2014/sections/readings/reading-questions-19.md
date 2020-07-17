---
title: Reading Questions 19
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
menu:
  18-05-introduction-to-probability-and-statistics-spring-2014:
    identifier: e77a7bd7157200e96207bb9280d247ac
    name: Reading Questions 19
    weight: 480
    parent: 579c055accb4eb7ebb6bf294146b45a5
---
Reading Questions Answer Checker
--------------------------------

To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = emphtext("We suggest you use R to do the computations for this problem."); wl(s); wl(kp); s = "Suppose we have the following table of counts for the outcomes 0-6."; wl(s); wl(kp); writetable(\[\['Outcome', 0, 1, 2, 3, 4, 5, 6\], \['Observed','5','11','13','7','2','1','1'\]\], "class='basicborder'", "class='basiccells'", "class='k'", 2); wl(kp); s = "We hypothesize that the data is drawn from a binomial(6, 0.4) distribution."; wl(s); wl(kp); s = "(a) Compute the likelihood ratio statistic $G$."; wl(s); wl(kbr); partName = problemNumber + " (a)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 11.89567, buttonLabel, 0.002, kuseCorrectVal); wl(kp); s = "(b) Compute the Pearson chi square statistic $X^2$."; wl(s); wl(kbr); partName = problemNumber + " (b)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 15.1242, buttonLabel, 0.002, kuseCorrectVal); wl(kp); s = "(c) How many degrees of freedom are there in the chi square null distribution?"; wl(s); wl(kbr); partName = problemNumber + " (c)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 6, buttonLabel, 0.001, kuseCorrectVal); wl(kp); s = "(d) Compute the $p$-value (based on the $G$-statistic)."; wl(s); wl(kbr); partName = problemNumber + " (d)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 0.064337, buttonLabel, 0.002, kuseCorrectVal); wl(kp); whr(kdivcol,kdivwid);