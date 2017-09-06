# JS Basics

## Overview

The front-end of the web is composed of three languages:

+ HTML  : Structure & Content
+ CSS : Styles
+ <mark>JavaScript : Behavior/Interactivity</mark>

This module focuses on Javascript, the language used for making webpages interactive. Here are some examples of Javascript interactivity from Facebook:
  - The application displays more comments when I click on the 'Comments' link
  - The color of the 'Like' icon changes and the text abobe reads when 'You and ... others' when I click the 'Like' Icon
  - The list of comments change when I click 'Top Comments' or 'Most Recent'.
  ![demo-js](/assets/images/js-demo.gif)



Javascript has grown in popularity and developers now use the language on the client-side (for user-interface logic) and on the server-side (for business/database logic).

In the modules for this section, we are going to practice and re-practice the basics of the language. Finally, in the next module, we will see how to use Javascript to make a webpage respond to user actions.

## Learning Objectives

The goal of this module is to develop familiarity with basic Javascript syntax and programming logic.

- JS Basic Syntax
  - `console.log()`
  - data types
    - Strings
    - Numbers
    - Booleans
    - `null`
  - variable declarations (`let`, `const`)
  - combining strings
  - simple math operations


- JS Control Flow
  - How to make different blocks of code run with `if()...else...` statements
  - Comparators: `>`, `<`, `===` , `!==`
  - Logical Operators: `&&` + `||` to evaluate the truth/falsity of multiple assertions.
  - adding extra conditions with `else if(...)`


## Assignment

#### Complete *Introduction to Javascript* , *Variables* and , *Control Flow* , and * modules on codeacademy
- [Codeacademy: Introduction To JavaScript](https://www.codecademy.com/courses/learn-javascript-introduction/lessons/introduction-to-javascript/exercises/intro)
- [Codeacademy: Variables](https://www.codecademy.com/courses/learn-javascript-introduction/lessons/variables/exercises/intro-variables)
- [Codeacademy: Introduction to Control Flow](https://www.codecademy.com/courses/learn-javascript-control-flow/lessons/control-flow/exercises/control-flow-intro) (if-else)

<small>**NOTE:** You will need to register a free account with codeacademy. You do not have to pay for the service to take this mini-course.</small>

---
#### Questions to answer

1. What is the purpose of `console.log(...)`?

2. What are differences between these data types:
  + String
  + Number
  + Boolean
  + `null`

3. What is an instance of a string? How do we access more information about the string (like it's length)?

4. What does a built-in method allow us to do (ex: `.toLowerCase()`)? Do built-in methods change the value of the original instance?

5. What are some operations that the `Math` library provides?

6. What is one way that you can create a comments in your code? Why are code comments useful?

7. How can you create a variable in javascript? Why are variables useful?

8. What is the difference between `let` and `const`?

9. What is an 'undefined' variable?

10. How can you combine (interpolate) two or more strings?

11. What is the purpose of an `if()...else` statement? What kind of value goes inside the parentheses for the `if(...)`?

12. What is the difference between a 'truthy' value and `true`? What are some examples of 'falsy' values in JS?
  - *Note: this is an idiosyncrasy of Javascript*

13. Which will code block will print to the console for `(a)` and `(b)`? Why?
  ```js
  let yourName = ''
  let zeroHero = 0

  //(b)
  if(yourName){
    console.log('Your name is blank');
  } else {
    console.log('Nobody knows your name');
  }

  // (b)
  if(zeroHero){
    console.log('Hero');
  } else {
    console.log('Zero');
  }
  ```
---

16. What are the values of `passedTest`, `txtResult`, and `numResult`?
  ```js
  let passingScore = 60;
  let myScore = 77;
  let passedTest = myScore > passingScore;

  let numResult = 3 + 3 === 6;
  let txtResult = 'Mister Potato' !== 'mister potato';
  ```

17. Where is it normally useful to apply the `===` and `!==` operators?

18. Which code blocks will run for `(a)`, `(b)`, `(c)`, `(d)`?

 ```js
 let feelingHappy = true;
 let isWarmOutside = false;
 let isCloudyOutside = false;

 //(a)
 if( feelingHappy === true && isWarmOutside === true){
   console.log('Wear a red shirt');
 } else {
   console.log('Wear a blue shirt');
 }

 //(b)
 if( feelingHappy === true || isWarmOutside === true){
   console.log('Wear a green shirt');
 } else {
   console.log('Wear a yellow shirt');
 }


 //(c)
 if( feelingHappy === true && isWarmOutside === false ){
   console.log('Wear a purple shirt');
 } else {
   console.log('Wear a brown shirt');
 }

 //(d)
 if(
   feelingHappy === true ||
   (isWarmOutside === true && isCloudyOutside === true)
 ){
   console.log('Wear a purple shirt');
 } else {
   console.log('Wear a brown shirt');
 }
 ```
