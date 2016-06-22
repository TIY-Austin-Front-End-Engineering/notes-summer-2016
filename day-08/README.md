[Table of Contents](/README.md)

# Day 08 - JS Intro

## Review
- git clone - a way of making local copy a remote repository on your machine
  - `git clone <remote repo path> <local folder path>`

## Challenge
Recreate this using only one block level element:

![talking bubble](../images/talking-bubble.png)

## Notes
- linking in a js file
  - use the `<script>` tag.
  - include as the last element in your `<body>` tag
  - `<script src="path/to/js/file.js" type="text/javascript"></script>`
- js types
  - string
    - any text value, could be whole paragraphs or just a single letter, or numbers as strings
    - denoted with quotation marks
    - prefer single quotation marks
    - `'this is a string!'`
  - numbers
    - any number value, could be with or without decimal points
    - also NaN (not a number), Infinity
    - `5` `NaN`
  - booleans
    - the values `true` or `false`
  - undefined
    - the default nothing value of variable and some code expressions when they evaluate
  - null
    - the expressly empty value of nothing. usually set by the developer
- evaluation
  - every JS expression evaluates to a value
  - primitive types evaluate to their primitive value
- variables
  - containers to store values
  - declaration `var variableName;`
    - evaluates to undefined;
  - assignment `variableName = 5;`
    - evaluates to the evaluation of the right side of the expression
  - usually do both at once `var variableName = 5;`
- js operators
  - used in JS expressions; the expression will evaluate out and the operator will be forgotten
  - math operators
    - `+ - / * %`
  - assignment operator
    - `=`
  - string operators
    - `+` "concatenation operator"
  - equality operators
    - `< > <= >= === == !==`
      - double equal coerces values
      - triple equal ("strict equality") does not coerce
- coercion
  - we can turn any value (ANY VALUE) in javascript into one of the 3 primitive types via coercion
  - to coerce to a string: `String(value)`
  - to coerce to a number: `Number(value)`
  - to coerce to a boolean: `Boolean(value)`
- object and array syntax and accessors
  - objects and arrays are MADE UP OF other types - they are not primitives
  - array: indexed list of items
    - the items in an array don't have labels or names
    - `[1, 4, 65, 23, 132]`
      - square brackets `[]` denote an array
      - values are separated by commas
      - values can be anything
      - zero indexed - the first item is the zeroth item
      - accessing items in an array
        - square brackets ALSO access values in an array
        - `arrayName[indexValue]` evaluates to the indexValueth item in arrayName
  - object: key and value pairs, where values can be ANY TYPE or value
    - items in objects don't have any inherent order
    - they are indicated by their property name (aka key, aka label)
    - we use `{}` to denote an object
      ```
      {
        name: 'Jess',
        favoriteThings: ['unicorns', 'cats', 'swing music'],
        age: 32
      }
      ```
      - key value pairs are separated by commas
      - key and its value are separated by a colon
      - keys can have any valid variable name
      - keys are also called properties
    - accessing items in an object
      - the `.` is a property accessor. anytime you see a `.` that means the thing on the left is an object, and the thing on the right is a property name
      - `jessObject.favoriteThings` evaluates to the favoriteThings property's value on the jessObject object.
- functions
  - declaration:
  ```
  function functionName() {
    // reusable code block
  }
  ```
  - functions are blocks of code that do something.
  - we can give them names in order to use and reuse them
- document
  - the document object is the JS representation of our HTML document
  - we can access the document with the `document` variable.
  - we can access any elements in the document with the `querySelector` property like this:
  ```js
  document.querySelector('anyCssSelector')
  ```
  - if we want to see an html element in its JS representation in our console, use this:
  ```js
  console.log(document.querySelector('div'));
  ```

## Resources
