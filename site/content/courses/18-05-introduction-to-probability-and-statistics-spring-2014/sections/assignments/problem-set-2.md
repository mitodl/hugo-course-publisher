---
title: Problem Set 2
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
menu:
  18-05-introduction-to-probability-and-statistics-spring-2014:
    identifier: 99c100527da4dbd8c6c57e8009aa0978
    name: Problem Set 2
    weight: 560
    parent: fed85a98064c2e2a4378f3f7549df9b8
---
Problem Set 2 Answer Checker
----------------------------

Work on the assigned problems in the associated Problem Set PDF file, then use the problem set checker to find out if the answer was correct or incorrect. To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); wl(''); var s; var partName, problemName, buttonLabel, answerArray, correct; s = \["(a) Give the probabality of two girls:"\]; wl(s.join(' ')); wl(kp); partName = problemNumber + " (a)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 0.5, buttonLabel, 0.001, debugans); wl(kp); s = \["(b) Give the probabality of two boys:"\]; wl(s.join(' ')); wl(kp); partName = problemNumber + " (b)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 0.33333, buttonLabel, 0.001, debugans); wl(kp); whr(kdivcol,kdivwid);

//Problem 2 problemNumber++; wl(problemheader(problemNumber)); wl(''); var s; var partName, problemName, buttonLabel, answerArray, correct; s = \["Give $P$(guilty | the witness saw a blue taxi):"\]; wl(s.join(' ')); wl(kp); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 0.33333, buttonLabel, 0.01, debugans); wl(kp); whr(kdivcol,kdivwid);

//Problem 3 problemNumber++; wl(problemheader(problemNumber)); wl(''); var s; var partName, problemName, buttonLabel, answerArray, correct; s = \["Give the expected sum of cards:"\]; wl(s.join(' ')); wl(kp); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 3.7143, buttonLabel, 0.01, debugans); wl(kp); whr(kdivcol,kdivwid);

//Problem 4 problemNumber++; wl(problemheader(problemNumber)); wl(''); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "(a) " + knoonlinecheck; wl(s) wl(kp); wl(kbr); s = "(b) Give $P(X=k | R=3)$:"; wl(s); wl(kp); s = "(i) For $k = 4$:"; wl(s) wl(kp); partName = problemNumber + " (bi)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", .375, buttonLabel, 0.001, debugans); wl(kp); s = "(ii) For $k = 6$:"; wl(s) wl(kp); partName = problemNumber + " (bii)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", .25, buttonLabel, 0.001, debugans); wl(kp) s = "(iii) For $k = 8$:"; wl(s) wl(kp); partName = problemNumber + " (biii)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", .375, buttonLabel, 0.001, debugans); wl(kp) s = "(c) " + knoonlinecheck; wl(s) wl(kp); wl(kbr); s = "(d) " + knoonlinecheck; wl(s) wl(kp); wl(kbr); whr(kdivcol,kdivwid);

//Problem 5 problemNumber++; wl(problemheader(problemNumber)); wl(''); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "Take $n = 15$, give the expected number who are shorter than both neighbors:"; wl(s) wl(kp); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 5, buttonLabel, 0.001, debugans); wl(kp) whr(kdivcol,kdivwid);

//Problem 6 problemNumber++; wl(problemheader(problemNumber)); wl(''); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "(a) " + knoonlinecheck; wl(s) wl(kp); wl(kbr); s = "(b) " + knoonlinecheck; wl(s) wl(kp); wl(kbr); s = "(c) Give your estimated value for the average length of the longest run."; wl(s) wl(kp); partName = problemNumber + " (c)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 5.98, buttonLabel, 0.05, debugans); wl(kp) s = "(d) Give your estimated probability for the a run of 8 or more in 50 flips." wl(s) wl(kp); partName = problemNumber + " (d)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", .16, buttonLabel, 0.01, debugans); wl(kp) whr(kdivcol,kdivwid);