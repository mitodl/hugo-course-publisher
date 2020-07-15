---
title: 4.7 Sampling & Confidence
course_id: 6-042j-mathematics-for-computer-science-spring-2015
---
*   [<Random Sampling]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp14-1/vertical-0a9b074af4b4" %}})
*   [4.7.1Law Of Large Numbers: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp14-1/_index.md" %}})
*   [4.7.2Not So Strong]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp14-1/vertical-84aa6f70d1c0" %}})
*   [4.7.3Independent Sampling Theorem: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp14-1/vertical-872c5ec0974e" %}})
*   [4.7.4Sampling Coin Tosses]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp14-1/vertical-b7cee8c0e19c" %}})
*   [4.7.5Birthday Matching: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp14-1/vertical-82840a0ba306" %}})
*   [4.7.6Birthdays On Naboo]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp14-1/vertical-20063bed5f4a" %}})
*   [4.7.7Sampling & Confidence: Video]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp14-1/vertical-83cee7032f8c" %}})
*   [4.7.8Confidence]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp14-1/vertical-b6f0d030cb36" %}})
*   [4.7.9Random Sampling]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp14-1/vertical-0a9b074af4b4" %}})
*   [4.7.10Above Average Number of Fingers]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp14-1/vertical-2f9ccec3fdf7" %}})
*   [\\>Random Walks & Pagerank]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/random-walks-pagerank/_index.md" %}})

Above Average Number of Fingers
-------------------------------

  

There's a common wisecrack that 90% of drivers consider themselves above average. (A recent mention of this appears in NY Times writer [David Pogue's blog, April 29, 2010](http://pogue.blogs.nytimes.com/2010/04/29/text-blocking-apps-only-work-if-you-use-them/).) This may sound absurd, but maybe not: After all, the vast majority of people have an above average number of fingers.

More than one of the following assertions explain this fact; which ones?

Exercise 1

&nbsp;Most people have a super secret extra bonus finger of which they are unaware.&nbsp;

&nbsp;A pedantic minority don't count their thumbs as fingers, while the majority of people do.&nbsp;

&nbsp;When you add up the total number of fingers among the world's population and then divide by the size of the population, you get a number less than ten.&nbsp;

&nbsp;This follows from Markov's Theorem, since no one has a negative number of fingers.&nbsp;

&nbsp;Missing fingers are much more common than extra ones.&nbsp;

&nbsp;Missing fingers are at least slightly more common than extra ones.&nbsp;

(1): Signs point to no!

(2): The eccentric opinions of pedants don't matter, since they won't affect the way we count fingers.

(3): This statement means that the average number of fingers is less than ten, which is just a restatement of the claim using the obvious fact that the vast majority of people have the usual ten fingers. But restating the claim does not explain why it is true.

(4): Markov's Theorem has no apparent relevance to the claim. Markov's Theorem simply states that the fraction of people who make up the majority, multiplied by the above average number of fingers, namely 10, cannot be greater than the average. So if 99 percent of the world has 10 fingers, Markov's Theorem implies that the average number of fingers is at least 9.9, which says nothing about how the average compares to 10.

(5): & (6): As long as the total number of missing fingers in the population is larger than the total number of extra ones - it it does not matter _how much_ larger - the average number of fingers will be less than ten.

CheckShow Answer

*   [BackRandom Sampling]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/tp14-1/vertical-0a9b074af4b4" %}})
*   [ContinueRandom Walks & Pagerank]({{% getpage "courses/6-042j-mathematics-for-computer-science-spring-2015/sections/probability/random-walks-pagerank/_index.md" %}})