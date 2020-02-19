---
title: CDN Assignment
course_id: 6-033-computer-system-engineering-spring-2018
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: 0de7a026cc518d642305b1769d62af0f_cdn-assignment
    weight: 360
    parent: 0abfab7fcd019a6a159d1afa3fd61f99_week-7
---
Read ![This resource may not render correctly in a screen reader.](/images/inacessible.gif)"[The Akamai Network: A Platform for High-Performance Internet Applications (PDF)](https://www.akamai.com/us/en/multimedia/documents/technical-publication/the-akamai-network-a-platform-for-high-performance-internet-applications-technical-publication.pdf)" by Erin Nygren, Ramesh Sitaraman, and Jennifer Sun; skim Section 9. This paper, from 2010, describes the Akamai platform, which improves the performance of technologies that the Internet was not designed for (e.g., streaming video). Incidentally, Akamai's headquarters are right down the street from MIT.

The first six sections of this paper give context and motivation. Akamai's actual platform is not described until Section 7. In Section 8, the authors walk through an example of how Akamai's platform maintains availability in the face of different types of failure. (Just like how the system you design for the DP needs to handle multiple types of route failures!)

As you read, think about the following:

*   What are Akamai's design goals?
*   What happens when a user visits a particular URL? How does the content get to their machine?
*   The paper differentiates between a "content delivery network" and an "application delivery network." What is the difference between "content" and "applications," and why does this difference matter to Akamai?
*   Why wouldn't a peer-to-peer network suffice for Akamai's purposes?

Questions for Recitation
------------------------

**Before you come to this recitation**, write up (on paper) a _brief_ answer to the following (really—we don't need more than a couple sentences for each question).  

Your answers to these questions should be **in your own words**, not direct quotations from the paper.

*   What aspect(s) of the Internet's infrastructure is Akamai's platform designed to overcome?
*   How is the platform designed to overcome those aspects?
*   Why is it necessary for Akamai to overcome those aspects?

As always, there are multiple correct answers for each of these questions.