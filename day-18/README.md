[Table of Contents](/README.md)

# Day 18 - AJAX PUT POST DELETE

## Review
- turning repeated code into DRY code with functions
- filter, map, reduce functions MUST return something! Otherwise, just use forEach
  - forEach - nothing to store!
    - applies a callback function to every item in an array
    - RETURNS NOTHING. great for doing stuff, like logging or adding to the console.
  - filter
    - filters an array via boolean test,
    - returns whole items from the original array in a new arry
  - map
    - applies a callback to each item in an array
    - returns a new array full of the return value of the callback
  - reduce
    - applies a callback to each item in an array as well as the return item from the previous call
    - returns a single something, the ultimate return value of the callback
- moving the function outside the success/event listener/filter etc.
  - copy the whole function declaration
  - give it a name
  - refer to it by its name, without the m&ms when you pass it as the argument

## Challenge
- use `setTimeout()` to create a button that becomes disabled and displays: 'loading...' after it is clicked. It should return to normal after 4 seconds.
- [my solution](http://codepen.io/nicerhugs/pen/Lkjpja?editors=1011)

## Notes
- REST - representation state transfer
  - RESTful api, REST architecture
  - Tiny Pizza Server, a basic REST api:  `http://tiny-za-server.herokuapp.com/collections/<anythingYouWant>`
  - Stores "noun-based" data for an application in "endpoints", or "services"
  - We can interact with those endpoints with the HTTP verbs by making AJAX requests
  - collection endpoints are usually pluralized noun names eg `/unicorns`
  - individual items are usually "namespaced" by id after the collection eg `/unicorns/uniqueID`
- POST - create a new item on the server
  - must include a `data` property in the ajax settings object. That data should be a javaScript object.
- DELETE - delete a single item on the Server
  - should be namespaced by id
- PUT - modify (edit, update) a single item on the server
  - should be namespaced by id
  - must include a `data` property in the ajax settings object that includes ONLY the data you want to modify
- Data attribute, storing state in the DOM
  - prefer storing arbitrary data in `data-<something>` attributes if using the DOM to store data is necessary
  - access those attributes using the `.data()` method in jQuery

## Resources
