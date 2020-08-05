---
title: '7.3 The Analytical Policeman: Visualization for Law and Order'
course_id: 15-071-the-analytics-edge-spring-2017
type: course
layout: course_section
---
*   [<Video 5: A Geographical Hot Spot Map]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/the-analytical-policeman-visualization-for-law-and-order/video-5-a-geographical-hot-spot-map" %}})
*   [7.3.1Video 1: Predictive Policing]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/the-analytical-policeman-visualization-for-law-and-order/_index.md" %}})
*   [7.3.2Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/the-analytical-policeman-visualization-for-law-and-order/quick-question-540" %}})
*   [7.3.3Video 2: Visualizing Crime Over Time]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/the-analytical-policeman-visualization-for-law-and-order/video-2-visualizing-crime-over-time" %}})
*   [7.3.4Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/the-analytical-policeman-visualization-for-law-and-order/quick-question-545" %}})
*   [7.3.5Video 3: A Line Plot]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/the-analytical-policeman-visualization-for-law-and-order/video-3-a-line-plot/_index.md" %}})
*   [7.3.6Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/the-analytical-policeman-visualization-for-law-and-order/quick-question-550" %}})
*   [7.3.7Video 4: A Heatmap]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/the-analytical-policeman-visualization-for-law-and-order/video-4-a-heatmap" %}})
*   [7.3.8Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/the-analytical-policeman-visualization-for-law-and-order/quick-question-559/_index.md" %}})
*   [7.3.9Video 5: A Geographical Hot Spot Map]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/the-analytical-policeman-visualization-for-law-and-order/video-5-a-geographical-hot-spot-map" %}})
*   [7.3.10Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/the-analytical-policeman-visualization-for-law-and-order/quick-question-567" %}})
*   [7.3.11Video 6: A Heatmap on the United States]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/the-analytical-policeman-visualization-for-law-and-order/video-6-a-heatmap-on-the-united-states/_index.md" %}})
*   [7.3.12Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/the-analytical-policeman-visualization-for-law-and-order/quick-question-575" %}})
*   [7.3.13Video 7: The Analytics Edge]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/the-analytical-policeman-visualization-for-law-and-order/video-7-the-analytics-edge" %}})
*   [\\>Video 6: A Heatmap on the United States]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/the-analytical-policeman-visualization-for-law-and-order/video-6-a-heatmap-on-the-united-states/_index.md" %}})

Quick Question
--------------

In the previous video, our heatmap was plotting squares out in the water, which seems a little strange. We can fix this by removing the observations from our data frame that have Freq = 0.

Take a subset of LatLonCounts, only keeping the observations for which Freq > 0, and call it LatLonCounts2.

Redo the heatmap from the end of Video 5, using LatLonCounts2 instead of LatLonCounts. You should no longer see any squares out in the water, or in any areas where there were no motor vehicle thefts.

How many observations did we remove?

Exercise 1

&nbsp;Numerical Response&nbsp;

Explanation

You can take a subset of LatLonCounts, only keeping the observations for which Freq > 0 with the following command:

LatLonCounts2 = subset(LatLonCounts, Freq > 0)

Then, you can generate the new heatmap with the following command:

ggmap(chicago) + geom\_tile(data=LatLonCounts2, aes(x = Long, y = Lat, alpha=Freq), fill="red")

The number of observations in LatLonCounts2 is 686, and the number of observations in LatLonCounts is 1638. These numbers can be found by using nrow or str.

CheckShow Answer

*   [BackVideo 5: A Geographical Hot Spot Map]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/the-analytical-policeman-visualization-for-law-and-order/video-5-a-geographical-hot-spot-map" %}})
*   [ContinueVideo 6: A Heatmap on the United States]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/the-analytical-policeman-visualization-for-law-and-order/video-6-a-heatmap-on-the-united-states/_index.md" %}})