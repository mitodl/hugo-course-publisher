---
title: Lecture 9
course_id: 6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016
type: course
layout: videogallery
menu:
  6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016:
    identifier: d168b144bfeb0cd9daf8c345966e90d4
    name: Lecture 9
    weight: 130
    parent: cc74bf5b1a22399e271270abfff469d7
---
1.  ### Getters and Setters
    
      
    
    Which of the below is a getter method for the number of wheels?
    
    ```
    ----------------------------------
    ```
    
    Exercise 1
    
    &nbsp;```
    def get_wheels():
    ``` &nbsp;
    
    &nbsp;```
    def get_wheels():
    ``` &nbsp;
    
    &nbsp;```
    def get_wheels(self):
    ``` &nbsp;
    
    &nbsp;```
    def get_wheels(self):
    ``` &nbsp;
    
    CheckShow Answer Videos
    
    {{< youtube C\_pgH5QhIZ8 >}}
    
  
3.  ### Subclass
    
      
    
    Whate line could replace `____blank____` to create a class that inherets from `Animal` in the code below?
    
    ```
    ____blank____
    ```
    
    Exercise 2
    
    &nbsp;class Dog(Animal):&nbsp;
    
    &nbsp;class Animal(Dog):&nbsp;
    
    &nbsp;class Dog(object)&nbsp;
    
  

With this definition of Dog, you run a program with line1, line2, and line3 above. What happens? Refer to the lecture slides for the code making up the "Animal" class.

Exercise 3

&nbsp;Error on (line1) because Dog does not have an \_\_init\_\_&nbsp;

&nbsp;Uses the \_\_init\_\_ from Animal, but then an error (line2) because Dog does not have a set\_name method.&nbsp;

&nbsp;Uses the \_\_init\_\_ and set\_name from Animal, but then an error (line3) because all methods must return something.&nbsp;

&nbsp;Runs, creates a Dog object with age=7 and name="Ruffles", and prints "ruff ruff"&nbsp;

CheckShow Answer Videos

{{< youtube 8s0d87sjy1A >}}