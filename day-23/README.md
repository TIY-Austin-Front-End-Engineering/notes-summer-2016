[Table of Contents](/README.md)

# Day 23 - Underscore, Backbone

## Review
- setInterval lag on refresh
  - wait to empty the area until you have everything ready to be loaded back in (don't do it before your ajax is successful, for example)

## Challenge
use jquery's ajax and the underscore library to group the data found at `tiny-za-server.herokuapp.com/collections/unicorns` into an object whose keys are color names and values are the unicorns of that color.

## Notes
- Underscore
  - a functional utility library that makes manipulation of data sooo much easier
  - includes functions that work on arrays, objects, or either.
  - all functions are namespaced with the `_` character, like so:
  ```js
  _.map(anArray, aCallback);
  ```
- Backbone  
  - Router  
    - configure with
      - list of routes,
      - function or each route
    - turn it on
      - create an instance of it (`var router =  new Router()`)
      - start watching for hashchanges: `Backbone.history.start()`
    - parameterized routes
      - have a `:` in their path name
      - whatever comes after the `:` will be passed to the function as an argument
  - Model
    - configure with
      - default values,
      - a root URL so they know where to save to
      - any custom methods they should be able to do
    - create instances
      - you can pass in attributes for them when you create them
      - you can set new attributes by using the `.set()` method
      - you can get the attributes by using the `.get()` methods
      - you can save it to the server with the `.save()` method

## Resources
- [our codepen groupby example](http://codepen.io/nicerhugs/pen/bZYQyV?editors=0011)
