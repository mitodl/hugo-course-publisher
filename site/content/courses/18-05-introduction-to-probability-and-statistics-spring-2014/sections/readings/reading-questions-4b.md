---
title: Reading Questions 4b
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
menu:
  18-05-introduction-to-probability-and-statistics-spring-2014:
    identifier: 790f92de3244e634da893c4682247252
    weight: 260
    parent: 579c055accb4eb7ebb6bf294146b45a5
---
Reading Questions Answer Checker
--------------------------------

To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "Let $X ~ $ Bernoulli(1/3)."; wl(s); wl(kp); s = \["(a) What is $E(X)$?"\]; wl(s.join(' ')); wl(kp); partName = problemNumber + " (a)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", .33333, buttonLabel, 0.001, "1/3 &#x2248 .3"); wl(kp); s = \["(b) What is $E(X^2)$?"\]; wl(s.join(' ')); wl(kp); partName = problemNumber + " (b)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", .33333, buttonLabel, 0.001, "1/3 &#x2248; .333"); whr(kdivcol,kdivwid);

//Problem 2 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "Let $Y ~ $ binomial(12, 1/3). What is $E(Y)$?"; wl(s) wl(kp); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 4, buttonLabel, 0.001, kuseCorrectVal); whr(kdivcol,kdivwid);

//Problem 3 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "Using $X$ and $Y$ from the previous two problems."; wl(s) wl(kp); s = "What is $E(4X + 7)$?"; wl(s); wl(kp); partName = problemNumber + " (a)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 8.33333, buttonLabel, 0.001, kuseCorrectVal); wl(kp) s = \["What is $E(X + Y)$?", kbr, "(Assume $X$ and $Y$ are random variables on the same sample space.)"\]; wl(s.join(' ')); wl(kp); partName = problemNumber + " (b)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 4.33333, buttonLabel, 0.001, kuseCorrectVal); whr(kdivcol,kdivwid);

//Problem 4 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "The random variable $T$ has the following table."; wl(s); wl(kp); writetable(\[\['value $a$ '+ksp, -4, -2, 0, 2, 4\], \['pmf $p(a)$ '+ksp,'3/10', '2/10', '1/10', '1/10', '3/10'\]\], "class='basicborder'", "class='basiccells'", "class='k'", 2); wl(kp); s = \["(a) Compute $E(T)$?"\]; wl(s.join(' ')); wl(kp); partName = problemNumber + " (a)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", -.2, buttonLabel, 0.001, kuseCorrectVal); wl(kp); s = \["(b) This is the payoff function for a game of chance. The player is paid out the random value in dollars. Negative values means the player loses that much money to the house.", kp, "Would you be better off as the player or as the house?"\]; wl(s.join(' ')); wl(kbr); partName = problemNumber + " (b)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "House" var answerArray = \["Player", correct\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); whr(kdivcol,kdivwid);

//Problem 5 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = \["Suppose $W$ is a random variable with $E(W) = -1$.", kp, "What is $E(W^2)$?"\]; wl(s.join(' ')); wl(kbr); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "Not enough information to say"; var answerArray = \["1","-1", correct\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); whr(kdivcol,kdivwid);