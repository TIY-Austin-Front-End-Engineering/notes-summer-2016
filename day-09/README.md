[Table of Contents](/README.md)

# Day 09 - JS Introduction, Conditional logic, Event Listeners

## Review
see review example

## Challenge
See TIYO for var and assignment worksheet

## Notes
- Break down your problems into smaller steps!
  - Think about "ingredients" - what stuff do you need to make your code work? Create variables for all of your ingredients
  - Think about actions - can you accomplish that action by assigning or reassigning a value? can you accomplish that action by using an operator (such as addition)
  - Don't forget to PROVE YOUR CODE WORKS every step of the way by using `console.log`! When in doubt, log it out!
- DOM accessors
  - DOM document object model
  - `document.querySeletor()` - take any css selector and find the FIRST MATCHING ELEMENT
  - `document.querySeletorAll()` - grabs **all** matching elements from the DOM and puts them in an ARRAY LIKE OBJECT
  - `document.getElementById()` - takes an id and grabs the matching element from the DOM
  - `document.getElementsByClassName()` - takes a classname and grabs all matching elements and puts them in the array like object
- Event Listeners
  - DOM events - anything our computer can tell us about what the user is doing to interact with our document
    - eg: mousemove, scroll, click, keypress, etc
  - an event listener is a way to notice or care that one of these events has occurred
  - `element.addEventListener('nameOfEvent', functionToRun)`
    - where `element` is an HTML element that we accessed from the DOM
    - where `nameOfEvent` is eg: `click` `mouseover` `keypress`
    - where `functionToRun` is a function or function name that runs some code
- Functions
  - functions can take parameters inside their parentheses
    - parameters are like variables - they are names for values
    - parameters are scoped to the function they belong to
    - this is called **function scope** which differs from **global scope**
- Conditional Logic
  - making decisions on what to do based on some condition
  ```js
  if (condition) {
      // stuff  to do
  }
  ```
  - where `condition` is anything at all tested for truthiness
  - if the condition  coercion results in truth we will run the stuff to do code
  - we can string multiple conditions together using `else` and more `if`
  ```js
  if (condition) {
      //stuff to do
  } else if (other condition) {
      //other stuff to do
  } else {
      // catch all for any other cases
  }
  ```

## Resources
- [Event names](https://developer.mozilla.org/en-US/docs/Web/Events)
