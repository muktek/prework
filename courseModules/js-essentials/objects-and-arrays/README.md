# JS Essentials - Objects and Arrays

## Overview

This section is primarily focused reenforcing and expanding your understanding of the fundamentals of Javascript. We will cover all of the concepts from this video series during the 12-week course, however, you will derive a lot more benefit from the course if you have familiarity with essential concepts of the language and the Javascript console.  

We are recommending that you work through this excellent video-course:

**[Javascript Essentials](https://www.udemy.com/javascript-essentials/)** | Udemy

A small proportion of the information in this video-course is review, but there is a lot of new information and many of explanations of core language concepts are deeper than the demos on codeacademy.

Our goal in this *Javascript Essentials*  section is to provide you with a deeper knowledge of the fundamentals of the language and help you form an understanding of general programming. When you truly understand the language fundamentals, you will increase your problem solving abilities, you will understand the tools you use, and you will have greater longevity as a developer.

## Learning Objectives

- Conceptual understanding of objects v. arrays.
- Accessing nested properties in arrays/objects
- Using bracket notation to dynamically access object properties.

## Assignment

Complete:

- [Lecture-13: Objects & Arrays](https://www.udemy.com/javascript-essentials/learn/v4/t/lecture/4275884?start=0)
- [Lecture-14: Embedding Objects & Arrays](https://www.udemy.com/javascript-essentials/learn/v4/t/lecture/4275886?start=0)
- [Lecture-15: Member Access](https://www.udemy.com/javascript-essentials/learn/v4/t/lecture/4275888?start=0)
- [Lecture-16: Computed Member Access](https://www.udemy.com/javascript-essentials/learn/v4/t/lecture/7166408?start=0)
- [Lecture-17: Member Creation, Assignment, Deletion](https://www.udemy.com/javascript-essentials/learn/v4/t/lecture/4275890?start=0)

---
#### Questions to answer

##### Lecture-13: Objects & Arrays
1. What is a good real-life example of an object? What is a good real-life example of an array?

2. Why is an array a special type of object?

3. Why do we store objects in variables?

##### Lecture-14: Embedding Objects & Arrays

1. Would you execute the function in this array

  ```js
  var greetingsArr = [
    'hello',
    function(name){ return "hi, " + name },
    'what\'s up?',
    'yo'
  ]

  ```

##### Lecture-15: Member Access

1. How would you access the `postcode` value on the `result` variable?

2. How would you access the age of carolina on the `children` array on the `result` variable?

  ```js
  var result = {
    data: {
      gender: "male",
      name: {
        title: "mr",
        first: "nélio",
        last: "lima"
      },
      location: {
        street: "1173 rua maranhão ",
        city: "mossoró",
        state: "distrito federal",
        postcode: 44680
      },
      children: [
        {
          name: 'alejandra'
          gender: 'female',
          age: 4
        },
        {
          name: 'carolina',
          gender: 'female',
          age: 7
        }
      ]
    },
    info: {
      version: 1.1,
      seed: "33da28784f117ada"
    }
  }
  ```

##### Lecture-16: Computed Member Access

##### Lecture-17: Member Creation, Assignment, Deletion

1. How would you access the value located at `rom_med.png`?
  *note: `profile.images.200px` throws a syntax error*

2. What value will be logged to the console.log in the code below with `profile[name]`?

3. How do I changes the `nickName` property to the string `'Romulus'`?

4. How can I delete the `password` property?

  ```js
  var profile = {
    properName: "Romina",
    nickName: "Romy",
    age: 18,
    password: 'secretpassw0rd',
    images: {
      '100px' : 'rom_tn.png',
      '200px' : 'rom_med.png',
      '300px' : 'rom_lg.png'
    }
  }

  const informalNote = false

  let name
  if(informalNote === true){
    name = 'nickName'
  } else {
    name = 'properName'
  }

  console.log( profile[name] )

  ```

---
