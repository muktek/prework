# JS Essentials - Functions + Conditionals

## Overview

This section is primarily focused reenforcing and expanding your understanding of the fundamentals of Javascript. We will cover all of the concepts from this video series during the 12-week course, however, you will derive a lot more benefit from the course if you have familiarity with essential concepts of the language and the Javascript console.  

We are recommending that you work through this excellent video-course:

**[Javascript Essentials](https://www.udemy.com/javascript-essentials/)** | Udemy

A small proportion of the information in this video-course is review, but there is a lot of new information and many of explanations of core language concepts are deeper than the demos on codeacademy.

Our goal in this *Javascript Essentials*  section is to provide you with a deeper knowledge of the fundamentals of the language and help you form an understanding of general programming. When you truly understand the language fundamentals, you will increase your problem solving abilities, you will understand the tools you use, and you will have greater longevity as a developer.

## Learning Objectives
- Function scope and execution context.
- Function Parameters
- Difference between `==` and `===` in JS.
- More practice with boolean operators

## Assignment

Complete:

- [Lecture-12: Functions & Subroutines](https://www.udemy.com/javascript-essentials/learn/v4/t/lecture/4275892?start=0)
- [Lecture-27: Comparison Operators](https://www.udemy.com/javascript-essentials/learn/v4/t/lecture/4275892?start=0)
- [Lecture-28: If Statements](https://www.udemy.com/javascript-essentials/learn/v4/t/lecture/4275904?start=0)
---
#### Questions to answer

##### Lecture-12: Functions or Subroutines

1. What is the difference between a function parameter and a `var` variable?

2. Is it possible to access the value of `quantity` as shown in the `console.log(...)`. Why or why not?

```js
function makeInstruction(num, measurement, item){
  var quanity = "Add" + num + unit +  " of "
  var instruction = quantity + item
  return recipe
}

makeInstruction(2, 'cups', 'flour') //Add 2 cups of flour
console.log(quantity)
```

##### Lecture-27: Comparison Operators

1. What is the boolean value of the following expressions?
  ```js
  //(a)
  10 == 10

  //(b)
  10 !== 12

  //(c)
  "Will" === "Will"

  //(d)
  null === undefined

  //(e)
  12 === '12'

  //(f)
  !false === true
  ```

2. Why should we use the `===` instead of `==`?


##### Lecture-28: If Statements

1. What is the boolean value of the following expressions?

  ```js
  var userScore = 80
  var passingScore = 65
  var excellentScore = 94
  var medianScore 60
  var privilegedUser = true

  // (a)
  userScore > passingScore &&   userScore > excellentScore

  // (b)
  userScore > passingScore || userScore > excellentScore

  //(c)
  privilegedUser || userScore > excellentScore

  //(d)
  medianScore < passingScore && (userScore < medianScore || privelegedUser)

  //(e)
  !(medianScore > passingScore) || userScore > excellentScore

```

---
