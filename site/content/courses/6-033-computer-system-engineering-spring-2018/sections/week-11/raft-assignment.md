---
title: Raft Assignment
course_id: 6-033-computer-system-engineering-spring-2018
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: 664be575c00e8b731e9737cd0a323c01_raft-assignment
    weight: 160
---
For this recitation, you'll be reading "![This resource may not render correctly in a screen reader.](/images/inacessible.gif)[In Search of an Understandable Consensus Algorithm (PDF)](https://raft.github.io/raft.pdf)" by Diego Ongaro and John Ousterhout. This paper describes Raft, an algorithm for achieving distributed consensus. The paper contrasts Raft to an algorithm called Paxos: You do **not** need to know anything about Paxos to read this paper. Raft was designed to be more understandable than Paxos.

Before reading the paper, check out two very helpful websites, which have some useful visualizations:

*   An [introduction](http://thesecretlivesofdata.com/raft/) to distributed consensus
*   A [visualization](https://raft.github.io/) of Raft

With those visualizations in mind, read the paper. Skip sections 5.4.3 and 7, and skim sections 9.1 and 9.2.

*   The first four sections give background and motivation for Raft. Sections five and six are the primary technical sections.
*   Fig. 2 is a good reference to come back to after you've read the paper. Don't get stuck trying to memorize the entire table before you move onto page 5 of the paper; skip it, come back to it during your reading or at the end.

To check your understanding after reading:

*   How does Raft handle the following three types of failures?: Leader failures, candidate or follower failures, and network partitions (a network partition means that one part of the cluster is unable to communicate with any machine in the other part).
*   Take a look at figure 7. For each log, (a)-(f), what sequence of events might have led to that log?

Questions for Recitation
------------------------

**Before you come to this recitation**, write up (on paper) a _brief_ answer to the following (really—we don't need more than a couple sentences for each question). 

Your answers to these questions should be **in your own words**, not direct quotations from the paper.

*   In Raft, what is the leader's function?
*   How does the leader work?
*   Why does Raft need a leader?

As always, there are multiple correct answers for each of these questions.