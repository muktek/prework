# JS Basics - Part 3

## Overview

This module focuses on Javascript **arrays** and **loops**. A array is a way to create an ordered list of items in Javascript. A loop is an operation we can perform to execute a block of code x number of times. Arrays and loops are complementary because in most programs/applications, you will have a list of items and you will want to do something for each item in the list.


## Learning Objectives

The goal of this module is to develop familiarity with:
- Array syntax
- Loop syntax (primarily for loops),
- Looping over arrays

## Assignment

#### Complete
- [Codeacademy: Arrays](https://www.codecademy.com/courses/learn-javascript-arrays/lessons/arrays/exercises/arrays)
- [Codeacademy: Loops](https://www.codecademy.com/courses/learn-javascript-scope/lessons/scope/exercises/loops)


This module should take about **1 - 2 hours** to complete.

<small>**NOTE:** You will need to register a free account with codeacademy. You do not have to pay for the service to take this mini-course.</small>

---
#### Questions to answer

```js
let familyList = [
  'Jason',
  'Marisa',
  'Haley',
  'Zoey',
  'Rylan',
  'Maisey'
];
```

1. How would you access the first element, `'Jason'`, in the `familyList` array?

2. How would you access the third element, `'Carolyn'`?

3. How would you change the 2nd element of the list (`Marisa`)?

4. How would you add a new string (`'Luke'`) to the end of the `familyList` array?

5. How would you remove 3 items from the end of the `familyList` array?

6. Explain the loop syntax in your own words
  ```js
  for(
    var indexNum = 0; /*(1)*/
    indexNum < familyList.length; /*(2)*/
    familyList++ /*(3)*/
  ){
      /*(4) - familyList[index] */
     console.log(`familyMember: ${familyList[i]}`)

  }
  ```

7. When would you use a **nested loop** (a loop inside a loop)?

8. What causes an **infinite loop**?
---
