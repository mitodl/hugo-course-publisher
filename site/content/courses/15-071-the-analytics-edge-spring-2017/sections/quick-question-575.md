---
title: '7.3 The Analytical Policeman: Visualization for Law and Order'
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: quick-question-575
    weight: 2530
---
*   [<Video 6: A Heatmap on the United States]({{% ref "video-6-a-heatmap-on-the-united-states" %}})
*   [7.3.1Video 1: Predictive Policing]({{% ref "the-analytical-policeman-visualization-for-law-and-order" %}})
*   [7.3.2Quick Question]({{% ref "quick-question-540" %}})
*   [7.3.3Video 2: Visualizing Crime Over Time]({{% ref "video-2-visualizing-crime-over-time" %}})
*   [7.3.4Quick Question]({{% ref "quick-question-545" %}})
*   [7.3.5Video 3: A Line Plot]({{% ref "video-3-a-line-plot" %}})
*   [7.3.6Quick Question]({{% ref "quick-question-550" %}})
*   [7.3.7Video 4: A Heatmap]({{% ref "video-4-a-heatmap" %}})
*   [7.3.8Quick Question]({{% ref "quick-question-559" %}})
*   [7.3.9Video 5: A Geographical Hot Spot Map]({{% ref "video-5-a-geographical-hot-spot-map" %}})
*   [7.3.10Quick Question]({{% ref "quick-question-567" %}})
*   [7.3.11Video 6: A Heatmap on the United States]({{% ref "video-6-a-heatmap-on-the-united-states" %}})
*   [7.3.12Quick Question]({{% ref "quick-question-575" %}})
*   [7.3.13Video 7: The Analytics Edge]({{% ref "video-7-the-analytics-edge" %}})
*   [\\>Video 7: The Analytics Edge]({{% ref "video-7-the-analytics-edge" %}})

Quick Question
--------------

Redo the map from Video 6, but this time fill each state with the variable GunOwnership. This shows the percentage of people in each state who own a gun.

Which of the following states has the highest gun ownership rate? To see the state labels, take a look at [the World Atlas map](http://www.worldatlas.com/webimage/testmaps/usanames.htm).

Exercise 1

&nbsp;California&nbsp;

&nbsp;Montana&nbsp;

&nbsp;Texas&nbsp;

&nbsp;Louisiana&nbsp;

&nbsp;Missouri&nbsp;

Explanation

You can generate the gun ownership plot using the following command:

ggplot(murderMap, aes(x = long, y = lat, group=group, fill = GunOwnership)) + geom\_polygon(color="black") + scale\_fill\_gradient(low = "black", high = "red", guide="legend")

Of these five states, the one that is the most red is Montana.

CheckShow Answer

*   [BackVideo 6: A Heatmap on the United States]({{% ref "video-6-a-heatmap-on-the-united-states" %}})
*   [ContinueVideo 7: The Analytics Edge]({{% ref "video-7-the-analytics-edge" %}})