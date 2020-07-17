---
title: 8.5 Assignment 8
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: 6a5d4bdb70f448f5869782dbaa8537a8
    name: 8.5 Assignment 8
    weight: 3020
    parent: daafaa58867c9765f1c4c60a9c0ed426
---
*   [<Video 8: Extensions and the Edge]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/google-adwords-optimizing-online-advertising-recitation/video-8-extensions-and-the-edge" %}})
*   [8.5.1Even' Star Organic Farm]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/assignment-8/_index.md" %}})
*   [\\>Integer Optimization]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/_index.md" %}})

Even' Star Organic Farm
-----------------------

Even' Star Organic Farm was founded in 1997 by Brett Grohsgal, a former chef in Washington DC. The company owns a 104-acre farm in southern Maryland, and grows and sells organic produce. For more information, see [Even' Star's Facebook page](https://www.facebook.com/evenstarfarm.org/). This problem describes the business issues faced by Brett, and the data is based on actual observations.

Brett has decided to grow eight different types of produce: large tomatoes, small tomatoes, watermelon, okra, basil, cucumbers, sweet potatoes, and winter squash. He distributes his produce through three different channels: Restaurants, Community-Supported Agriculture, and Farmers' Markets. 

Initially, he sold exclusively to restuarants. He knows of 20 restaurants that will buy his produce from his connections as a former chef. As his farm expanded, he also started selling his produce at a local farmers' market, where he can command a higher price. Recently, he has also started selling through Community Supported Agriculture (CSA), a program in which individuals pay a $400 subscription price to get a box of produce each week for 15 weeks. He currently knows of 90 individuals who are interested in buying his produce through the CSA program. 

Brett has a limited amount of produce that he can sell each season, and he needs to decide how much produce to sell through each channel (restaurants, CSA, or farmers' markets). 

Problem 1.1 - Formulating the Problem
-------------------------------------

Let's formulate Brett's problem as a linear optimization problem. The spreadsheet [EvenStarFarm (ODS)](https://open-learning-course-data-ci.s3.amazonaws.com/15-071-the-analytics-edge-spring-2017/76d937c2e04ad2de53f9c971328b5f0e_EvenStarFarm.ods) for LibreOffice or OpenOffice, and [EvenStarFarm (XLSX)](https://open-learning-course-data-ci.s3.amazonaws.com/15-071-the-analytics-edge-spring-2017/0dfaed12f92d54696c28596520d801a4_EvenStarFarm.xlsx) for Microsoft Excel, contains the data for the problem, and has set up the decision variables and objective for you.

The **decision variables** in our problem are the number of cases of each type of produce to sell in each channel (there are 24 decision variables). They are highlighted in yellow in the spreadsheet.

Brett's **objective** is to maximize total profit (total revenue minus total cost). In the spreadsheet EvenStarFarm, the objective is highlighted in blue.

To compute the total revenue, we multiply the number of cases of each type of produce distributed in each channel by the price that Brett sells it for. The price of a case of each type of produce in each of the different channels is listed in cells C6:E13 of the spreadsheet.

The total cost is composed of two parts: a variable cost per client, and an entry cost for being in the particular channel. The entry costs are listed in cells B20:D20.

To compute the total variable cost for each restaurant client, we use the information that each restaurant client will buy 119 cases of produce during the season. So, the total number of restaurant clients served in a season can be computed as the total number of cases sold to restaurants, divided by 119. (Note that the number of restuarant clients Brett gives produce to could be fractional (like 16.57). This is a simplification we'll make for this problem, so please ignore the fact that this number should be integer. We'll see next week how you can add integer restrictions to an optimization model.)

To compute the total variable cost for CSA clients, we need to know that each CSA customer will buy $400 worth of produce during the season. So, the total number of CSA clients served can be computed by dividing the total dollar amount sent to CSA customers by $400. (Note that the number of CSA clients Brett gives produce to could be fractional (like 16.57). This is a simplification we'll make for this problem, so please ignore the fact that this number should be integer. We'll see next week how you can add integer restrictions to an optimization model.)

There is no variable cost for farmers' market clients.

Which of the following spreadsheet formulas computes the total variable cost for the restaurant channel? Use the location of the data and variables in the spreadsheet EvenStarFarm.

Exercise 1

&nbsp;B19\*SUM(B26:B33)&nbsp;

&nbsp;B19/119&nbsp;

&nbsp;B19\*(SUM(B26:B33)/119)&nbsp;

&nbsp;SUM(B26:B33)/119&nbsp;

Explanation

The variable cost per restaurant client is located in cell B19. We need to multiply this by the total number of restuarant clients, which can be computed by summing the total number of cases sent to restaurant clients, and dividing by 119, or SUM(B26:B33)/119. So the correct answer is B19\*(SUM(B26:B33)/119).

CheckShow Answer

Problem 1.2 - Formulating the Problem
-------------------------------------

Which of the following spreadsheet formulas computes the total variable cost for the CSA channel? Use the location of the data and variables in the spreadsheet EvenStarFarm.

Exercise 2

&nbsp;C19\*(SUMPRODUCT(C26:C33;D6:D13)/400)&nbsp;

&nbsp;SUMPRODUCT(C26:C33;D6:D13)/400&nbsp;

&nbsp;C19\*SUMPRODUCT(C26:C33;D6:D13)&nbsp;

&nbsp;C19/400&nbsp;

Explanation

The variable cost per CSA client is given in cell C19. We need to multiply this by the total dollar amount sent to CSA customers, divided by $400, which is computed in LibreOffice as SUMPRODUCT(C26:C33;D6:D13)/400. So the total variable cost is C19\*(SUMPRODUCT(C26:C33;D6:D13)/400).

CheckShow Answer

Problem 1.3 - Formulating the Problem
-------------------------------------

Now, let's formulate the constraints for our model. Brett can't sell negative cases, and he can't sell more cases than he produces. Cells B6:B13 in the spreadsheet list the number of available cases of each type of produce. For large tomatoes, which of the following constraints should we add to our model to capture these restrictions? Select all that apply.

Exercise 3

&nbsp;B26:D26 \\(\\geq\\) 0&nbsp;

&nbsp;B26:D26 \\(\\leq\\) 0&nbsp;

&nbsp;B26:D26 \\(=\\) 0&nbsp;

&nbsp;SUM(B26:D26) \\(\\geq\\) B6&nbsp;

&nbsp;SUM(B26:D26) \\(\\leq\\) B6&nbsp;

&nbsp;SUM(B26:D26) \\(=\\) B6&nbsp;

Explanation

We need to add constraints to restrict the total number of cases sold to each client (B26:D26) to be greater than or equal to zero, and we need to make sure that the total number of cases sold (SUM(B26:D26)) is no more than the total number produced, B6.

We should have similar constraints for each type of produce.

CheckShow Answer

Problem 1.4 - Formulating the Problem
-------------------------------------

Due to the truck capacity, the number of cases sold at the farmers' market can't be more than 600. Which constraint(s) captures this restriction?

Exercise 4

&nbsp;D26:D33 = 600&nbsp;

&nbsp;SUM(D26:D33) = 600&nbsp;

&nbsp;D26:D33 \\(\\leq\\) 600&nbsp;

&nbsp;SUM(D26:D33) \\(\\leq\\) 600&nbsp;

Explanation

We need to total number of cases sold at the farmers' market, SUM(D26:D33) to be less than or equal to 600.

CheckShow Answer

Problem 1.5 - Formulating the Problem
-------------------------------------

Brett knows that at most 20 restaurants will buy his produce. Which constraint(s) captures this restriction? HINT: Each restaurant buys 119 cases.

Exercise 5

&nbsp;SUM(B26:B33)/119 \\(\\leq\\) 20&nbsp;

&nbsp;SUM(B26:B33)/119 = 20&nbsp;

&nbsp;B26:B33/119 \\(\\leq\\) 20&nbsp;

&nbsp;B26:B33/119 = 20&nbsp;

Explanation

We first need to compute the total number of restaurant clients. We saw while computing the objective that this is SUM(B26:B33)/119. This should be less than or equal to 20.

CheckShow Answer

Problem 1.6 - Formulating the Problem
-------------------------------------

Brett knows that at most 90 CSA customers will buy his produce. Which constraint(s) captures this restriction? HINT: Each CSA customer buys $400 worth of produce.

Exercise 6

&nbsp;SUM(C26:C33;D6:D13)/400 \\(\\leq\\) 90&nbsp;

&nbsp;SUMPRODUCT(C26:C33;D6:D13)/400 \\(\\leq\\) 90&nbsp;

&nbsp;SUM(C26:C33)/400 \\(\\leq\\) 90&nbsp;

Explanation

We first need to compute the total number of CSA clients. We saw while computing the objective that this is SUMPRODUCT(C26:C33;D6:D13)/400. This should be less than or equal to 90.

Add all of these constraints to your model in LibreOffice (or in the spreadsheet software you are using). Here is a list of all of the constraints you should be adding:

1) Brett can't sell negative cases, and he can't sell more cases than he produces, for each type of produce.

2) The number of cases sold at the farmer's market can't be more than 600.

3) Brett can't sell produce to more than 20 restaurants.

4) Brett can't sell produce to more than 90 CSA customers.

CheckShow Answer

Problem 2.1 - Solving the Model
-------------------------------

Solve your model, and answer the following questions about the solution:

What is the objective function value (in dollars)?

Exercise 7

&nbsp;Numerical Response&nbsp;

Explanation

After solving the problem in LibreOffice, the objective value is $49,956.39.

You should have added the following constraints:

Large Tomato Limit: SUM(B26:D26) <= 406

Small Tomato Limit: SUM(B27:D27) <= 608

Watermelon Limit: SUM(B28:D28) <= 167

Okra Limit: SUM(B29:D29) <= 76

Basil Limit: SUM(B30:D30) <= 72

Cucumbers Limit: SUM(B31:D31) <= 251

Sweet Potatoes Limit: SUM(B32:D32) <= 107

Winter Squash Limit: SUM(B33:D33) <= 133

Farmers' Market Limit: SUM(D26:D33) <= 600

Restaurant Limit: SUM(B26:B33)/119 <= 20

CSA Limit: SUMPRODUCT(C26:C33;D6:D13)/400 <= 90

Also, make sure that you are maxiizing the objective, and that all of the variables are constrainted to be non-negative.

CheckShow Answer

Problem 2.2 - Solving the Model
-------------------------------

How many cases of large tomatoes are given to CSA customers?

Exercise 8

&nbsp;Numerical Response&nbsp;

Explanation

The decision variable corresponding to large tomatoes and CSA has value 0 in the solution.

CheckShow Answer

Problem 2.3 - Solving the Model
-------------------------------

How many cases of watermelon are given to farmers' market customers?

Exercise 9

&nbsp;Numerical Response&nbsp;

Explanation

The decision variable correponding to watermelon and the farmer's market has value 167 in the solution.

CheckShow Answer

Problem 2.4 - Solving the Model
-------------------------------

How many CSA customers does Brett provide produce for? Remember that this might be fractional - go ahead and enter the exact number even though Brett can't really serve "fractional customers".

Exercise 10

&nbsp;Numerical Response&nbsp;

Explanation

If we look at the constraint for CSA customers, we see that the left-hand side of the constraint has value 65.88. This means that Brett will technically sell produce to 66 customers (65 will get $400 worth of produce, and one will get 0.88\*$400 worth of produce).

CheckShow Answer

Problem 3.1 - Sensitivity Analysis
----------------------------------

Suppose that Brett can pay $1,000 to trade in his truck for a larger truck. This would allow him to transport 200 more cases of produce to the farmers' market (for a total of 800 cases). Should he do it? HINT: Adjust the constraints in your model, re-solve it, and compare the increase in objective function value to the cost of buying the larger truck.

Exercise 11

&nbsp;Yes, he should buy the larger truck.&nbsp;

&nbsp;No, he shouldn't buy the larger truck.&nbsp;

Explanation

If you increase the right hand side of the constraint for farmers' market cases to 800 (increase by 200) and re-solve the model, the new objective value is $50,181.76. Compared to the old objective value of $49,956.39, this is an increase in profit of $50,181.76 - $49,956.39 = $225.37. Since this is less than the cost of the truck, he shouldn't buy the larger truck.

CheckShow Answer

Problem 3.2 - Sensitivity Analysis
----------------------------------

One of Brett's workers has offered to use his truck to help Brett transport 200 more cases of produce to the farmer's market (for a total of 800 cases). Which of the following choices would increase Brett's profit? Select all that apply.

Exercise 12

&nbsp;Hire the worker, and pay him $300 for helping.&nbsp;

&nbsp;Hire the worker, and pay him $150 for helping.&nbsp;

&nbsp;Not hiring the worker.&nbsp;

Explanation

We saw in the previous question that increasing the farmers' market cases to 800 increases profits by $225.37. Thus Brett should hire the worker, and pay him $150, since that will give him an additional profit of $225.37 - $150.00 = $75.37.

CheckShow Answer

Problem 3.3 - Sensitivity Analysis
----------------------------------

Now suppose that Brett has found 10 more customers who would like to join the CSA program, for a total of 100 potential CSA customers. Should he sell produce to these customers? If you have changed any values in the constraints, change them back to their original values before answering this question (600 cases at the farmers' market).

Exercise 13

&nbsp;Yes, adding all of these extra customers will increase his profit.&nbsp;

&nbsp;Yes, adding some of these extra customers will increase his profit.&nbsp;

&nbsp;No, he shouldn't sell produce to any of these customers.&nbsp;

Explanation

Since the constraint for CSA customers is not binding (we sell to 65.88 customers, when we know of 90) it is not beneficial to add 10 more CSA customers.

CheckShow Answer

Problem 3.4 - Sensitivity Analysis
----------------------------------

Now suppose that Brett has purchased 5 additional acres of land, which allows him to produce 10 additional cases of one of his vegetables. Which vegetable should he plant on these 5 additional acres?

If you have changed any values in the constraints, change them back to their original values before answering this question (600 cases at the farmers' market, and 90 potential CSA customers). Assume for this problem that the production cost is the same for all types of produce. For your reference, here is a list of the number of cases of each type of produce that Brett currently produces: 406 cases of Large Tomatoes, 608 cases of Small Tomatoes, 167 cases of Watermelon, 76 cases of Okra, 72 cases of Basil, 251 cases of Cucumbers, 107 cases of Sweet Potatoes, and 133 cases of Winter Squash.

Exercise 14

&nbsp;Tomatoes (large)&nbsp;

&nbsp;Tomatoes (small)&nbsp;

&nbsp;Watermelon&nbsp;

&nbsp;Okra&nbsp;

&nbsp;Basil&nbsp;

&nbsp;Cucumber&nbsp;

&nbsp;Sweet Potatoes&nbsp;

&nbsp;Winter Squash&nbsp;

Explanation

If you increase the total number of cases of each type of produce one at a time by 10, the large tomatoes give the largest increase in the objective function value. Thus, Brett should plant large tomatoes on the additional acres of land.

CheckShow Answer

Acknowledgements: This problem is based on the case study "[Introducing Integer Modeling with Excel Solver](https://pubsonline.informs.org/doi/pdf/10.1287/ited.7.1.88)" by Dessislava Pachamanova, INFORMS Transactions on Education 7:1(88-98). Publication year 2006.

*   [BackVideo 8: Extensions and the Edge]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/google-adwords-optimizing-online-advertising-recitation/video-8-extensions-and-the-edge" %}})
*   [ContinueInteger Optimization]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/integer-optimization/_index.md" %}})