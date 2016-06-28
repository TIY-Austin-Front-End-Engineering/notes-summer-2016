[Table of Contents](/README.md)

# Day 12 - location.hash, Loops, forEach, filter, map reduce

## Review
- reverse a string
  - splitting strings is awesome
  - array methods are plentiful, don't reinvent the wheel
- true or false on a vowel
  - or ||  / and && character


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
- Array methods! - the loop's more user friendly cousin!
  - forEach
  - filter
    - returns an array always
    - takes a function as its argument
    - the argument function is called a callback
    - callback functions always receive their arguments by their calling functions, not by us
    - we can only give names to those parameters
    - in the callback we must return a truth test. that truth test determines what gets put into my new array
  - map
    - returns a new array
    - it is the same length as the original array
    - it's values are related to the original array, but different
  - reduce

## Resources
