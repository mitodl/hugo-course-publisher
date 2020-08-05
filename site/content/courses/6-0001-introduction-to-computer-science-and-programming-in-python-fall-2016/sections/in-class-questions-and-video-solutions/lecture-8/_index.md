---
title: Lecture 8
course_id: 6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016
type: course
layout: videogallery
menu:
  6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016:
    identifier: ffd17f7bb2323aab9bf41b8697c77ccd
    name: Lecture 8
    weight: 120
    parent: cc74bf5b1a22399e271270abfff469d7
---
1.  ### Class Definition
    
      
    
    Which of the following is a good and valid definition for a class representing a car?
    
    Exercise 1
    
    &nbsp;`def class Car(object):`&nbsp;
    
    &nbsp;`class Car(object):`&nbsp;
    
    &nbsp;`def Car(object):`&nbsp;
    
    &nbsp;`class A(object)`&nbsp;
    
    CheckShow Answer Videos
    
    {{< youtube vqn\_yk5aFcI >}}
    
  
3.  ### Class Instance
    
      
    
    Using the class definition below, which line creates a new Car object with 4 wheels and 2 doors?
    
        class Car(object):
    
    Exercise 2
    
    &nbsp;`Car(mycar, 4, 2)`&nbsp;
    
    &nbsp;`mycar = Car(4, 2, "white")`&nbsp;
    
    &nbsp;`mycar = Car(4, 2)`&nbsp;
    
    &nbsp;`mycar = Car(2, 4)`&nbsp;
    
    CheckShow Answer Videos
    
    {{< youtube 2\_\_KumJsGXc >}}
    
  
5.  ### Methods
    
      
    
    Which of the following methods changes the color of the car, based on the definition below?
    
        class Car(object):
    
    Exercise 3
    
    &nbsp; def paint(c): &nbsp;
    
    &nbsp;def paint(self, c): &nbsp;
    
    &nbsp;def paint(c): &nbsp;
    
    &nbsp;def paint(self, c): &nbsp;
    
    CheckShow Answer Videos
    
    {{< youtube goalLDamePE >}}
    
  
7.  ### Method Call
    
      
    
    You create a car with `mycar = Car(4, 2)`. Which is a line of code to change the color of mycar to "red"?
    
        class Car(object):
    
    Exercise 4
    
    &nbsp;Car.paint("red")&nbsp;
    
    &nbsp;mycar.paint(red)&nbsp;
    
    &nbsp;mycar.paint("red")&nbsp;
    
    &nbsp;mycar.paint(Car, "red")&nbsp;
    
    CheckShow Answer Videos
    
    {{< youtube \_ax4eNMI9Dw >}}
    
  
9.  ### Special Methods
    
      
    
    With the code below, what does the line `print(mycar == yourcar)` print?
    
        class Car(object):
    
    Exercise 5
    
    &nbsp;True&nbsp;
    
    &nbsp;False&nbsp;
    
    &nbsp;An error&nbsp;
    
    CheckShow Answer Videos
    
    {{< youtube qq7I2MQNrtU >}}