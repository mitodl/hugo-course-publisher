---
title: Reading Questions 11
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
menu:
  18-05-introduction-to-probability-and-statistics-spring-2014:
    identifier: 908b49c5d01d34aa7dbb5eb74408b7ee
    type: section
    layout: section
    name: Reading Questions 11
    weight: 380
    parent: 579c055accb4eb7ebb6bf294146b45a5
---
Reading Questions Answer Checker
--------------------------------

To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = \["Recall the coin example from the reading:", kbr, "There are three types of coins which are indistinguishable apart from their probability of landing heads when tossed.", kp, "<ul>", "<li>Type $A$ coins are fair, with probability .5 of heads</li>", "<li>Type $B$ coins have probability .6 of heads</li>", "<li>Type $C$ coins have probability .9 of heads</li>", "</ul>", kp, "You have a drawer containing 4 coins: 2 of type $A$, 1 of type $B$, and 1 of type $C$. You reach into the drawer and pick a coin at random.", kp, "Suppose you toss the coin 5 times and it lands tails all 5 times. What are the posterior probabilities? Hint: do the updating in one go.", kp, "Give your answers to 3 decimal places."\]; wl(s.join(' ')); wl(kp); s = "$P(A|D)$"; wl(s); wl(kp); partName = problemNumber + " (i)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 0.85911, buttonLabel, 0.005, kuseCorrectVal); wl(kp); s = "$P(B|D)$"; wl(s); wl(kp); partName = problemNumber + " (ii)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", .14076, buttonLabel, 0.005, kuseCorrectVal); wl(kp); s = "$P(C|D)$"; wl(s); wl(kp); partName = problemNumber + " (iii)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 0.000137, buttonLabel, 0.001, kuseCorrectVal); wl(kp); whr(kdivcol,kdivwid);

//Problem 2 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = \["<b>Stubborn priors.</b> Suppose you run an experiment to test 3 different hypotheses: $A$, $B$, and $C$. You are so convinced that $B$ is the correct hypothesis that your prior is", kp, "$P(A) = 0$," + ksp + ksp + "$P(B) = 1$," + ksp + ksp + "$P(C) = 0.$", kp, "You collect data $D$ with likelihoods", kp, "$P(D|A) = 0.8,$" + ksp+ksp +"$P(D|B) = 0.01$," +ksp +ksp + "$P(D|C) = 0.7$"\]; wl(s.join(' ')); wl(kp) s = "(a) Compute the posterior probabilities:"; wl(s); wl(kp); s = "$P(A|D)$"; wl(s); wl(kp); partName = problemNumber + " (a.1)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 0.0, buttonLabel, 0.0001, kuseCorrectVal); wl(kp); s = "$P(B|D)$"; wl(s); wl(kp); partName = problemNumber + " (a.2)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 1.0, buttonLabel, 0.0001, kuseCorrectVal); wl(kp); s = "$P(C|D)$"; wl(s); wl(kp); partName = problemNumber + " (a.3)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 0.0, buttonLabel, 0.0001, kuseCorrectVal); wl(kp); s = "(b) Will any amount of data change your belief that $B$ is the correct hypothesis?" wl(s); wl(kbr); partName = problemNumber + " (b)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "No"; var answerArray = \["Yes", correct\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);