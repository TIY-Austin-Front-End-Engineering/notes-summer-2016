[Table of Contents](/README.md)

# Day 12 - location.hash, Loops, forEach, filter, map reduce

## Review
- reverse a string
  - splitting strings is awesome
  - array methods are plentiful, don't reinvent the wheel
- true or false on a vowel
  - or ||  / and && character
  - `||` will evaluate to the **first** truthy value it finds, or the last falsy value. `1 || 2` evaluates to`1`, which is truthy. `0 || 2` evaluates to `2` which is also truthy.
  - `&&` will evaluate to the **last** truthy value it finds or the first falsy value. `1 && 2` evaluates to `2`, `0 && 2` evaluates to 0

## Notes
- location.hash
  - listen to it!
    -  `window.addEventListener('hashchange', functionName)`
  - update it!
    - use an anchor tag with a `#` preceded href
    - do it programmatically with `location.hash = 'someLocation'`
      - where `someLocation` is the string after the hash
- what is a render function?
  - a function that puts content into the DOM
- accessing properties in an object
  - use `.` notation when you know the name of the property and are accessing it directly
  - use `[]` "bracket" notation when you have the property name in string form OR stored in a variable.
```js
var userRequest = 'ponies';
// all three of these are accessing exactly the same values
data.ponies.title;
data['ponies'].title;
data[userRequest].title;
```
- Loops!
  - for
    ```js
    for (startingCondition; testForCompletion; afterEachLoopDo) {
      //code to run every time the loop goes
    }
    ```
    ```js
    for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
    ```
      - where `startingCondition` is usually a counter variable declaration: `var i = 0;`
      - where `testForCompletion` is usually the length of an array or the number of times to do the loop `var i < array.length;`
      - where `afterEachLoopDo` is usually an incrementer on the counter: `i++`
      - inside the loop we usually reference the ith element in the array `array[i]`
  - loop over elements to add event Listeners
  - loop over elements to remove a class from each one
  - loop over elements to change their contents all at once
- Callback methods  
  - a function that is passed to another function as an argument is called a callback function
  - callback functions always receive their arguments by their calling functions, not by us.
  - we can only give names to those parameters, or leave them unnamed and ignore them.
  - examples - click handlers, array methods:
- Array methods! - the loop's more user friendly cousin!
  - all 4 take a callback function as their argument
  - the callback will be called for each item in the array. It receives each item in the array one at a time as its argument
  - `.forEach()`
    - does not return anything, only DOES STUFF aka has side effects
    - useful for putting a list of things into the DOM, or console logging a bunch of things individually
  - `.filter()`
    - returns an array
      - that array contains the same values as the original array, but potentially FEWER of them
    - in the callback we must return a truth test. that truth test determines what gets put into my new array
  - `.map()`
    - returns a new array
      - it is the same length as the original array
      - it's values are related to the original array, but different
    - in the callback we return the value we want to be placed in the new array
  - `.reduce()`
    - the only one whose callback differs.
    - returns a single item of our chosing - it could be an array, object, string, whatever
    - we build that object over time by returning it from the callback function.

## Resources
- [array.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach)
- [array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
