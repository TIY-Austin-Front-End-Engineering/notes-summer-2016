[Table of Contents](/README.md)

# Day 28 - Review, BB Views, Data Store

## Review

## Challenge

## Notes
- specific backbone methods for models, collections, Views
  - model methods
    - `.save(objectOfAttributes)` - saves a model to the server, based on the idAttribute and urlRoot properties; it will fire a change event; takes an object of attributes we want to save to our model; will `POST` or `PUT` depending on whether that model already has an id
    - `.fetch()` - GET a model from th server based on its urlRoot and idAttribute; fires a change event IF anything on the model changed after it gets the data from the server
    - `.set()` - sets attributes to a model; fires a change event; can accept 2 values, the first being attribute name, second being value OR an object of attributes
    - `.get()` - the way we access attributes on our model, takes a single argument which is the attribute we want to access
    - `.unset()` - clear a particular attribute  
    - `.clear()` - which will wipe out everything on the model
    - `.destroy()` - which destroys the model and fires a destroy event
    - `.validate()` - which you set up on the constructor, automatically this runs before saving to the server, and if the function returns false the server save won't happen
    - `.parse()` - which you set up on the constructor as well, it modifies the data that comes back from the server before setting those attributes to the model
    - custom methods - you will write any time you want to manipulate data but beyond just setting or getting a single attribute
  - collection methods
    - `.fetch()` - GET requests all the models for that collection using the url property; fires a add event for any models it finds that weren't already in the collection, a change event for any changes to models that were in the collection, and a remove event for any models that weren't on the server but were in the local collection
    - `.create()` - POST a single NEW model to the server; fires and add event, takes 2 arguments, the first is attributes for that model, the second is any modification to the jquery ajax request
    - `.get()` - returns a model in the collection based on its id. only if the model is already in our collection, doesn't make any server requests
    - `.set()` - updates the collection based on models you pass to it - we don't call this very often, usually we rely on fetch to do this for us, can fire add, remove, and change events based on what happens
  - view methods/properties
    - `.render()` - doesn't do anything by default, but by convention we are going to use it to stuff the element the view represents with its template and any backing data
    - `.el`, and `.$el` - the element the view represents and the element wrapped in jquery
    - custom functions - usually event handlers, which we reference in the events object
  - router methods
    - `.navigate()` - which updates the location.hash and can also trigger the associated function, but you have to pass `{trigger: true}` as the second argument for that to occur, first argument is the string of the route name you want to go to
    - custom methods - which are usually triggered by the routes object when a user navigates to a particular route
- any of the ajax methods for backbone (.save, .fetch, etc) we can pass modifications to the ajax request.
  - we are already doing that with our success or error functions, other modifications occur in the same object:
  ```js
  model.save(null, {
    success: function() {
      //do stuff on success
    },
    url: 'http://theDifferentUrl.com/saveHere/instead'
  });
  ```
- initialize
  - a function that lives on any backbone object, such as a view, model, collection or router.
  - customize it to run code when a new instance is created
  - most often we use this for data backed views; we would fetch the data we need in initialize, and set up the listener to the model or collection for changes.
- debugging server errors
  - if you see a AJAX error in the console:  
    - click on the error to view it in the network tab
    - click on the request itself (it's usually red)
    - look at the 'preview' tab to see if the response came back with helpful info
    - look at the 'headers' tab to check the headers specifically (like Authorization) and the data sent as well (in the 'request payload' at the bottom of the tab)
- list view children
- logout
- zombie views
- localStorage

## Resources
