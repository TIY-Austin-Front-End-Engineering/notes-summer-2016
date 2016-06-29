[Table of Contents](/README.md)

# Day 13 - forEach, filter, map, reduce, jquery

## Review
- cdn, css reset
  - cloud server network
  - css reset equalizes starting point across browsers
- add class
  - `element.classList.add('className')`
  - where element is an HTML element that was accessed from the DOM
  - where className is the name of the class you want to add to the element
  - this only works on an individual element, not a list of elements
- formatting stuff we put into the DOM

## Challenge
Write a function called sum that will return the sum of ANY NUMBER of arguments. eg:
```js
sum(1, 2, 5) // evaluates to 8
sum(4, 2) // evaluates to 6
sum(9, 34, 25, 1, -3) //evaluates to 66
```
HINT: you will need the special `arguments` keyword

## Notes
- finish the array method examples
  - if you need to filter and map to get your answer, make sure you filter first! or you won't have access to the full item
  - the sandwich analogy:
    - we can first filter all the ingredients in the house to be just the ingredients needed for a sandwhich
    - map over them to get sliced ingredients
    - reduce them into sandwiches
    - forEach to eat them (no return value, just does something)
  ![](../images/map-reduce.png)
- jquery
  - used for:
    - DOM manipulation
    - Event handling
  - include in project
    - include in a script tag pointing to the jquery cdn
  - select elements
    - `$()`
  - get vs set
    - `.text()`, `.html()`
  - create an element
    - `$('actualHTMl')`
      - where `actualHTML` is a string of html to create
  - `.append()`, `.prepend()`
  - `.addClass()`, `.removeClass()`
  - `.on()`
  - `.toggleClass()`

## Resources
