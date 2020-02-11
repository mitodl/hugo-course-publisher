---
title: '7.2 Visualizing the World: An Introduction to Visualization'
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: a7c297732c9ae308c35b598232cd91c6_quick-question-531
    weight: 230
---
*   [<Video 5: Advanced Scatterplots Using ggplot]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/video-5-advanced-scatterplots-using-ggplot" %}})
*   [7.2.1Video 1: The Power of Visualizations]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization" %}})
*   [7.2.2Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/quick-question-505" %}})
*   [7.2.3Video 2: The World Health Organization (WHO)]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/video-2-the-world-health-organization-who" %}})
*   [7.2.4Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/quick-question-510" %}})
*   [7.2.5Video 3: What is Data Visualization?]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/video-3-what-is-data-visualization" %}})
*   [7.2.6Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/quick-question-515" %}})
*   [7.2.7Video 4: Basic Scatterplots Using ggplot]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/video-4-basic-scatterplots-using-ggplot" %}})
*   [7.2.8Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/quick-question-526" %}})
*   [7.2.9Video 5: Advanced Scatterplots Using ggplot]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/video-5-advanced-scatterplots-using-ggplot" %}})
*   [7.2.10Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/quick-question-531" %}})
*   [\\>The Analytical Policeman: Visualization for Law and Order]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/the-analytical-policeman-visualization-for-law-and-order" %}})

Quick Question
--------------

Create the fertility rate versus population under 15 plot again:

ggplot(WHO, aes(x = FertilityRate, y = Under15)) + geom\_point()

Now, color the points by the Region variable.

Note: You can add scale\_color\_brewer(palette="Dark2") to your plot if you are having a hard time distinguishing the colors (this color palette is often better if you are colorblind). To use this option, you should just add scale\_color\_brewer(palette="Dark2") to your plotting command right after geom\_point().

One region in particular has a lot of countries with a very low fertility rate and a very low percentage of the population under 15. Which region is it?

Exercise 1

&nbsp;Africa&nbsp;

&nbsp;Americas&nbsp;

&nbsp;Eastern Mediterranean&nbsp;

&nbsp;Europe&nbsp;

&nbsp;South-East Asia&nbsp;

&nbsp;Western Pacific&nbsp;

Explanation

You can color the points by region if you adjust the command to the following:

ggplot(WHO, aes(x = FertilityRate, y = Under15, color=Region)) + geom\_point()

Most of the countries in Europe have a very low fertility rate and a very low percentage of the population under 15.

CheckShow Answer

*   [BackVideo 5: Advanced Scatterplots Using ggplot]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/video-5-advanced-scatterplots-using-ggplot" %}})
*   [ContinueThe Analytical Policeman: Visualization for Law and Order]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/the-analytical-policeman-visualization-for-law-and-order" %}})