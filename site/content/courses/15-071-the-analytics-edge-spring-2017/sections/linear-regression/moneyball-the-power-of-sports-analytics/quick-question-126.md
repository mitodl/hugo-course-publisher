---
title: '2.3 Moneyball: The Power of Sports Analytics '
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: 213159bb6e06797c485259579c290272_quick-question-126
    weight: 650
    parent: fcb6a63f4737920a80bf15309d3ee7b6_moneyball-the-power-of-sports-analytics
---
*   [<Video 5: Winning the World Series]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/moneyball-the-power-of-sports-analytics/video-5-winning-the-world-series" %}})
*   [2.3.1A Quick Introduction to Baseball]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/moneyball-the-power-of-sports-analytics" %}})
*   [2.3.2Video 1: The Story of Moneyball]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/moneyball-the-power-of-sports-analytics/video-1-the-story-of-moneyball" %}})
*   [2.3.3Video 2: Making it to the Playoffs]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/moneyball-the-power-of-sports-analytics/video-2-making-it-to-the-playoffs" %}})
*   [2.3.4Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/moneyball-the-power-of-sports-analytics/quick-question-106" %}})
*   [2.3.5Video 3: Predicting Runs]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/moneyball-the-power-of-sports-analytics/video-3-predicting-runs" %}})
*   [2.3.6Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/moneyball-the-power-of-sports-analytics/quick-question-109" %}})
*   [2.3.7Video 4: Using the Models to Make Predictions]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/moneyball-the-power-of-sports-analytics/video-4-using-the-models-to-make-predictions" %}})
*   [2.3.8Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/moneyball-the-power-of-sports-analytics/quick-question-119" %}})
*   [2.3.9Video 5: Winning the World Series]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/moneyball-the-power-of-sports-analytics/video-5-winning-the-world-series" %}})
*   [2.3.10Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/moneyball-the-power-of-sports-analytics/quick-question-126" %}})
*   [2.3.11Video 6: The Analytics Edge in Sports]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/moneyball-the-power-of-sports-analytics/video-6-the-analytics-edge-in-sports" %}})
*   [2.3.12Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/moneyball-the-power-of-sports-analytics/quick-question-134" %}})
*   [\\>Video 6: The Analytics Edge in Sports]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/moneyball-the-power-of-sports-analytics/video-6-the-analytics-edge-in-sports" %}})

Quick Question
--------------

In 2012 and 2013, there were 10 teams in the MLB playoffs: the six teams that had the most wins in each baseball division, and four "wild card" teams. The playoffs start between the four wild card teams - the two teams that win proceed in the playoffs (8 teams remaining). Then, these teams are paired off and play a series of games. The four teams that win are then paired and play to determine who will play in the World Series. 

We can assign rankings to the teams as follows:

*   **Rank 1**: the team that won the World Series
*   **Rank 2**: the team that lost the World Series
*   **Rank 3**: the two teams that lost to the teams in the World Series
*   **Rank 4**: the four teams that made it past the wild card round, but lost to the above four teams
*   **Rank 5**: the two teams that lost the wild card round

In your R console, create a corresponding rank vector by typing

teamRank = c(1,2,3,3,4,4,4,4,5,5)

In this quick question, we'll see how well these rankings correlate with the regular season wins of the teams. In 2012, the ranking of the teams and their regular season wins were as follows:

*   **Rank 1**: San Francisco Giants (Wins = 94)
*   **Rank 2**: Detroit Tigers (Wins = 88)
*   **Rank 3**: New York Yankees (Wins = 95), and St. Louis Cardinals (Wins = 88)
*   **Rank 4**: Baltimore Orioles (Wins = 93), Oakland A's (Wins = 94), Washington Nationals (Wins = 98), Cincinnati Reds (Wins = 97)
*   **Rank 5**: Texas Rangers (Wins = 93), and Atlanta Braves (Wins = 94) 

Create a vector in R called wins2012, that has the wins of each team in 2012, in order of rank (the vector should have 10 numbers).

In 2013, the ranking of the teams and their regular season wins were as follows:

*   **Rank 1**: Boston Red Sox (Wins = 97)
*   **Rank 2**: St. Louis Cardinals (Wins = 97)
*   **Rank 3**: Los Angeles Dodgers (Wins = 92), and Detroit Tigers (Wins = 93)
*   **Rank 4**: Tampa Bay Rays (Wins = 92), Oakland A's (Wins = 96), Pittsburgh Pirates (Wins = 94), and Atlanta Braves (Wins = 96)
*   **Rank 5**: Cleveland Indians (Wins = 92), and Cincinnati Reds (Wins = 90) 

Create another vector in R called wins2013, that has the wins of each team in 2013, in order of rank (the vector should have 10 numbers).

What is the correlation between teamRank and wins2012?

Exercise 1

&nbsp;Numerical Response&nbsp;

Explanation

You should have typed the following three lines in your R console:

teamRank = c(1,2,3,3,4,4,4,4,5,5)

wins2012 = c(94,88,95,88,93,94,98,97,93,94)

cor(teamRank, wins2012)

The output of the last line is 0.3477129, which is the correlation between teamRank and wins2012.

What is the correlation between teamRank and wins2013?

Exercise 2

&nbsp;Numerical Response&nbsp;

Explanation

You should have typed the following three lines in your R console:

teamRank = c(1,2,3,3,4,4,4,4,5,5)

wins2013 = c(97,97,92,93,92,96,94,96,92,90)

cor(teamRank, wins2013)

The output of the last line is -0.6556945, which is the correlation between teamRank and wins2013.

Since one of the correlations is positive and the other is negative, this means that there does not seem to be a pattern between regular season wins and winning the playoffs. We wouldn't feel comfortable making a bet for this year given this data!

CheckShow Answer

*   [BackVideo 5: Winning the World Series]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/moneyball-the-power-of-sports-analytics/video-5-winning-the-world-series" %}})
*   [ContinueVideo 6: The Analytics Edge in Sports]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-regression/moneyball-the-power-of-sports-analytics/video-6-the-analytics-edge-in-sports" %}})