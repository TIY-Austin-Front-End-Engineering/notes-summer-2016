[Table of Contents](/README.md)

# Day 11 - Functions, Built in Objects/methods, value vs. reference

## Review
- toolkit
  - storing information in variables
  - access the DOM to get HTML elements
  - add event listeners to those elements
  - Conditional logic - if/else statements
  - console.log to prove you are doing what you think you're doing

## Challenge
- create a like button that increases its displayed value each time it is clicked:
![](https://raw.githubusercontent.com/TIY-Austin-Front-End-Engineering/jquery-like/master/likes.gif)

## Notes
- hoisting
  - variable declarations are hoisted to the top of their scope (either global or function)
  - function declarations are also hoisted to the top of their scope
  - however, variable assignment is NOT hoisted
- more detail about js functions
  - block of code that does stuff
```js
  // syntax for declaring a function; prefer the first for hoisting purposes
  function myCoolFn() {}
  var myCoolFn = function() {}
```
  - we must call a function to run it.
```js
  nameOfFunction();
```
  - parameters
    - what goes inside the m&ms of a function declaration
    - locally defined variables aka labels for values the function might used
    - scoped to the function!
  - arguments
    - what goes inside the m&ms of a function call / invocation
    - one argument for each parameter, they are order specific, extra arguments that don't have named params will be ignored
  - return statements
    - functions that have no return value ONLY perform side effects aka they DO stuff but have undefined value
    - in order for a function call to have a value other than undefined, we must **return** something from that function
  - evaluation vs declaration
    - function calls by default evaluate to undefined
    - they will evaluate to their return value if they have one.
    - function declarations always evaluate to undefined, just like variable declarations
- more about the types
  - number operators
    - `+ - / *`
    - shortcut to update a variable `+=`
    - `number++` `++` increment operator adds 1 to a number value; it will MUTATE that variable
    - `--` decrement operator subtract 1 to a number value; it will MUTATE that variable
  - string props/methods
    - recommend running string props/methods ON the variable that stores the string rather than the sting itself
    - `string.length` equals the number of characters in a string
      - where `string` is ANYTHING THAT EVALUATES TO A STRING
  - array props/methods
    - `array.length`
    - be aware that many array methods mutate the original array
  - pass by value vs pass by reference
    - labels that point to primitive values store THE VALUE not a reference to it.  
    ```js
    var a = 0;
    var b = a;
    a = 1;
    b //evaluates to 0;
    ```
      - they forget where they got their value from
    - not so for arrays and objects. they store a reference;
    ```js
    var a = [1,2,3]
    var b = a;
    a[0]=5;
    a; // evaluates to [5,2,3];
    b; // evaluates to [5,2,3];
    ```
  - built in objects
    - document object
    - HTML element object
    - event object
      - the argument that was automatically passed into our event listener function by the browser
    - Math object
      - does math for you!
      - `Math.random()` givs a random number between 0 and 1
      - `Math.ceil()`
      - `Math.floor()`
      - `Math.round()`
      ```js
      // random number between 1-10
      Math.ceil(Math.random()*10)
      ```
    - console
      - `console.log()`
      - `console.assert()`
    - window object
      - declaring global variables
<!-- - updating the `window.location.hash` -->

## Resources
- [String docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Array docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
