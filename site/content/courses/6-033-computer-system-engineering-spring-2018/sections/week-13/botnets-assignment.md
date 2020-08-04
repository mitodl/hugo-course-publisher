---
title: Botnets Assignment
course_id: 6-033-computer-system-engineering-spring-2018
type: course
layout: course_section
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: ea13cbf125e6cb4fd55253fee6563f83
    name: Botnets Assignment
    weight: 600
    parent: 87aba98430c8d18b3f717bdec998328f
---
Read![This resource may not render correctly in a screen reader.](/images/inacessible.gif) "[Your Botnet is My Botnet: Analysis of a Botnet Takeover (PDF)](https://seclab.cs.ucsb.edu/media/uploads/papers/torpig.pdf)" by Stone-Gross, et al. You can skim sections 5.2.1–5.2.3.

*   Section 2 explains how Torpig infects a user's machine. After reading this section, you should understand how that happens: how the rootkit gets installed and why its installation remains undetected.
*   Section 3 explains the technique (domain flux) by which Torpig bots communicate with the C&C (command and control) server. After reading this section, you should understand why it's difficult to simply block bots from accessing the C&C server.
*   Section 4 explains how the authors were able to take control of the Torpig botnet for a few weeks.
*   Sections 5 and 6 give an analysis of the botnet based on the authors' takeover. (Remember you can skim sections 5.2.1–5.2.3)

As you read, think about

*   What tools and/or threat models are violated by Torpig?
*   Think about the key factors that allowed the authors to infiltrate the Torpig botnet. Would their techniques work for all botnets?
*   Was the authors' methodology—taking over the botnet—necessary to collect the data they wanted? Was it ethical?

Questions for Recitation
------------------------

**Before you come to this recitation**, write up (on paper) a _brief_ answer to the following (really—we don't need more than a couple sentences for each question).  

Your answers to these questions should be **in your own words**, not direct quotations from the paper.

*   What does it mean for a computer to be a "bot"?
*   In Torpig, how does a machine become a bot, and how does it receive instructions to carry out attacks?
*   Why is it difficult to prevent a machine from becoming a bot? Why is it difficult to simply block bots from accessing the C&C server?

As always, there are multiple answers to each of these questions.