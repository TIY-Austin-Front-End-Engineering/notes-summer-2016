[Table of Contents](/README.md)

# Day 41 - Transition Review, React Transitions, Object De-structuring

## Review
- css transitions
  - need a transitionable property (one that can have gradient between two states), and two states for that property
  - usually done with css pseudo-selector states such as `:hover` or `:active` OR by adding and removing classes
  - use the `transition` property in css

## Challenge
Recreate the following hover effect using html and css:

![](../images/hover.gif)

## Notes
- react Transitions
  - for simple hover effects, no different than plain html - just use a className and do all the work in css
  - for animations that occur on click events or when an element first enters the DOM, we have to use react's animation library
  - `npm install --save react-addons-css-transition-group`
- build slider
  - using `react-addons-css-transition-group`
    - import it
    - create an instance of it in our render function of a component
    - wrap the instance around any elements that we want to have a transition
    - transition components require 3 props:
      - transitionName
      - transitionEnterTimeout
      - transitionLeaveTimeout
    - transition children require a key prop
- click to add meta info with animation
- object de-structuring
  - if an existing variable name matches the name of a property you wish to create on an object, you can use this alternative syntax:
  ```js
  var name = 'jess';
  var obj = {name}
  // obj => {name: 'jess'}
  ```
  - this works in reverse, too. If i want to create a variable from an object, but keep the property name as the variable name:
  ```js
  var object = {name: 'jess'};
  var {name} = object;
  // name => 'jess'
  ```
- default values for parameters
  - when creating a function, creating default values 3 ways:
  ```js
  function coolFn(arg) {
    if (!arg) {arg = 'default value';}
  }
  function coolFn(arg) {
    arg = arg || 'default value'
  }
  // both the above will check arg for any default value, but what if arg IS passed in but it's falsey?
  function coolFn(arg = 'default value') {

  }
  // this method says "if you forgot to give ma n arg, i'll set it to 'default value'"
  ```

## Resources
- [a hover effects library](http://ianlunn.github.io/Hover/)
