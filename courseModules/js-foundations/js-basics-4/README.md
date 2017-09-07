# JS Basics - Part 4

## Overview

This module focuses on Javascript **objects**. A object is a way to group a related set of properties in Javascript. Objects are important because we can describe an entity in by assigning it multiple key value pairs. We can also enhance the entity with custom behavior by adding 'methods' or functions to the object.

Objects are a critical feature of the language, and most high level programming and data management in an application deals with manipulating and using objects.

## Learning Objectives

The goal of this module is to develop familiarity with:

- Object syntax
  - creating new objects with `{}` syntax and assigning properties  
  - accessing properties' values
    - dot-notation: `obj.gender`
    - bracket notation: `obj['gender']`
  - accessing elements of arrays
    - `obj.friendList = ['Ben', 'Matt', 'Ed']`
    - `obj.friendList[0]`


- Object methods
  - how to assign and execute a method on an object
  - how to access object properties from inside the function.

## Assignment

#### Complete
- [Codeacademy: Objects](https://www.codecademy.com/courses/learn-javascript-objects/lessons/objects/exercises)

This module should take about **1 - 3 hours** to complete.

---
#### Questions to answer

```js
let carObj = {
  make: 'Ford',
  model: 'Escape',
  year: 2010,
  features: [ 'awd', 'moonroof', 'leather seats']
}
```

1. Why are objects useful?

2. What are the 2 ways to access the value of the `carObj` object's `make` property?

3. How do you access the value for `'moonroof'`

4. How would you complete the `getTotalPrice()` method to calculate the price (the `listedPrice` minus the `discount`).
  ```js
  let carObj = {
    product: 'iPhone 6',
    discount: .2,
    listedPrice: 500,
    getTotalPrice: function(){
      //.....
    }
  }
  ```
---
