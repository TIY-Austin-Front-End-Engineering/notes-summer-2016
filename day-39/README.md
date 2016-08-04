[Table of Contents](/README.md)

# Day 39 - Promises

## Review
- Kinvey and React

## Challenge
Print your current latitude and longitude to the console.

## Notes
- Promises
  - Promises allow chaining of asychronous code using `.then` syntax
  - jquery's ajax requests are promises, so you can use `.then` syntax instead of the 'success' callback syntax
  - to write a promise:
    - build a function
    - create a new instance of a promise in that function
    - return the promise instance from the function
    ```js
    function wait5secs() {
      const promise = new Promise((resolve, reject) => {
        // do promisey stuff here
      });
      return promise;
    }
    ```
  - a promise constructor always takes a single callback function as its only argument
  - that callback will take 2 functions as its arguments.
    - the first should be called when the conditions of the promise are successfully resolved
    - the second should be called when the conditions of the promise have failed

## Resources
