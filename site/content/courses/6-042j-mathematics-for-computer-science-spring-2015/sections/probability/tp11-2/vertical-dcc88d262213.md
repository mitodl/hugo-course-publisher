---
title: 4.1 Intro to Discrete Probability
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: ad83e19e58d292c485c4b3cec4bca701
    weight: 2240
    parent: 4414c612ae424c737466f4715f85e319
---
*   [<Intro to Discrete Probability](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp11-2)
*   [4.1.1Tree Model: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp11-2)
*   [4.1.2Socks and Shoes](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp11-2/vertical-dcc88d262213)
*   [4.1.3Simplified Monty Hall Tree: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp11-2/vertical-65858dc50455)
*   [4.1.4Simplify Prize Tree](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp11-2/vertical-9542d6e9bbc8)
*   [4.1.5Sample Spaces: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp11-2/vertical-7e0be1baca38)
*   [4.1.6Sum Rule Practice](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp11-2/vertical-eb54695f6f66)
*   [4.1.7Addition Rule](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp11-2/vertical-d95cbbc345c2)
*   [4.1.8Fun With Coins](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp11-2/vertical-a2b75a4824b8)
*   [\>Simplified Monty Hall Tree: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp11-2/vertical-65858dc50455)

Socks And Shoes
---------------

  

Parker has two pairs of black shoes and three pairs of brown shoes. He also has three pairs of red socks, four pairs of brown socks and six pairs of black socks.

Now let's say that Parker chooses a pair of shoes at random and a pair of socks at random. We would like to know the probability of him choosing shoes and socks of the same color.

1.  **Identify the outcomes!** An outcome is \_\_\_\_\_.
    
    Exercise 1
    
    &nbsp;a pair of shoesa pair of socksa pair of colorsall permutations of shoes and socksa color a pair of colors&nbsp;
    
    We care about the color of the shoes and socks, so an outcome is determined by the color of the shoes and the color of the socks. Therefore, the correct answer is _a pair of colors._
    
  
3.  **Identify the event of interest!**
    
    *   How many outcomes are there in total?
        
        Exercise 2
        
        &nbsp;Numerical Response&nbsp;
        
        There are two possible colors for shoes and three possible for socks. Hence, the total is 2\\(\\cdot\\)3=6.
        
      
    *   How many outcomes are there in the event of interest?
        
        Exercise 3
        
        &nbsp;Numerical Response&nbsp;
        
        The outcomes of interest (highlighted in tree below) are the ones where the colors are either both brown or both black. There is one of each.
        
  
5.  **Assign outcome probabilities**
    
    Please answer in the form of decimals with four significant digits.
    
    *   What is the probability of choosing black shoes?
        
        Exercise 4
        
        &nbsp;Numerical Response&nbsp;
        
        There are 5 pairs of shoes in total, 3 brown and 2 black. Since Parker chooses the shoes at random, the probability of choosing black shoes is \\(\\frac{2}{5}\\).
        
      
    *   What is the probability of choosing red socks?
        
        Exercise 5
        
        &nbsp;Numerical Response&nbsp;
        
        There are 13 pairs of socks in total, 3 red, 4 brown, and 6 black. Since Parker chooses the socks at random, the probability of choosing red socks is \\(\\frac{3}{13}\\).
        
  
7.  **Compute event probabilities!**
    
    Please answer in the form of decimals with four significant digits.
    
    What is the probability that he chooses shoes and socks of the same color?
    
    Exercise 6
    
    &nbsp;Numerical Response&nbsp;
    
    Using the four step method we construct a probability tree: ![Socks and Shoes Tree](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp11-2/vertical-dcc88d262213/socks_and_shoes_tree.jpg)  
    The probability of the event of interest is the sum of its outcomes. Therefore the probability that he chooses shoes and socks of the same color is: \\(\\frac{12}{65}+\\frac{12}{65}=\\frac{24}{65}\\).
    
    CheckShow Answer
    

*   [BackIntro to Discrete Probability](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp11-2)
*   [ContinueSimplified Monty Hall Tree: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp11-2/vertical-65858dc50455)