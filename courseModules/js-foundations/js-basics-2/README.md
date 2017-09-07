# JS Basics - Part 2

## Overview

This module focuses on Javascript **functions**. A function is simply a block of code that can be re-used to perform a task. Mastering functions are critical to becoming a skilled developer because:

+ we can reuse useful code in multiple areas of an application
+ it makes our code more readable


## Learning Objectives

The goal of this module is to develop familiarity with writing functions, executing them, and understanding their behavior in an application.


## Assignment

#### Complete
- [Codeacademy: Introduction To Functions](https://www.codecademy.com/courses/learn-javascript-functions/lessons/functions/exercises/intro-to-functions)
- [Codeacademy: Scope](https://www.codecademy.com/courses/learn-javascript-scope/lessons/scope/exercises/scope)


This module should take about **2 - 5 hours** to complete.

<small>**NOTE:** You will need to register a free account with codeacademy. You do not have to pay for the service to take this mini-course.</small>

---
#### Questions to answer

1. What is the difference between `(1)` and `(2)`
  ```js
  //(1)
  function sendMessage(){
      console.log(' > hello!')
  }

  //(2)
  sendMessage()
  ```

2. What is the difference between the two values in the parentheses between `(1)` and `(2a)`/`(2b)`
  ```js
                        //(1)
  function createMessage(msgText){
    console.log(` > ${msgText}`)
  }

                  //(2a)
  createMessage('Good Morning!')
                  //(2b)
  createMessage('How is your day?')
  ```

3. How do we capture a value from a function and store it in a variable (like in the variable `msg1`)? What is missing in this code?
  ```js
  function createMessage(msgText){
     `> ${msgText}`
  }

  let msg1 = createMessage('Adios!')
  console.log(msg1)
    // --> undefined
  ```

4. What is the syntax difference between a **function declaration** and a **function expression**

5. In your own words what is the idea of **(variable) scope** in Javascript?

6. Based on your understanding of scope, What will `userReport()` print to the console?
  ```js
  function userReport(){
      userType = 'admin'
      userReputation = 20
      console.log(`user : ${userName}`)
      console.log(`type : ${userType}`)
      console.log(`reputation : ${userReputation}`)
  }

  let userName = 'Jimmy'
  let userReputation = 4

  userReport()
  ```


---
