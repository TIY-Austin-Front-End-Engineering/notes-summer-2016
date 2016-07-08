[Table of Contents](/README.md)

# Day 19 - Constructors

## Review
- adding elements to the DOM with jquery (nested structure)
- event listener that results in ajax request
- data attribute, identifying a particular element's backing data

## Challenge
An isogram is a word that has no repeating letters, consecutive or
non-consecutive. Implement a function that determines whether a
string that contains only letters is an isogram. Assume the empty
string is an isogram. Ignore letter case.

```js
//example function calls and their expected outputs:
isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
```

## Notes
- Constructors!
  - constructors are functions that are used to create objects
    - they are like **factories that make objects** that come pre-loaded with properties and methods
  - constructors are named with capital letters
  - to use a constructor, you must use the `new` keyword:
  ```js
    var jess = new Person();
    // jess is now an object!
  ```
  - inside the constructor function body, `this` refers to the object being constructed.
    - therefore we can set properties on the objects we are making like so:   
    ```js
    function Person() {
      this.name = 'jess'
    }
    ```
    - in the above example, every object I make with the `Person` constructor would have its `name` property set to `'jess'` This is how we would set default properties on our new objects.
    - to initialize the new object but with specific information that we pass in, we can use the constructor functions parameters:
    ```js
    function Person(name) {
      this.name = name
    }
    new Person('jess');
    ```
    - in the above example the new person object would have a name of 'jess', but not all objects would have this name. 

## Resources
