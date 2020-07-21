---
title: DARPA Assignment
course_id: 6-033-computer-system-engineering-spring-2018
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: d592637bbae871c659fff27fb133b62a
    name: DARPA Assignment
    weight: 250
    parent: a8eaa3de11de35a2f8d6b2d186c97fc6
---
Read ![This resource may not render correctly in a screen reader.](/images/inacessible.gif)"[The Design Philosophy of the DARPA Internet Protocols (PDF)](http://ccr.sigcomm.org/archive/1995/jan95/ccr-9501-clark.pdf)" by David Clark. Skip Section 10.

Because networking is a new topic for many of you, we've put together a ![This resource may not render correctly in a screen reader.](/images/inacessible.gif)[short networking guide (PDF)]({{% getpage "courses/6-033-computer-system-engineering-spring-2018/sections/week-5/darpa-assignment/MIT6_033S18networking_guide" %}}) to the very basics of networking. It should help de-mystify some of the vocabulary in the DARPA paper.

We also recommend [the "How Does the Internet Work?" guide](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm) (a bit longer, but still short), which goes into more detail than ours. It's from 2002, but the concepts still apply today.

If you are confused by any part of the DARPA paper, especially terminology, those two guides should be your first resources.

A bit of background on the paper itself:

*   This paper was written in 1988, before the Internet was commercialized. (Prior to commercialization, the NSF controlled most of the Internet primary routes that make up the Internet. In the early nineties, they sold their assets, which allowed private corporations to gain control. As a result—of this, and of a few other things—it became easier to do business on the Internet.)
*   The paper makes occasional reference to "TCP." We will learn the details of TCP in a future lecture. For now, you only need to know that TCP provides _reliable transport_.

The paper starts by introducing the goals of the Internet's architecture (Sections 1–3). It then dives into the details of some of these goals (Sections 4–7) before discussing implementation details and concluding.

As you read, you should think about:

*   Why did the Internet architects decide to divide TCP and IP into two separate protocols?
*   How do datagrams help the Internet achieve two of its goals: to connect existing networks and to survive transient failures?
*   If you could start from scratch, how would you redesign the Internet today? Would you keep the same principles but change their order? Would you use new principles?

Question for Recitation
-----------------------

**Before you come to this recitation**, write up (on paper) a _brief_ answer to the following (really—we don't need more than a couple sentences for each question). 

Your answers to these questions should be **in your own words**, not direct quotations from the paper.

*   What were three of the most important goals of the early Internet?
*   How was it designed to meet those goals?
*   Why were those goals important (or, why does the author believe that those goals were important)?

As always, there are multiple correct answers for each of these questions.